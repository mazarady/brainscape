import { useState } from 'react';
import { useAppStore } from './store';
import Sidebar from './components/Sidebar';
import ClassView from './components/ClassView';
import StudyView from './components/StudyView';
import DeckEditor from './components/DeckEditor';
import ClassForm from './components/ClassForm';
import Modal from './components/Modal';
import { uid } from './seed';

export type View =
  | { name: 'home' }
  | { name: 'class'; classId: string }
  | { name: 'study'; classId: string; deckIds?: string[] }
  | { name: 'edit'; classId: string; deckId: string };

export default function App() {
  const [state, dispatch] = useAppStore();
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

  if (view.name === 'study' && activeClass) {
    return <StudyView cls={activeClass} deckIds={view.deckIds} dispatch={dispatch} onExit={() => go({ name: 'class', classId: activeClass.id })} />;
  }

  let main;
  if (view.name === 'class' && activeClass) {
    main = <ClassView cls={activeClass} dispatch={dispatch} go={go} />;
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
        onSelect={(id) => go({ name: 'class', classId: id })}
        onCreate={() => setCreatingClass(true)}
      />
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((o) => !o)}>☰</button>
      <div className="scrim" onClick={() => setMenuOpen(false)} />
      <main className="main">{main}</main>
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
