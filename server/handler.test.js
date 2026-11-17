import { beforeEach, describe, expect, it } from 'vitest';
import { PGlite } from '@electric-sql/pglite';
import { createHandler } from './handler.js';

const ORIGIN = 'https://recall.example';

let handle;
beforeEach(async () => {
  handle = createHandler({ db: new PGlite() });
});

let cookie = '';
async function call(method, path, body, { headers = {}, ip = '1.1.1.1', keepCookie = true } = {}) {
  const res = await handle(
    new Request(ORIGIN + path, {
      method,
      headers: {
        ...(body !== undefined ? { 'content-type': 'application/json', origin: ORIGIN } : {}),
        ...(cookie ? { cookie } : {}),
        ...headers,
      },
      body: body !== undefined ? JSON.stringify(body) : undefined,
    }),
    { ip },
  );
  const setCookie = res.headers.get('set-cookie');
  if (keepCookie && setCookie) cookie = setCookie.split(';')[0];
  return { status: res.status, body: await res.json(), setCookie };
}

const state = { version: 1, classes: [{ id: 'c', name: 'Bio', decks: [] }] };

describe('auth API', () => {
  beforeEach(() => {
    cookie = '';
  });

  it('signs in with just an email, creating the account, and sets a secure HttpOnly cookie', async () => {
    const r = await call('POST', '/api/auth/email', { email: ' Ann@Example.com ' });
    expect(r.status).toBe(201);
    expect(r.setCookie).toMatch(/^__Host-session=/);
    expect(r.setCookie).toMatch(/HttpOnly/);
    expect(r.setCookie).toMatch(/Secure/);
    expect(r.setCookie).toMatch(/SameSite=Lax/);
    expect((await call('GET', '/api/auth/me')).body.user.email).toBe('ann@example.com');
  });

  it('signs back into the same account with the same email', async () => {
    await call('POST', '/api/auth/email', { email: 'a@b.co' });
    await call('PUT', '/api/data', { data: state, rev: 0 });
    await call('POST', '/api/auth/logout', {});
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    const again = await call('POST', '/api/auth/email', { email: 'A@B.co' });
    expect(again.status).toBe(200);
    expect((await call('GET', '/api/data')).body.data).toEqual(state);
  });

  it('rejects invalid emails', async () => {
    expect((await call('POST', '/api/auth/email', { email: 'nope' })).status).toBe(400);
    expect((await call('POST', '/api/auth/email', {})).status).toBe(400);
  });

  it('invalidates the session on logout, even if the old cookie is replayed', async () => {
    await call('POST', '/api/auth/email', { email: 'a@b.co' });
    const old = cookie;
    await call('POST', '/api/auth/logout', {});
    cookie = old;
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    expect((await call('GET', '/api/data')).status).toBe(401);
  });

  it('rate-limits repeated sign-ins from one IP', async () => {
    const statuses = [];
    for (let i = 0; i < 32; i++) statuses.push((await call('POST', '/api/auth/email', { email: `u${i}@b.co` }, { keepCookie: false })).status);
    expect(statuses.slice(0, 30).every((s) => s === 201)).toBe(true);
    expect(statuses.at(-1)).toBe(429);
  });

  it('deletes the account and its data only when the email is typed correctly', async () => {
    await call('POST', '/api/auth/email', { email: 'a@b.co' });
    await call('PUT', '/api/data', { data: state, rev: 0 });
    const session = cookie;
    expect((await call('POST', '/api/auth/delete-account', { email: 'other@b.co' })).status).toBe(400);
    expect((await call('POST', '/api/auth/delete-account', { email: 'A@b.co' })).status).toBe(200);
    cookie = session;
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    cookie = '';
    expect((await call('POST', '/api/auth/email', { email: 'a@b.co' })).status).toBe(201);
    expect((await call('GET', '/api/data')).body.data).toBeNull();
  });

  it('blocks cross-origin and non-JSON state-changing requests', async () => {
    const cross = await call('POST', '/api/auth/email', { email: 'a@b.co' }, { headers: { origin: 'https://evil.example' } });
    expect(cross.status).toBe(403);
    const form = await call('POST', '/api/auth/logout', {}, { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
    expect(form.status).toBe(415);
  });
});

describe('data API', () => {
  beforeEach(async () => {
    cookie = '';
    await call('POST', '/api/auth/email', { email: 'a@b.co' });
  });

  it('requires sign-in', async () => {
    cookie = '';
    expect((await call('GET', '/api/data')).status).toBe(401);
  });

  it('starts empty, saves, and rejects stale revisions', async () => {
    expect((await call('GET', '/api/data')).body).toEqual({ data: null, rev: 0 });
    expect((await call('PUT', '/api/data', { data: state, rev: 0 })).body.rev).toBe(1);
    expect((await call('PUT', '/api/data', { data: state, rev: 1 })).body.rev).toBe(2);
    expect((await call('PUT', '/api/data', { data: state, rev: 1 })).status).toBe(409);
    expect((await call('GET', '/api/data')).body).toEqual({ data: state, rev: 2 });
  });

  it("keeps each user's data separate", async () => {
    await call('PUT', '/api/data', { data: state, rev: 0 });
    cookie = '';
    await call('POST', '/api/auth/email', { email: 'b@b.co' });
    expect((await call('GET', '/api/data')).body.data).toBeNull();
  });

  it('rejects malformed data', async () => {
    expect((await call('PUT', '/api/data', { data: { nope: true }, rev: 0 })).status).toBe(400);
  });
});
