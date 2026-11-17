import { useState, type Dispatch } from 'react';
import type { Card, Deck, StudyClass } from '../types';
import type { Action } from '../store';
import { RATING_COLORS } from './ClassView';
import Modal from './Modal';

/** Parse "question<TAB>answer", "question :: answer" or "question | answer" lines. */
export function parseBulk(text: string): [string, string][] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const m = line.split(/\t| :: | \| /);
      if (m.length < 2) return null;
      const [q, ...rest] = m;
      return [q.trim(), rest.join(' ').trim()] as [string, string];
    })
    .filter((p): p is [string, string] => !!p && !!p[0] && !!p[1]);
}

function CardRow({ card, n, onSave, onDelete }: { card: Card; n: number; onSave: (q: string, a: string) => void; onDelete: () => void }) {
  const [editing, setEditing] = useState(false);
  const [q, setQ] = useState(card.question);
  const [a, setA] = useState(card.answer);
  if (editing) {
    return (
      <li className="card-row editing">
        <span className="card-n">{n}</span>
        <textarea value={q} onChange={(e) => setQ(e.target.value)} rows={3} autoFocus aria-label="Question" />
        <textarea value={a} onChange={(e) => setA(e.target.value)} rows={3} aria-label="Answer" />
        <div className="card-row-actions">
          <button
            className="btn primary sm"
            disabled={!q.trim() || !a.trim()}
            onClick={() => {
              onSave(q.trim(), a.trim());
              setEditing(false);
            }}
          >
            Save
          </button>
          <button
            className="btn sm"
            onClick={() => {
              setQ(card.question);
              setA(card.answer);
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </li>
    );
  }
  return (
    <li className="card-row" onDoubleClick={() => !card.builtIn && setEditing(true)}>
      <span className="card-n">{n}</span>
      <div className="card-q">{card.question}</div>
      <div className="card-a">{card.answer}</div>
      <div className="card-row-actions">
        <span className="chip" style={{ background: RATING_COLORS[card.rating] }} title={card.rating ? `Confidence ${card.rating}` : 'Not studied'}>
          {card.rating || '–'}
        </span>
        {!card.builtIn && (
          <>
            <button className="icon-btn" aria-label="Edit" onClick={() => setEditing(true)}>✎</button>
            <button className="icon-btn" aria-label="Delete" onClick={() => confirm('Delete this card?') && onDelete()}>🗑</button>
          </>
        )}
      </div>
    </li>
  );
}

export default function DeckEditor({ cls, deck, dispatch, onBack }: { cls: StudyClass; deck: Deck; dispatch: Dispatch<Action>; onBack: () => void }) {
  const [q, setQ] = useState('');
  const [a, setA] = useState('');
  const [bulkOpen, setBulkOpen] = useState(false);
  const [bulk, setBulk] = useState('');
  const [filter, setFilter] = useState('');
  const parsed = parseBulk(bulk);
  const ids = { classId: cls.id, deckId: deck.id };
  const shown = deck.cards
    .map((c, i) => ({ c, n: i + 1 }))
    .filter(({ c }) => !filter || (c.question + ' ' + c.answer).toLowerCase().includes(filter.toLowerCase()));

  const add = () => {
    if (!q.trim() || !a.trim()) return;
    dispatch({ type: 'addCards', ...ids, pairs: [[q.trim(), a.trim()]] });
    setQ('');
    setA('');
    document.getElementById('new-q')?.focus();
  };

  return (
    <div className="editor">
      <button className="link-btn back" onClick={onBack}>‹ {cls.name}</button>
      <div className="editor-head">
        <h1>{deck.name}</h1>
        <span className="muted">{deck.cards.length} cards</span>
        <div className="spacer" />
        <button className="btn" onClick={() => setBulkOpen(true)}>Bulk import</button>
      </div>

      <form
        className="new-card"
        onSubmit={(e) => {
          e.preventDefault();
          add();
        }}
      >
        <textarea
          id="new-q"
          rows={3}
          placeholder="Question (front)"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => (e.metaKey || e.ctrlKey) && e.key === 'Enter' && add()}
        />
        <textarea
          rows={3}
          placeholder="Answer (back)"
          value={a}
          onChange={(e) => setA(e.target.value)}
          onKeyDown={(e) => (e.metaKey || e.ctrlKey) && e.key === 'Enter' && add()}
        />
        <button className="btn primary" type="submit" disabled={!q.trim() || !a.trim()}>
          + Add card
        </button>
      </form>
      <div className="muted small hint">Tip: press Ctrl/⌘ + Enter to add quickly. Double-click a card to edit it.</div>

      {deck.cards.length > 5 && (
        <input className="filter" placeholder="Search cards…" value={filter} onChange={(e) => setFilter(e.target.value)} />
      )}

      <div className="card-list-head">
        <span />
        <span>Question</span>
        <span>Answer</span>
        <span />
      </div>
      <ul className="card-list">
        {shown.map(({ c, n }) => (
          <CardRow
            key={c.id}
            card={c}
            n={n}
            onSave={(question, answer) => dispatch({ type: 'updateCard', ...ids, cardId: c.id, question, answer })}
            onDelete={() => dispatch({ type: 'deleteCard', ...ids, cardId: c.id })}
          />
        ))}
        {deck.cards.length === 0 && <li className="empty">No cards yet — add your first one above.</li>}
      </ul>

      {bulkOpen && (
        <Modal title="Bulk import cards" onClose={() => setBulkOpen(false)}>
          <p className="muted small">
            One card per line. Separate question and answer with a <strong>tab</strong> (paste from a spreadsheet),{' '}
            <code> :: </code> or <code> | </code>.
          </p>
          <textarea
            className="bulk"
            rows={10}
            autoFocus
            value={bulk}
            onChange={(e) => setBulk(e.target.value)}
            placeholder={'Capital of France :: Paris\nH2O | Water'}
          />
          <div className="form-actions">
            <span className="muted small">{parsed.length} cards detected</span>
            <button
              className="btn primary"
              disabled={!parsed.length}
              onClick={() => {
                dispatch({ type: 'addCards', ...ids, pairs: parsed });
                setBulk('');
                setBulkOpen(false);
              }}
            >
              Import {parsed.length || ''} cards
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
