import { useEffect, useMemo, useRef, useState, type Dispatch } from 'react';
import type { StudyClass } from '../types';
import type { Action } from '../store';
import { buildExam, buildPractice, isCorrect, LETTERS, type QuizItem } from '../quiz';

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export default function QuizView({
  cls,
  deckIds,
  mode,
  count,
  dispatch,
  onExit,
}: {
  cls: StudyClass;
  deckIds: string[];
  mode: 'practice' | 'exam';
  count: number;
  dispatch: Dispatch<Action>;
  onExit: () => void;
}) {
  const [attempt, setAttempt] = useState(0);
  const [retryIds, setRetryIds] = useState<string[] | null>(null);
  // Retrying missed questions is always practice-style, with instant feedback.
  const exam = mode === 'exam' && !retryIds;
  // The question set is fixed for an attempt; card progress updates don't reshuffle it.
  const items = useMemo<QuizItem[]>(() => {
    if (retryIds) return buildPractice(cls, deckIds, 1000).filter((i) => retryIds.includes(i.card.id));
    return exam ? buildExam(cls, deckIds, count) : buildPractice(cls, deckIds, count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attempt]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number[]>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const recorded = useRef(false);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [finished]);

  const item = items[index];
  const chosen = answers[index] ?? [];
  const multi = item ? item.card.mc!.correct.length > 1 : false;
  const isChecked = !!checked[index];
  const answeredCount = Object.keys(answers).filter((k) => answers[+k]?.length).length;
  const results = items.map((it, i) => isCorrect(it.card, answers[i] ?? []));
  const score = results.filter(Boolean).length;

  const choose = (opt: number) => {
    if (finished || (!exam && isChecked)) return;
    setAnswers((a) => {
      const cur = a[index] ?? [];
      const next = multi ? (cur.includes(opt) ? cur.filter((x) => x !== opt) : [...cur, opt]) : [opt];
      return { ...a, [index]: next };
    });
  };

  const check = () => {
    if (!item || !chosen.length || isChecked) return;
    setChecked((c) => ({ ...c, [index]: true }));
    dispatch({ type: 'quizAnswer', classId: cls.id, deckId: item.deckId, cardId: item.card.id, correct: isCorrect(item.card, chosen) });
  };

  const finish = () => {
    if (recorded.current) return;
    recorded.current = true;
    if (exam) {
      items.forEach((it, i) =>
        dispatch({ type: 'quizAnswer', classId: cls.id, deckId: it.deckId, cardId: it.card.id, correct: isCorrect(it.card, answers[i] ?? []) }),
      );
    }
    dispatch({ type: 'recordQuiz', classId: cls.id, result: { at: Date.now(), mode: exam ? 'exam' : 'practice', correct: score, total: items.length, deckIds } });
    setFinished(true);
  };

  const next = () => {
    if (index < items.length - 1) setIndex(index + 1);
    else if (exam) {
      const unanswered = items.length - answeredCount;
      if (!unanswered || confirm(`${unanswered} question${unanswered > 1 ? 's are' : ' is'} unanswered. Submit anyway?`)) finish();
    } else finish();
  };

  const restart = (ids: string[] | null) => {
    setRetryIds(ids);
    setAttempt((n) => n + 1);
    setIndex(0);
    setAnswers({});
    setChecked({});
    setFinished(false);
    setSeconds(0);
    recorded.current = false;
  };

  // Keyboard: A–D / 1–4 pick, Enter checks or moves on.
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {});
  keyRef.current = (e) => {
    if (finished || !item || (e.target as HTMLElement).closest('input, textarea')) return;
    const k = e.key.toUpperCase();
    const pos = /^[1-8]$/.test(k) ? Number(k) - 1 : LETTERS.indexOf(k);
    if (pos >= 0 && pos < item.order.length && k.length === 1) choose(item.order[pos]);
    else if (e.key === 'Enter') {
      e.preventDefault();
      if (!exam && !isChecked) check();
      else if (exam ? chosen.length : isChecked) next();
    } else if (e.key === 'Escape') onExit();
  };
  useEffect(() => {
    const h = (e: KeyboardEvent) => keyRef.current(e);
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, []);

  if (!items.length) {
    return (
      <div className="quiz">
        <div className="quiz-empty">
          <h2>No questions available</h2>
          <p className="muted">Select at least one section that has practice questions.</p>
          <button className="btn primary" onClick={onExit}>Back</button>
        </div>
      </div>
    );
  }

  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    const missed = items.map((it, i) => ({ it, i })).filter(({ i }) => !results[i]);
    const byDeck = cls.decks
      .filter((d) => items.some((it) => it.deckId === d.id))
      .map((d) => {
        const idx = items.map((it, i) => (it.deckId === d.id ? i : -1)).filter((i) => i >= 0);
        return { d, right: idx.filter((i) => results[i]).length, total: idx.length };
      });
    return (
      <div className="quiz">
        <header className="quiz-top">
          <button className="icon-btn" onClick={onExit}>‹ Back to course</button>
          <span className="muted">{exam ? 'Mock exam' : 'Practice quiz'} · {fmt(seconds)}</span>
        </header>
        <div className="quiz-results">
          <div className={`score-ring ${pct >= 80 ? 'good' : pct >= 60 ? 'ok' : 'low'}`}>
            <strong>{pct}%</strong>
            <span>{score} / {items.length}</span>
          </div>
          <h2>{pct === 100 ? 'Perfect score! 🎉' : pct >= 80 ? 'Great work!' : pct >= 60 ? 'Getting there' : 'Keep practising'}</h2>
          <div className="by-deck">
            {byDeck.map(({ d, right, total }) => (
              <div key={d.id} className="by-deck-row">
                <span>{d.name}</span>
                <span className="bar light"><span style={{ width: `${(right / total) * 100}%` }} /></span>
                <span className="muted">{right}/{total}</span>
              </div>
            ))}
          </div>
          <div className="summary-actions">
            {missed.length > 0 && (
              <button className="btn primary" onClick={() => restart(missed.map(({ it }) => it.card.id))}>
                Retry {missed.length} missed
              </button>
            )}
            <button className={`btn ${missed.length ? '' : 'primary'}`} onClick={() => restart(null)}>
              {exam ? 'New mock exam' : 'New practice set'}
            </button>
            <button className="btn" onClick={onExit}>Done</button>
          </div>
          {missed.length > 0 && <h3>Review what you missed</h3>}
          <ol className="review-list">
            {missed.map(({ it, i }) => (
              <li key={it.card.id}>
                <div className="review-q">{it.card.question}</div>
                <div className="review-yours">
                  Your answer: {(answers[i] ?? []).length ? (answers[i] ?? []).map((o) => it.card.mc!.options[o]).join('; ') : '— (no answer)'}
                </div>
                <div className="review-right">Correct: {it.card.mc!.correct.map((o) => it.card.mc!.options[o]).join('; ')}</div>
                <div className="review-explain">{it.card.mc!.explain}</div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  const deck = cls.decks.find((d) => d.id === item.deckId);
  const right = isChecked && isCorrect(item.card, chosen);

  return (
    <div className="quiz">
      <header className="quiz-top">
        <button className="icon-btn" onClick={() => (exam && answeredCount && !confirm('Leave the exam? Your answers won’t be saved.') ? null : onExit())}>
          ‹ Exit
        </button>
        <span className="quiz-title">{retryIds ? 'Retry missed' : exam ? 'Mock exam' : 'Practice quiz'}</span>
        <span className="muted">{fmt(seconds)}</span>
      </header>
      <div className="quiz-progress">
        {items.map((_, i) => {
          const state = exam ? (answers[i]?.length ? 'answered' : '') : checked[i] ? (results[i] ? 'right' : 'wrong') : '';
          return (
            <button
              key={i}
              className={`qdot ${state} ${i === index ? 'current' : ''}`}
              aria-label={`Question ${i + 1}`}
              disabled={!exam}
              onClick={() => exam && setIndex(i)}
            />
          );
        })}
      </div>

      <main className="quiz-main">
        <div className="quiz-meta">
          Question {index + 1} of {items.length}
          <span className="dot-sep">·</span>
          {deck?.name}
        </div>
        <h2 className="quiz-q">{item.card.question}</h2>
        {multi && <div className="quiz-hint">Select every correct answer.</div>}
        <div className="options" role={multi ? 'group' : 'radiogroup'}>
          {item.order.map((opt, pos) => {
            const sel = chosen.includes(opt);
            const isRight = item.card.mc!.correct.includes(opt);
            const cls2 = isChecked ? (isRight ? 'right' : sel ? 'wrong' : 'dim') : sel ? 'selected' : '';
            return (
              <button key={opt} className={`option ${cls2}`} onClick={() => choose(opt)} role={multi ? 'checkbox' : 'radio'} aria-checked={sel}>
                <span className={`opt-key ${multi ? 'square' : ''}`}>{LETTERS[pos]}</span>
                <span className="opt-text">{item.card.mc!.options[opt]}</span>
                {isChecked && isRight && <span className="opt-mark">✓</span>}
                {isChecked && sel && !isRight && <span className="opt-mark">✕</span>}
              </button>
            );
          })}
        </div>

        {isChecked && (
          <div className={`feedback ${right ? 'right' : 'wrong'}`}>
            <strong>{right ? 'Correct!' : 'Not quite.'}</strong> {item.card.mc!.explain}
          </div>
        )}

        <div className="quiz-actions">
          {exam && index > 0 && <button className="btn" onClick={() => setIndex(index - 1)}>‹ Previous</button>}
          <span className="spacer" />
          {!exam && !isChecked ? (
            <button className="btn primary" disabled={!chosen.length} onClick={check}>Check answer</button>
          ) : (
            <button className="btn primary" disabled={exam && !chosen.length && index < items.length - 1} onClick={next}>
              {index < items.length - 1 ? 'Next ›' : exam ? 'Submit exam' : 'See results'}
            </button>
          )}
        </div>
        {exam && index < items.length - 1 && (
          <div className="quiz-skip">
            <button className="link-btn" onClick={() => setIndex(index + 1)}>Skip for now</button>
            {answeredCount === items.length && <button className="link-btn" onClick={finish}>Submit exam</button>}
          </div>
        )}
        <div className="muted small kbd-hint">Keys: A–D to choose · Enter to {exam ? 'continue' : 'check / continue'}</div>
      </main>
    </div>
  );
}
