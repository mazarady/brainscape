import { useState } from 'react';
import { authenticate, type User } from '../api';

export default function AuthScreen({ onAuthed }: { onAuthed: (u: User) => void }) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const signup = mode === 'signup';

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (signup && password !== confirm) return setError('Passwords don’t match.');
    setBusy(true);
    const r = await authenticate(mode, email, password);
    setBusy(false);
    if (r.user) onAuthed(r.user);
    else setError(r.error ?? 'Something went wrong.');
  };

  return (
    <div className="auth">
      <form className="auth-card form" onSubmit={submit}>
        <div className="auth-brand">
          <span>🧠</span> Recall
        </div>
        <h1>{signup ? 'Create your account' : 'Welcome back'}</h1>
        <p className="muted small">{signup ? 'Your flashcards are saved to your account.' : 'Sign in to keep studying.'}</p>
        <label>
          Email
          <input type="email" autoComplete="email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password
          <input
            type="password"
            autoComplete={signup ? 'new-password' : 'current-password'}
            required
            minLength={signup ? 8 : undefined}
            maxLength={256}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {signup && <span className="muted small hint-inline">At least 8 characters.</span>}
        </label>
        {signup && (
          <label>
            Confirm password
            <input type="password" autoComplete="new-password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} />
          </label>
        )}
        {error && <div className="auth-error" role="alert">{error}</div>}
        <button className="btn primary" type="submit" disabled={busy}>
          {busy ? 'Please wait…' : signup ? 'Create account' : 'Sign in'}
        </button>
        <div className="auth-switch muted small">
          {signup ? 'Already have an account?' : 'New here?'}{' '}
          <button
            type="button"
            className="link-btn"
            onClick={() => {
              setMode(signup ? 'login' : 'signup');
              setError('');
            }}
          >
            {signup ? 'Sign in' : 'Create an account'}
          </button>
        </div>
      </form>
    </div>
  );
}
