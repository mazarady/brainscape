import { useEffect, useRef, useState } from 'react';
import App from './App';
import AuthScreen from './components/AuthScreen';
import { getMe, loadData, logout, saveData, type User } from './api';
import { emptyState } from './seed';
import { isValidState } from './store';
import type { AppState } from './types';

type Phase =
  | { name: 'loading' }
  | { name: 'error'; message: string }
  | { name: 'signed-out' }
  | { name: 'ready'; user: User; data: AppState; rev: number };

// Earlier versions kept data in this browser only. Carry it over on first sign-in,
// leaving out the sample classes that used to be pre-loaded.
const LEGACY_KEY = 'recall-flashcards-v1';
const LEGACY_DEMO_CLASSES = new Set(['Scuba Diving Fundamentals', 'Spanish Starter Vocab']);

function readLegacyData(): AppState | null {
  try {
    const parsed = JSON.parse(localStorage.getItem(LEGACY_KEY) ?? 'null');
    if (!isValidState(parsed)) return null;
    const classes = parsed.classes.filter((c) => !LEGACY_DEMO_CLASSES.has(c.name));
    return classes.length ? { ...parsed, classes } : null;
  } catch {
    return null;
  }
}

async function loadForUser(user: User): Promise<Phase> {
  const { data, rev } = await loadData();
  if (data) return { name: 'ready', user, data, rev };
  const legacy = readLegacyData();
  if (legacy) {
    const r = await saveData(legacy, 0);
    if (r.ok) {
      try {
        localStorage.removeItem(LEGACY_KEY);
      } catch {
        /* ignore */
      }
      return { name: 'ready', user, data: legacy, rev: r.rev };
    }
  }
  return { name: 'ready', user, data: emptyState(), rev: 0 };
}

export default function Root() {
  const [phase, setPhase] = useState<Phase>({ name: 'loading' });

  const enter = (user: User) => {
    setPhase({ name: 'loading' });
    loadForUser(user).then(setPhase, (e) => setPhase({ name: 'error', message: String(e.message ?? e) }));
  };

  const started = useRef(false);
  useEffect(() => {
    if (started.current) return; // React StrictMode runs effects twice in development
    started.current = true;
    getMe().then(
      (user) => (user ? enter(user) : setPhase({ name: 'signed-out' })),
      (e) => setPhase({ name: 'error', message: String(e.message ?? e) }),
    );
  }, []);

  if (phase.name === 'loading') return <div className="splash">Loading…</div>;
  if (phase.name === 'error') {
    return (
      <div className="splash">
        <p>{phase.message}</p>
        <button className="btn primary" onClick={() => location.reload()}>Try again</button>
      </div>
    );
  }
  if (phase.name === 'signed-out') return <AuthScreen onAuthed={enter} />;
  return (
    <App
      key={phase.user.email}
      user={phase.user}
      initialState={phase.data}
      initialRev={phase.rev}
      onLogout={async () => {
        await logout();
        setPhase({ name: 'signed-out' });
      }}
      onDeleted={() => setPhase({ name: 'signed-out' })}
    />
  );
}
