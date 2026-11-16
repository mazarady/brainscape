import type { AppState } from './types';

export interface User {
  email: string;
}

async function request<T>(method: string, path: string, body?: unknown): Promise<{ status: number; data: T }> {
  const res = await fetch(path, {
    method,
    credentials: 'same-origin',
    headers: body !== undefined ? { 'content-type': 'application/json' } : undefined,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  let data: T;
  try {
    data = await res.json();
  } catch {
    data = { error: 'Unexpected server response.' } as T;
  }
  return { status: res.status, data };
}

export async function getMe(): Promise<User | null> {
  const r = await request<{ user: User | null }>('GET', '/api/auth/me');
  if (r.status !== 200) throw new Error('Could not reach the server.');
  return r.data.user;
}

export async function authenticate(mode: 'login' | 'signup', email: string, password: string): Promise<{ user?: User; error?: string }> {
  try {
    const r = await request<{ user?: User; error?: string }>('POST', `/api/auth/${mode}`, { email, password });
    return r.data.user ? { user: r.data.user } : { error: r.data.error ?? 'Something went wrong.' };
  } catch {
    return { error: 'Could not reach the server. Check your connection.' };
  }
}

export async function logout(): Promise<void> {
  await request('POST', '/api/auth/logout', {}).catch(() => {});
}

export async function loadData(): Promise<{ data: AppState | null; rev: number }> {
  const r = await request<{ data: AppState | null; rev: number; error?: string }>('GET', '/api/data');
  if (r.status !== 200) throw new Error(r.data.error ?? 'Could not load your data.');
  return r.data;
}

export type SaveResult = { ok: true; rev: number } | { ok: false; reason: 'conflict' | 'signed-out' | 'offline' | 'too-large' };

export async function saveData(data: AppState, rev: number): Promise<SaveResult> {
  try {
    const r = await request<{ rev: number }>('PUT', '/api/data', { data, rev });
    if (r.status === 200) return { ok: true, rev: r.data.rev };
    if (r.status === 409) return { ok: false, reason: 'conflict' };
    if (r.status === 401) return { ok: false, reason: 'signed-out' };
    if (r.status === 413) return { ok: false, reason: 'too-large' };
    return { ok: false, reason: 'offline' };
  } catch {
    return { ok: false, reason: 'offline' };
  }
}

export async function deleteAccount(password: string): Promise<{ error?: string }> {
  try {
    const r = await request<{ ok?: boolean; error?: string }>('POST', '/api/auth/delete-account', { password });
    return r.data.ok ? {} : { error: r.data.error ?? 'Could not delete your account.' };
  } catch {
    return { error: 'Could not reach the server. Check your connection.' };
  }
}
