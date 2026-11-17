import { useRef, useState, type Dispatch } from 'react';
import Icon from './Icon';
import Modal from './Modal';
import type { AppState } from '../types';
import { allCards, mastery } from '../scheduler';
import { isValidState, type Action, type SaveStatus } from '../store';
import { deleteAccount, type User } from '../api';

export default function Sidebar({
  state,
  activeClassId,
  dispatch,
  onSelect,
  onCreate,
  user,
  saveStatus,
  onLogout,
  onDeleted,
}: {
  user: User;
  saveStatus: SaveStatus;
  onLogout: () => void;
  onDeleted: () => void;
  state: AppState;
  activeClassId?: string;
  dispatch: Dispatch<Action>;
  onSelect: (id: string) => void;
  onCreate: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [deleting, setDeleting] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `recall-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const importData = async (file: File) => {
    try {
      const parsed = JSON.parse(await file.text());
      if (!isValidState(parsed)) throw new Error('bad');
      if (confirm('Replace all your classes with the contents of this backup?')) dispatch({ type: 'replace', state: parsed });
    } catch {
      alert('That file is not a valid Recall backup.');
    }
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">🧠</span>
        <span>Recall</span>
      </div>
      <div className="sidebar-section-title">My Classes ({state.classes.length})</div>
      <ul className="class-list">
        {state.classes.map((c) => {
          const m = mastery(allCards(c.decks));
          return (
            <li key={c.id}>
              <button className={`class-item ${c.id === activeClassId ? 'active' : ''}`} onClick={() => onSelect(c.id)}>
                <span className="class-icon" style={{ background: c.color }}>{c.icon}</span>
                <span className="class-meta">
                  <span className="class-name">{c.name}</span>
                  <span className="bar"><span style={{ width: `${m}%` }} /></span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <button className="add-class" onClick={onCreate}>
        <span className="plus"><Icon name="plus" size={18} /></span> Add new class
      </button>
      <div className="account">
        <div className="account-email" title={user.email}>{user.email}</div>
        <div className={`save-status ${saveStatus}`}>
          {saveStatus === 'saved' ? 'All changes saved' : saveStatus === 'saving' ? 'Saving…' : saveStatus === 'offline' ? 'Offline — retrying…' : 'Not saved'}
        </div>
        <button
          className="link-btn"
          onClick={() => (saveStatus === 'saved' || confirm('Some changes haven’t been saved yet. Sign out anyway?')) && onLogout()}
        >
          Sign out
        </button>
        <button className="link-btn subtle" onClick={() => setDeleting(true)}>Delete account</button>
      </div>
      {deleting && (
        <Modal title="Delete your account?" onClose={() => setDeleting(false)}>
          <form
            className="form"
            onSubmit={async (e) => {
              e.preventDefault();
              setBusy(true);
              const r = await deleteAccount(password);
              setBusy(false);
              if (r.error) setError(r.error);
              else onDeleted();
            }}
          >
            <p className="muted small">
              This permanently deletes <strong>{user.email}</strong> and all of its classes, decks and cards. It can’t be undone.
              Consider exporting a backup first.
            </p>
            <label>
              Enter your password to confirm
              <input type="password" autoComplete="current-password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            {error && <div className="auth-error" role="alert">{error}</div>}
            <div className="form-actions">
              <button type="button" className="btn" onClick={() => setDeleting(false)}>Cancel</button>
              <button type="submit" className="btn danger" disabled={busy || !password}>{busy ? 'Deleting…' : 'Delete account'}</button>
            </div>
          </form>
        </Modal>
      )}
      <div className="sidebar-foot">
        <button className="link-btn" onClick={exportData}>Export backup</button>
        <button className="link-btn" onClick={() => fileRef.current?.click()}>Import backup</button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json"
          hidden
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) importData(f);
            e.target.value = '';
          }}
        />
      </div>
    </aside>
  );
}
