import type { Deck, StudyClass } from '../types';

export default function NotesView({
  cls,
  deck,
  onBack,
  onPractice,
  onFlashcards,
}: {
  cls: StudyClass;
  deck: Deck;
  onBack: () => void;
  onPractice: () => void;
  onFlashcards: () => void;
}) {
  return (
    <div className="notes-view">
      <button className="link-btn back" onClick={onBack}>‹ {cls.name}</button>
      <div className="notes-head">
        {deck.section && <div className="notes-section">{deck.section}</div>}
        <h1>{deck.name}</h1>
        <p className="muted">Key points — read these first, then practise.</p>
      </div>
      {(deck.notes ?? []).map((n) => (
        <section key={n.heading} className="notes-block">
          <h2>{n.heading}</h2>
          <ul>
            {n.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>
      ))}
      <div className="notes-actions">
        <button className="btn" onClick={onFlashcards}>Flashcards</button>
        <button className="btn primary" onClick={onPractice}>Practice quiz on this section</button>
      </div>
    </div>
  );
}
