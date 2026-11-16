import { beforeEach, describe, expect, it } from 'vitest';
import { PGlite } from '@electric-sql/pglite';
import { createHandler } from './handler.js';
import { hashPassword, verifyPassword } from './auth.js';

const ORIGIN = 'https://recall.example';
// Low scrypt cost keeps tests fast; production uses the default (N=2^17).
const passwordCost = { N: 1024, r: 8, p: 1 };

let handle;
beforeEach(async () => {
  handle = createHandler({ db: new PGlite(), passwordCost });
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

describe('password hashing', () => {
  it('verifies the right password and rejects the wrong one', async () => {
    const h = await hashPassword('correct horse', passwordCost);
    expect(h).not.toContain('correct horse');
    expect(await verifyPassword('correct horse', h)).toBe(true);
    expect(await verifyPassword('wrong horse', h)).toBe(false);
  });
});

describe('auth API', () => {
  beforeEach(() => {
    cookie = '';
  });

  it('signs up, sets a secure HttpOnly cookie, and remembers the user', async () => {
    const r = await call('POST', '/api/auth/signup', { email: ' Ann@Example.com ', password: 'hunter22!' });
    expect(r.status).toBe(201);
    expect(r.setCookie).toMatch(/^__Host-session=/);
    expect(r.setCookie).toMatch(/HttpOnly/);
    expect(r.setCookie).toMatch(/Secure/);
    expect(r.setCookie).toMatch(/SameSite=Lax/);
    expect((await call('GET', '/api/auth/me')).body.user.email).toBe('ann@example.com');
  });

  it('rejects weak passwords, bad emails and duplicate accounts', async () => {
    expect((await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'short' })).status).toBe(400);
    expect((await call('POST', '/api/auth/signup', { email: 'nope', password: 'longenough' })).status).toBe(400);
    expect((await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' })).status).toBe(201);
    expect((await call('POST', '/api/auth/signup', { email: 'A@B.co', password: 'longenough' })).status).toBe(409);
  });

  it('logs in with the right password only, with a generic error', async () => {
    await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' });
    await call('POST', '/api/auth/logout', {});
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    const bad = await call('POST', '/api/auth/login', { email: 'a@b.co', password: 'wrongwrong' });
    const missing = await call('POST', '/api/auth/login', { email: 'x@b.co', password: 'wrongwrong' });
    expect(bad.status).toBe(401);
    expect(missing.body.error).toBe(bad.body.error);
    expect((await call('POST', '/api/auth/login', { email: 'A@b.co', password: 'longenough' })).status).toBe(200);
    expect((await call('GET', '/api/auth/me')).body.user.email).toBe('a@b.co');
  });

  it('invalidates the session on logout, even if the old cookie is replayed', async () => {
    await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' });
    const old = cookie;
    await call('POST', '/api/auth/logout', {});
    cookie = old;
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    expect((await call('GET', '/api/data')).status).toBe(401);
  });

  it('rate-limits repeated failed logins for an email', async () => {
    await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' });
    cookie = '';
    const statuses = [];
    for (let i = 0; i < 10; i++) {
      statuses.push((await call('POST', '/api/auth/login', { email: 'a@b.co', password: 'bad-guess' }, { ip: `9.9.9.${i}` })).status);
    }
    expect(statuses.slice(0, 8).every((s) => s === 401)).toBe(true);
    expect(statuses.at(-1)).toBe(429);
  });

  it('deletes the account and all its data only with the right password', async () => {
    await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' });
    await call('PUT', '/api/data', { data: state, rev: 0 });
    const session = cookie;
    expect((await call('POST', '/api/auth/delete-account', { password: 'wrongwrong' })).status).toBe(401);
    expect((await call('POST', '/api/auth/delete-account', { password: 'longenough' })).status).toBe(200);
    cookie = session;
    expect((await call('GET', '/api/auth/me')).body.user).toBeNull();
    cookie = '';
    expect((await call('POST', '/api/auth/login', { email: 'a@b.co', password: 'longenough' })).status).toBe(401);
    // The email can be registered again, starting from scratch.
    expect((await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' })).status).toBe(201);
    expect((await call('GET', '/api/data')).body.data).toBeNull();
  });

  it('blocks cross-origin and non-JSON state-changing requests', async () => {
    const cross = await call('POST', '/api/auth/login', { email: 'a@b.co', password: 'x' }, { headers: { origin: 'https://evil.example' } });
    expect(cross.status).toBe(403);
    const form = await call('POST', '/api/auth/logout', {}, { headers: { 'content-type': 'application/x-www-form-urlencoded' } });
    expect(form.status).toBe(415);
  });
});

describe('data API', () => {
  beforeEach(async () => {
    cookie = '';
    await call('POST', '/api/auth/signup', { email: 'a@b.co', password: 'longenough' });
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
    await call('POST', '/api/auth/signup', { email: 'b@b.co', password: 'longenough' });
    expect((await call('GET', '/api/data')).body.data).toBeNull();
  });

  it('rejects malformed data', async () => {
    expect((await call('PUT', '/api/data', { data: { nope: true }, rev: 0 })).status).toBe(400);
  });
});
