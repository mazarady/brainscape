import { useState } from 'react';
import { signIn, type User } from '../api';

export default function AuthScreen({ onAuthed }: { onAuthed: (u: User) => void }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    const r = await signIn(email);
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
        <h1>Welcome</h1>
        <p className="muted small">Enter your email to continue. New here? An account is created for you automatically.</p>
        <label>
          Email
          <input type="email" autoComplete="email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        {error && <div className="auth-error" role="alert">{error}</div>}
        <button className="btn primary" type="submit" disabled={busy}>
          {busy ? 'Please wait…' : 'Continue'}
        </button>
      </form>
    </div>
  );
}
