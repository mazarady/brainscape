import { useCallback, useEffect, useRef, useState, type Dispatch } from 'react';
import Icon from './Icon';
import type { Rating, StudyClass } from '../types';
import { allCards, mastery, pickNext, studyPool } from '../scheduler';
import type { Action } from '../store';
import { MasteryRing, RATING_COLORS, RatingBar } from './ClassView';
import Modal from './Modal';
import { flashcardOrder, LETTERS } from '../quiz';

const ROUND_SIZE = 10;
const RATING_LABELS = ['', 'Not at all', 'Barely', 'Somewhat', 'Mostly', 'Perfectly'];

interface Current {
  deckId: string;
  cardId: string;
}

function Gauge({ value }: { value: number }) {
  // value in [-50, 50] -> needle angle [-90deg, 90deg]
  const clamped = Math.max(-50, Math.min(50, value));
  return (
    <div className="gauge">
      <svg viewBox="0 0 200 120" width="180">
        <defs>
          <linearGradient id="gauge-grad" x1="0" x2="1">
            <stop offset="0" stopColor="#b0127c" />
            <stop offset="1" stopColor="#1aa3d9" />
          </linearGradient>
        </defs>
        <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gauge-grad)" strokeWidth="14" strokeLinecap="round" />
        <g className="needle" style={{ transform: `rotate(${(clamped / 50) * 90}deg)` }}>
          <polygon points="100,30 92,100 108,100" fill="#fff" />
          <circle cx="100" cy="100" r="12" fill="#fff" />
          <circle cx="100" cy="100" r="5" className="needle-hub" />
        </g>
      </svg>
      <div className="gauge-scale">
        <span>-50</span>
        <strong>{value > 0 ? `+${value}` : value}</strong>
        <span>50</span>
      </div>
      <div className="gauge-caption">Confidence gained</div>
    </div>
  );
}

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export default function StudyView({
  cls,
  deckIds,
  dispatch,
  onExit,
}: {
  cls: StudyClass;
  deckIds?: string[];
  dispatch: Dispatch<Action>;
  onExit: () => void;
}) {
  // A single-deck study session overrides the class's deck selection.
  const scoped: StudyClass = deckIds ? { ...cls, selectedDeckIds: deckIds } : cls;
  const pool = studyPool(scoped);

  const [current, setCurrent] = useState<Current | null>(null);
  const [lastCardId, setLastCardId] = useState<string>();
  const [revealed, setRevealed] = useState(false);
  const [roundRatings, setRoundRatings] = useState<Rating[]>([]);
  const [roundGain, setRoundGain] = useState(0);
  const [round, setRound] = useState(1);
  const [panel, setPanel] = useState<'round' | 'overall'>('round');
  const [roundSeconds, setRoundSeconds] = useState(0);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState({ q: '', a: '' });
  const unsaved = useRef(0);
  const roundDone = roundRatings.length >= ROUND_SIZE;

  // Timer: counts while the round is in progress; flushes to the class total periodically and on exit.
  useEffect(() => {
    if (roundDone) return;
    const t = setInterval(() => {
      setRoundSeconds((s) => s + 1);
      unsaved.current += 1;
      if (unsaved.current >= 30) {
        dispatch({ type: 'addStudyTime', classId: cls.id, seconds: unsaved.current });
        unsaved.current = 0;
      }
    }, 1000);
    return () => clearInterval(t);
  }, [roundDone, cls.id, dispatch]);
  useEffect(
    () => () => {
      if (unsaved.current) dispatch({ type: 'addStudyTime', classId: cls.id, seconds: unsaved.current });
      unsaved.current = 0;
    },
    [cls.id, dispatch],
  );

  // Pick the next card whenever we don't have one (or the current one was deleted).
  const entry = current && pool.find((e) => e.card.id === current.cardId);
  useEffect(() => {
    if (entry || roundDone) return;
    const next = pickNext(pool, cls.step, cls.order, lastCardId, round);
    setCurrent(next ? { deckId: next.deckId, cardId: next.card.id } : null);
    setRevealed(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry, roundDone, cls]);

  const rate = useCallback(
    (r: Exclude<Rating, 0>) => {
      if (!entry || !revealed) return;
      dispatch({ type: 'rate', classId: cls.id, deckId: entry.deckId, cardId: entry.card.id, rating: r });
      setRoundGain((g) => g + (r - entry.card.rating));
      setRoundRatings((rs) => [...rs, r]);
      setLastCardId(entry.card.id);
      setCurrent(null);
      setRevealed(false);
    },
    [entry, revealed, cls.id, dispatch],
  );

  const nextRound = () => {
    setRound((n) => n + 1);
    setRoundRatings([]);
    setRoundGain(0);
    setRoundSeconds(0);
  };

  // Keyboard shortcuts: one listener; it always calls the latest handler via a ref.
  const keyHandler = useRef<(e: KeyboardEvent) => void>(() => {});
  keyHandler.current = (e: KeyboardEvent) => {
    if (editing || e.repeat || (e.target as HTMLElement).closest('input, textarea')) return;
    if (e.key === 'Escape') onExit();
    else if (roundDone) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        nextRound();
      }
    } else if (!revealed && (e.key === ' ' || e.key === 'Enter')) {
      e.preventDefault();
      setRevealed(true);
    } else if (revealed && /^[1-5]$/.test(e.key)) rate(Number(e.key) as Exclude<Rating, 0>);
  };
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => keyHandler.current(e);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const deck = entry && cls.decks.find((d) => d.id === entry.deckId);
  const mcOrder = entry?.card.mc ? flashcardOrder(entry.card) : null;
  const mcLetters = mcOrder
    ? mcOrder
        .map((opt, pos) => (entry!.card.mc!.correct.includes(opt) ? LETTERS[pos] : ''))
        .filter(Boolean)
        .join(', ')
    : '';
  const cardIndex = deck && entry ? deck.cards.findIndex((c) => c.id === entry.card.id) + 1 : 0;
  const scopedCards = allCards(scoped.decks.filter((d) => scoped.selectedDeckIds.includes(d.id)));

  return (
    <div className="study">
      <aside className="study-panel">
        <div className="study-panel-top">
          <button className="icon-btn light" aria-label="Back to class" onClick={onExit}>‹ Back</button>
          <span className="class-icon sm" style={{ background: cls.color }}>{cls.icon}</span>
        </div>
        <div className="study-class-name">{cls.name}</div>
        <div className="panel-tabs">
          <button className={panel === 'round' ? 'on' : ''} onClick={() => setPanel('round')}>This Round</button>
          <button className={panel === 'overall' ? 'on' : ''} onClick={() => setPanel('overall')}>Overall</button>
        </div>
        {panel === 'round' ? (
          <>
            <Gauge value={roundGain} />
            <ol className="round-dots">
              {Array.from({ length: ROUND_SIZE }, (_, i) => {
                const r = roundRatings[i];
                const isCurrent = i === roundRatings.length && !roundDone;
                return (
                  <li
                    key={i}
                    className={isCurrent ? 'current' : ''}
                    style={r ? { background: RATING_COLORS[r] } : undefined}
                    title={r ? RATING_LABELS[r] : undefined}
                  />
                );
              })}
            </ol>
            <div className="round-time">
              <span>Round {round}:</span>
              <strong>{fmt(roundSeconds)}</strong>
            </div>
          </>
        ) : (
          <div className="overall">
            <MasteryRing value={mastery(scopedCards)} size={140} />
            {scoped.decks
              .filter((d) => scoped.selectedDeckIds.includes(d.id))
              .map((d) => (
                <div key={d.id} className="overall-deck">
                  <div className="overall-deck-name">
                    <span>{d.name}</span>
                    <span>{Math.round(mastery(d.cards))}%</span>
                  </div>
                  <RatingBar cards={d.cards} />
                </div>
              ))}
          </div>
        )}
      </aside>

      <section className="study-main">
        {roundDone ? (
          <div className="round-summary">
            <h2>Round {round} complete 🎉</h2>
            <p>
              You reviewed {ROUND_SIZE} cards in {fmt(roundSeconds)} and gained{' '}
              <strong>{roundGain > 0 ? `+${roundGain}` : roundGain}</strong> confidence points.
            </p>
            <div className="summary-chips">
              {[1, 2, 3, 4, 5].map((r) => (
                <div key={r} className="summary-chip">
                  <span className="chip" style={{ background: RATING_COLORS[r] }}><span className="glyph">{r}</span></span>
                  <span>{roundRatings.filter((x) => x === r).length}</span>
                </div>
              ))}
            </div>
            <p className="muted">Current mastery: {mastery(scopedCards).toFixed(1)}%</p>
            <div className="summary-actions">
              <button className="btn" onClick={onExit}>Done for now</button>
              <button className="btn primary" autoFocus onClick={nextRound}>Continue studying</button>
            </div>
          </div>
        ) : !entry ? (
          <div className="round-summary">
            <h2>No cards to study</h2>
            <p className="muted">Select at least one deck that has cards.</p>
            <button className="btn primary" onClick={onExit}>Back to class</button>
          </div>
        ) : (
          <>
            <div className="study-top">
              <span>Deck: <strong>{deck?.name}</strong></span>
              <span>Card: <strong>{cardIndex}/{deck?.cards.length}</strong></span>
              <span className="muted small">Seen {entry.card.timesSeen}×</span>
            </div>
            <div className={`flashcard ${revealed ? 'revealed' : ''}`}>
              <div className="flashcard-head" style={{ background: cls.color }}>
                {entry.card.rating > 0 && (
                  <span className="last-rating" title="Your last rating">
                    Last: {RATING_LABELS[entry.card.rating]}
                  </span>
                )}
                {!entry.card.builtIn && <button
                  className="icon-btn light"
                  aria-label="Edit card"
                  onClick={() => {
                    setDraft({ q: entry.card.question, a: entry.card.answer });
                    setEditing(true);
                  }}
                >
                  <Icon name="edit" />
                </button>}
              </div>
              <div className="face question">
                <span className="face-tag">Q</span>
                <div className="face-body">
                  <div className="face-text">{entry.card.question}</div>
                  {mcOrder && (
                    <ol className="fc-options">
                      {mcOrder.map((opt, pos) => (
                        <li key={opt} className={revealed && entry.card.mc!.correct.includes(opt) ? 'right' : ''}>
                          <span className="fc-letter"><span className="glyph">{LETTERS[pos]}</span></span>
                          <span>{entry.card.mc!.options[opt]}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              </div>
              {revealed &&
                (mcOrder ? (
                  <div className="face answer">
                    <div className="fc-answer">
                      <div className="face-text big">{mcLetters}</div>
                      {entry.card.mc!.source && <div className="source">{entry.card.mc!.source}</div>}
                    </div>
                  </div>
                ) : (
                  <div className="face answer">
                    <span className="face-tag">A</span>
                    <div className={`face-text ${entry.card.answer.length < 20 ? 'big' : ''}`}>{entry.card.answer}</div>
                  </div>
                ))}
            </div>
            <div className="study-controls">
              {!revealed ? (
                <button className="btn primary reveal" onClick={() => setRevealed(true)}>
                  Reveal answer <kbd>Space</kbd>
                </button>
              ) : (
                <div className="rate">
                  <div className="rate-prompt">How well did you know this?</div>
                  <div className="rate-buttons">
                    {([1, 2, 3, 4, 5] as const).map((r) => (
                      <button key={r} className="rate-btn" style={{ background: RATING_COLORS[r] }} onClick={() => rate(r)} aria-label={`${r} – ${RATING_LABELS[r]}`}>
                        <span className="glyph">{r}</span>
                      </button>
                    ))}
                  </div>
                  <div className="rate-legend">
                    <span>Not at all</span>
                    <span>Perfectly</span>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </section>

      {editing && entry && (
        <Modal title="Edit card" onClose={() => setEditing(false)}>
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (!draft.q.trim() || !draft.a.trim()) return;
              dispatch({ type: 'updateCard', classId: cls.id, deckId: entry.deckId, cardId: entry.card.id, question: draft.q, answer: draft.a });
              setEditing(false);
            }}
          >
            <label>
              Question
              <textarea rows={4} autoFocus value={draft.q} onChange={(e) => setDraft({ ...draft, q: e.target.value })} />
            </label>
            <label>
              Answer
              <textarea rows={4} value={draft.a} onChange={(e) => setDraft({ ...draft, a: e.target.value })} />
            </label>
            <div className="form-actions">
              <button className="btn primary" type="submit">Save</button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}
