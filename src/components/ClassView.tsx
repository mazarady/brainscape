import { useState, type Dispatch } from 'react';
import Icon from './Icon';
import type { Card, Deck, StudyClass } from '../types';
import { allCards, mastery, ratingBreakdown, studiedCount } from '../scheduler';
import type { Action } from '../store';
import type { View } from '../App';
import ClassForm from './ClassForm';
import Modal from './Modal';
import Menu from './Menu';

export const RATING_COLORS = ['#c9ced6', '#b0127c', '#f2994a', '#f2c94c', '#6fbf3b', '#1aa3d9'];

export function MasteryRing({ value, size = 120 }: { value: number; size?: number }) {
  const r = size / 2 - 8;
  const circ = 2 * Math.PI * r;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle cx={size / 2} cy={size / 2} r={r} className="ring-track" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          className="ring-fill"
          strokeDasharray={circ}
          strokeDashoffset={circ * (1 - value / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-label">
        <span>Mastery</span>
        <strong>{value.toFixed(1)}%</strong>
      </div>
    </div>
  );
}

export function RatingBar({ cards }: { cards: Card[] }) {
  const b = ratingBreakdown(cards);
  const total = cards.length || 1;
  return (
    <div className="rating-bar" title={`${studiedCount(cards)} of ${cards.length} studied`}>
      {[5, 4, 3, 2, 1].map((r) =>
        b[r as 1] ? <span key={r} style={{ width: `${(b[r as 1] / total) * 100}%`, background: RATING_COLORS[r] }} /> : null,
      )}
    </div>
  );
}

function fmtTime(sec: number) {
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  return h ? `${h}h ${m}m` : `${m}m`;
}

export default function ClassView({ cls, dispatch, go }: { cls: StudyClass; dispatch: Dispatch<Action>; go: (v: View) => void }) {
  const [tab, setTab] = useState<'decks' | 'about'>('decks');
  const [editing, setEditing] = useState(false);
  const [newDeckName, setNewDeckName] = useState('');
  const cards = allCards(cls.decks);
  const selectedCards = allCards(cls.decks.filter((d) => cls.selectedDeckIds.includes(d.id)));
  const allSelected = cls.decks.length > 0 && cls.selectedDeckIds.length === cls.decks.length;
  const breakdown = ratingBreakdown(cards);
  const isCourse = !!cls.courseId;
  const quizCards = selectedCards.filter((c) => c.mc);
  const mastered = quizCards.filter((c) => (c.quizSeen ?? 0) > 0 && !c.quizLastWrong).length;
  const exams = (cls.quizHistory ?? []).filter((r) => r.mode === 'exam' && r.total > 0);
  const lastExam = exams[exams.length - 1];
  const bestExam = exams.length ? Math.max(...exams.map((r) => Math.round((r.correct / r.total) * 100))) : null;
  const seenQ = quizCards.reduce((n, c) => n + (c.quizSeen ?? 0), 0);
  const practiceAcc = seenQ ? Math.round((quizCards.reduce((n, c) => n + (c.quizCorrect ?? 0), 0) / seenQ) * 100) : null;

  const addDeck = () => {
    const name = newDeckName.trim();
    if (!name) return;
    dispatch({ type: 'addDeck', classId: cls.id, name });
    setNewDeckName('');
  };

  const groups: { section?: string; decks: Deck[] }[] = [];
  for (const d of cls.decks) {
    const g = groups.find((x) => x.section === d.section);
    if (g) g.decks.push(d);
    else groups.push({ section: d.section, decks: [d] });
  }
  const collapseKey = `recall-collapsed:${cls.id}`;
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(collapseKey) ?? '{}');
    } catch {
      return {};
    }
  });
  const toggleGroup = (key: string) =>
    setCollapsed((c) => {
      const next = { ...c, [key]: !c[key] };
      try {
        localStorage.setItem(collapseKey, JSON.stringify(next));
      } catch {
        /* per-browser convenience only */
      }
      return next;
    });
  const renderDeck = (d: Deck) => {
    const i = cls.decks.indexOf(d);
    const checked = cls.selectedDeckIds.includes(d.id);
    return (
      <li key={d.id} className={`deck-row ${checked ? '' : 'unchecked'}`}>
        <label className="check">
          <input type="checkbox" checked={checked} onChange={() => dispatch({ type: 'toggleDeck', classId: cls.id, deckId: d.id })} />
        </label>
        <span className="deck-pct">{Math.round(mastery(d.cards))}%</span>
        <div className="deck-main">
          <div className="deck-title">
            <button
              className="deck-name"
              onClick={() => go(d.notes ? { name: 'notes', classId: cls.id, deckId: d.id } : { name: 'edit', classId: cls.id, deckId: d.id })}
            >
              {d.name}
            </button>
            <span className="muted small">
              {d.cards.length === 0 ? 'No cards yet' : `${studiedCount(d.cards)} of ${d.cards.length} unique cards studied`}
            </span>
          </div>
          <RatingBar cards={d.cards} />
        </div>
        <Menu
          items={[
            { label: 'Edit cards', onClick: () => go({ name: 'edit', classId: cls.id, deckId: d.id }) },
            ...(d.notes ? [{ label: 'Key points', onClick: () => go({ name: 'notes', classId: cls.id, deckId: d.id }) }] : []),
            ...(d.cards.some((c) => c.mc)
              ? [{ label: 'Practice quiz', onClick: () => go({ name: 'quiz', classId: cls.id, mode: 'practice', deckIds: [d.id], count: 10, key: Date.now() }) }]
              : []),
            ...(d.builtIn ? [] : [{
              label: 'Rename',
              onClick: () => {
                const name = prompt('Deck name', d.name)?.trim();
                if (name) dispatch({ type: 'renameDeck', classId: cls.id, deckId: d.id, name });
              },
            }]),
            ...(i > 0 && !d.builtIn && !cls.decks[i - 1].builtIn ? [{ label: 'Move up', onClick: () => dispatch({ type: 'moveDeck', classId: cls.id, deckId: d.id, dir: -1 }) }] : []),
            ...(i < cls.decks.length - 1 && !d.builtIn ? [{ label: 'Move down', onClick: () => dispatch({ type: 'moveDeck', classId: cls.id, deckId: d.id, dir: 1 }) }] : []),
            { label: 'Reset progress', onClick: () => dispatch({ type: 'resetProgress', classId: cls.id, deckId: d.id }) },
            ...(d.builtIn
              ? []
              : [
                  {
                    label: 'Delete deck',
                    danger: true,
                    onClick: () => confirm(`Delete deck "${d.name}"?`) && dispatch({ type: 'deleteDeck', classId: cls.id, deckId: d.id }),
                  },
                ]),
          ]}
        />
        <button
          className="play-btn"
          aria-label={`Study ${d.name}`}
          disabled={d.cards.length === 0}
          onClick={() => go({ name: 'study', classId: cls.id, deckIds: [d.id] })}
        >
          <Icon name="play" size={14} />
        </button>
      </li>
    );
  };

  return (
    <div className="class-view">
      <header className="class-header">
        <div className="class-badge" style={{ background: cls.color }}>{cls.icon}</div>
        <div className="class-head-main">
          <h1>{cls.name}</h1>
          <div className="class-sub">
            Cards studied: <strong>{studiedCount(cards)} of {cards.length}</strong>
            <span className="dot-sep">·</span>
            Time studied: <strong>{fmtTime(cls.totalStudySeconds)}</strong>
          </div>
          <div className="class-actions">
            <button
              className="btn primary study-btn"
              disabled={selectedCards.length === 0}
              onClick={() => go({ name: 'study', classId: cls.id })}
            >
              {isCourse ? 'Flashcards' : 'Study'} <span className="play"><Icon name="play" size={14} /></span>
            </button>
            <Menu
              items={[
                { label: 'Edit class details', onClick: () => setEditing(true) },
                {
                  label: 'Reset all progress',
                  onClick: () => confirm('Reset confidence ratings for every card in this class?') && dispatch({ type: 'resetProgress', classId: cls.id }),
                },
                ...(isCourse
                  ? []
                  : [
                      {
                        label: 'Delete class',
                        danger: true,
                        onClick: () => confirm(`Delete "${cls.name}" and all its decks?`) && dispatch({ type: 'deleteClass', classId: cls.id }),
                      },
                    ]),
              ]}
            />
          </div>
        </div>
        <MasteryRing value={mastery(cards)} />
      </header>

      {isCourse && (
        <section className="exam-prep">
          <div className="exam-prep-main">
            <h2>Exam prep</h2>
            <p className="muted small">
              {quizCards.length} multiple-choice questions in the selected sections · {mastered} answered correctly on their last try
            </p>
            <div className="exam-buttons">
              <button
                className="btn primary"
                disabled={!quizCards.length}
                onClick={() => go({ name: 'quiz', classId: cls.id, mode: 'practice', deckIds: cls.selectedDeckIds, count: 10, key: Date.now() })}
              >
                Practice quiz · 10 questions
              </button>
              <button
                className="btn exam"
                disabled={!quizCards.length}
                onClick={() => go({ name: 'quiz', classId: cls.id, mode: 'exam', deckIds: cls.selectedDeckIds, count: 25, key: Date.now() })}
              >
                Mock exam · 25 questions
              </button>
            </div>
          </div>
          <div className="exam-stats">
            <div>
              <span className="stat-label">Last mock exam</span>
              <strong>{lastExam ? `${Math.round((lastExam.correct / lastExam.total) * 100)}%` : '—'}</strong>
            </div>
            <div>
              <span className="stat-label">Best mock exam</span>
              <strong>{bestExam !== null ? `${bestExam}%` : '—'}</strong>
            </div>
            <div>
              <span className="stat-label">Practice accuracy</span>
              <strong>{practiceAcc !== null ? `${practiceAcc}%` : '—'}</strong>
            </div>
          </div>
        </section>
      )}

      <nav className="tabs">
        <button className={tab === 'about' ? 'on' : ''} onClick={() => setTab('about')}>About</button>
        <button className={tab === 'decks' ? 'on' : ''} onClick={() => setTab('decks')}>Decks ({cls.decks.length})</button>
      </nav>

      {tab === 'about' ? (
        <section className="about">
          <p>{cls.description || <span className="muted">No description yet.</span>}</p>
          <h3>Confidence breakdown</h3>
          <div className="breakdown">
            {([5, 4, 3, 2, 1, 0] as const).map((r) => (
              <div key={r} className="breakdown-row">
                <span className="chip" style={{ background: RATING_COLORS[r] }}><span className="glyph">{r || '–'}</span></span>
                <span className="breakdown-label">{r ? ['', 'Not at all', 'Barely', 'Somewhat', 'Mostly', 'Perfectly'][r] : 'Not studied'}</span>
                <span className="breakdown-bar"><span style={{ width: `${(breakdown[r] / (cards.length || 1)) * 100}%`, background: RATING_COLORS[r] }} /></span>
                <span className="breakdown-n">{breakdown[r]}</span>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <section className="decks">
          <div className="deck-toolbar">
            <label className="check">
              <input type="checkbox" checked={allSelected} onChange={() => dispatch({ type: 'selectAllDecks', classId: cls.id, selected: !allSelected })} />
              <span>All</span>
            </label>
            <div className="segmented" title="Progressive introduces new cards in deck order; Random shuffles them.">
              {(['progressive', 'random'] as const).map((o) => (
                <button key={o} className={cls.order === o ? 'on' : ''} onClick={() => dispatch({ type: 'setOrder', classId: cls.id, order: o })}>
                  {o}
                </button>
              ))}
            </div>
            <span className="muted small">{selectedCards.length} cards selected</span>
          </div>

          {groups.length === 1 && !groups[0].section ? (
            <ul className="deck-list">{groups[0].decks.map(renderDeck)}</ul>
          ) : (
            groups.map((g) => {
              const key = g.section ?? 'other';
              const open = !collapsed[key];
              const ids = g.decks.map((d) => d.id);
              const gCards = allCards(g.decks);
              const allOn = ids.every((id) => cls.selectedDeckIds.includes(id));
              const someOn = ids.some((id) => cls.selectedDeckIds.includes(id));
              const mcCount = gCards.filter((c) => c.mc).length;
              return (
                <div key={key} className={`section-group ${open ? 'open' : ''}`}>
                  <div className="section-head">
                    <label className="check" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={allOn}
                        ref={(el) => {
                          if (el) el.indeterminate = someOn && !allOn;
                        }}
                        onChange={() => dispatch({ type: 'setDecksSelected', classId: cls.id, deckIds: ids, selected: !allOn })}
                      />
                    </label>
                    <button className="section-toggle" aria-expanded={open} onClick={() => toggleGroup(key)}>
                      <span className="chev" aria-hidden="true">
                        <Icon name="chevron" size={12} />
                      </span>
                      <span className="section-title">{g.section ?? 'Your decks'}</span>
                      <span className="muted small">
                        {g.decks.length} part{g.decks.length === 1 ? '' : 's'} · {mcCount || gCards.length} {mcCount ? 'questions' : 'cards'} · {Math.round(mastery(gCards))}% mastery
                      </span>
                    </button>
                    <div className="section-actions">
                      <button className="btn sm" disabled={!gCards.length} onClick={() => go({ name: 'study', classId: cls.id, deckIds: ids })}>
                        Study section
                      </button>
                      {mcCount > 0 && (
                        <button
                          className="btn sm exam"
                          onClick={() => go({ name: 'quiz', classId: cls.id, mode: 'exam', deckIds: ids, count: 25, key: Date.now() })}
                        >
                          25-question quiz
                        </button>
                      )}
                    </div>
                  </div>
                  {open && <ul className="deck-list">{g.decks.map(renderDeck)}</ul>}
                </div>
              );
            })
          )}

          <form
            className="add-deck"
            onSubmit={(e) => {
              e.preventDefault();
              addDeck();
            }}
          >
            <input value={newDeckName} onChange={(e) => setNewDeckName(e.target.value)} placeholder="New deck name…" />
            <button className="btn" type="submit" disabled={!newDeckName.trim()}>+ Add deck</button>
          </form>
        </section>
      )}

      {editing && (
        <Modal title="Edit class" onClose={() => setEditing(false)}>
          <ClassForm
            initial={{ name: cls.name, icon: cls.icon, color: cls.color, description: cls.description }}
            submitLabel="Save"
            onSubmit={(patch) => {
              dispatch({ type: 'updateClass', classId: cls.id, patch });
              setEditing(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
}
