import { useState } from 'react';
import { useAppStore, type SaveStatus } from './store';
import type { User } from './api';
import type { AppState } from './types';
import Sidebar from './components/Sidebar';
import ClassView from './components/ClassView';
import StudyView from './components/StudyView';
import DeckEditor from './components/DeckEditor';
import ClassForm from './components/ClassForm';
import Modal from './components/Modal';
import QuizView from './components/QuizView';
import NotesView from './components/NotesView';
import { uid } from './seed';

export type View =
  | { name: 'home' }
  | { name: 'class'; classId: string }
  | { name: 'study'; classId: string; deckIds?: string[] }
  | { name: 'edit'; classId: string; deckId: string }
  | { name: 'notes'; classId: string; deckId: string }
  | { name: 'quiz'; classId: string; mode: 'practice' | 'exam'; deckIds: string[]; count: number; key: number };

const STATUS_MESSAGES: Partial<Record<SaveStatus, string>> = {
  conflict: 'Your flashcards were changed in another tab or device, so recent changes here weren’t saved. Reload to get the latest version.',
  'signed-out': 'You’ve been signed out, so recent changes weren’t saved. Reload to sign in again.',
  'too-large': 'Your data is too large to save. Try removing some cards.',
};

export default function App({
  user,
  initialState,
  initialRev,
  onLogout,
  onDeleted,
}: {
  user: User;
  initialState: AppState;
  initialRev: number;
  onLogout: () => void;
  onDeleted: () => void;
}) {
  const [state, dispatch, saveStatus] = useAppStore(initialState, initialRev);
  const banner = STATUS_MESSAGES[saveStatus] && (
    <div className="save-banner" role="alert">
      <span>{STATUS_MESSAGES[saveStatus]}</span>
      {saveStatus !== 'too-large' && <button className="btn sm" onClick={() => location.reload()}>Reload</button>}
    </div>
  );
  const [view, setView] = useState<View>(() =>
    state.classes[0] ? { name: 'class', classId: state.classes[0].id } : { name: 'home' },
  );
  const [creatingClass, setCreatingClass] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = 'classId' in view ? state.classes.find((c) => c.id === view.classId) : undefined;

  const go = (v: View) => {
    setView(v);
    setMenuOpen(false);
  };

  if (view.name === 'quiz' && activeClass) {
    return (
      <>
        {banner}
        <QuizView
          key={view.key}
          cls={activeClass}
          deckIds={view.deckIds}
          mode={view.mode}
          count={view.count}
          dispatch={dispatch}
          onExit={() => go({ name: 'class', classId: activeClass.id })}
        />
      </>
    );
  }

  if (view.name === 'study' && activeClass) {
    return (
      <>
        {banner}
        <StudyView cls={activeClass} deckIds={view.deckIds} dispatch={dispatch} onExit={() => go({ name: 'class', classId: activeClass.id })} />
      </>
    );
  }

  let main;
  if (view.name === 'class' && activeClass) {
    main = <ClassView cls={activeClass} dispatch={dispatch} go={go} />;
  } else if (view.name === 'notes' && activeClass) {
    const deck = activeClass.decks.find((d) => d.id === view.deckId);
    main = deck ? (
      <NotesView
        cls={activeClass}
        deck={deck}
        onBack={() => go({ name: 'class', classId: activeClass.id })}
        onFlashcards={() => go({ name: 'study', classId: activeClass.id, deckIds: [deck.id] })}
        onPractice={() => go({ name: 'quiz', classId: activeClass.id, mode: 'practice', deckIds: [deck.id], count: 10, key: Date.now() })}
      />
    ) : null;
  } else if (view.name === 'edit' && activeClass) {
    const deck = activeClass.decks.find((d) => d.id === view.deckId);
    main = deck ? (
      <DeckEditor cls={activeClass} deck={deck} dispatch={dispatch} onBack={() => go({ name: 'class', classId: activeClass.id })} />
    ) : null;
  }
  if (!main) {
    main = (
      <div className="empty-home">
        <div className="empty-icon">🧠</div>
        <h1>Welcome to Recall</h1>
        <p>Flashcards that adapt to how confident you are. Create a class to get started.</p>
        <button className="btn primary" onClick={() => setCreatingClass(true)}>+ Create a class</button>
      </div>
    );
  }

  return (
    <div className={`layout ${menuOpen ? 'menu-open' : ''}`}>
      <Sidebar
        state={state}
        activeClassId={activeClass?.id}
        dispatch={dispatch}
        user={user}
        saveStatus={saveStatus}
        onLogout={onLogout}
        onDeleted={onDeleted}
        onSelect={(id) => go({ name: 'class', classId: id })}
        onCreate={() => setCreatingClass(true)}
      />
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>☰</button>
      <div className="scrim" onClick={() => setMenuOpen(false)} />
      <main className="main">
        {banner}
        {main}
      </main>
      {creatingClass && (
        <Modal title="Create a new class" onClose={() => setCreatingClass(false)}>
          <ClassForm
            submitLabel="Create class"
            onSubmit={(v) => {
              const id = uid();
              dispatch({ type: 'addClass', id, ...v });
              setCreatingClass(false);
              go({ name: 'class', classId: id });
            }}
          />
        </Modal>
      )}
    </div>
  );
}
