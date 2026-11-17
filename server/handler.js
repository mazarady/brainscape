import { newSessionToken, normalizeEmail, sha256, validateEmail } from './auth.js';
import { SCHEMA } from './schema.js';

const SESSION_TTL_S = 30 * 24 * 60 * 60; // 30 days
const SESSION_REFRESH_S = 24 * 60 * 60; // extend sliding expiry at most once a day
const MAX_BODY_BYTES = 5 * 1024 * 1024;
const LIMITS = {
  ip: { max: 30, windowS: 15 * 60 },
};

/**
 * @typedef {{ query: (text: string, params?: unknown[]) => Promise<{ rows: any[] }>, connect?: () => Promise<any> }} Db  (a pg-compatible Pool)
 * @param {{ db: Db }} opts
 * @returns {(req: Request, ctx?: { ip?: string }) => Promise<Response>}
 */
export function createHandler({ db }) {
  let ready;
  const ensureSchema = () =>
    (ready ??= (async () => {
      // An advisory lock stops concurrent cold starts racing each other on CREATE TABLE.
      // BEGIN..COMMIT must run on one connection, so check one out of the pool.
      const conn = db.connect ? await db.connect() : db;
      try {
        await conn.query('BEGIN');
        await conn.query('SELECT pg_advisory_xact_lock(727274)');
        for (const stmt of SCHEMA) await conn.query(stmt);
        await conn.query('COMMIT');
      } catch (e) {
        await conn.query('ROLLBACK').catch(() => {});
        ready = undefined;
        throw e;
      } finally {
        conn.release?.();
      }
    })());


  // ---------- helpers ----------
  const json = (status, body, headers = {}) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...headers },
    });

  const cookieName = (secure) => (secure ? '__Host-session' : 'session');

  const sessionCookie = (secure, token, maxAge) =>
    [
      `${cookieName(secure)}=${token}`,
      'Path=/',
      'HttpOnly',
      'SameSite=Lax',
      `Max-Age=${maxAge}`,
      secure ? 'Secure' : '',
    ]
      .filter(Boolean)
      .join('; ');

  const readCookie = (req, name) => {
    for (const part of (req.headers.get('cookie') ?? '').split(';')) {
      const i = part.indexOf('=');
      if (i > 0 && part.slice(0, i).trim() === name) return part.slice(i + 1).trim();
    }
    return undefined;
  };

  /** Returns seconds to wait if over the limit, else 0. */
  async function rateLimit(key, { max, windowS }) {
    const { rows } = await db.query(
      `INSERT INTO rate_limits (key, count, window_start) VALUES ($1, 1, now())
       ON CONFLICT (key) DO UPDATE SET
         count        = CASE WHEN rate_limits.window_start < now() - make_interval(secs => $2) THEN 1 ELSE rate_limits.count + 1 END,
         window_start = CASE WHEN rate_limits.window_start < now() - make_interval(secs => $2) THEN now() ELSE rate_limits.window_start END
       RETURNING count, EXTRACT(EPOCH FROM (window_start + make_interval(secs => $2) - now()))::int AS wait`,
      [key, windowS],
    );
    return rows[0].count > max ? Math.max(1, rows[0].wait) : 0;
  }

  async function startSession(userId, secure) {
    const token = newSessionToken();
    await db.query(
      `INSERT INTO sessions (token_hash, user_id, expires_at) VALUES ($1, $2, now() + make_interval(secs => $3))`,
      [sha256(token), userId, SESSION_TTL_S],
    );
    return sessionCookie(secure, token, SESSION_TTL_S);
  }

  async function getSession(req, secure) {
    const token = readCookie(req, cookieName(secure));
    if (!token || token.length > 100) return null;
    const hash = sha256(token);
    const { rows } = await db.query(
      `SELECT s.user_id, u.email, EXTRACT(EPOCH FROM (s.expires_at - now()))::int AS remaining
         FROM sessions s JOIN users u ON u.id = s.user_id
        WHERE s.token_hash = $1 AND s.expires_at > now()`,
      [hash],
    );
    if (!rows[0]) return null;
    let refreshCookie;
    if (rows[0].remaining < SESSION_TTL_S - SESSION_REFRESH_S) {
      await db.query(`UPDATE sessions SET expires_at = now() + make_interval(secs => $2) WHERE token_hash = $1`, [hash, SESSION_TTL_S]);
      refreshCookie = sessionCookie(secure, token, SESSION_TTL_S);
    }
    return { userId: Number(rows[0].user_id), email: rows[0].email, hash, refreshCookie };
  }

  async function readJson(req) {
    const text = await req.text();
    if (text.length > MAX_BODY_BYTES) return { tooLarge: true };
    try {
      return { body: JSON.parse(text) };
    } catch {
      return { malformed: true };
    }
  }

  const isValidState = (s) =>
    !!s && typeof s === 'object' && s.version === 1 && Array.isArray(s.classes) && s.classes.every((c) => c && Array.isArray(c.decks));

  // ---------- request handler ----------
  return async function handle(req, ctx = {}) {
    try {
      await ensureSchema();
      const url = new URL(req.url);
      const secure = url.protocol === 'https:';
      const path = url.pathname.replace(/\/+$/, '');
      const method = req.method;
      const ip = ctx.ip || req.headers.get('x-nf-client-connection-ip') || 'unknown';

      // CSRF: state-changing requests must be JSON (cross-site forms can't send that without a
      // CORS preflight, which we never approve) and, when the browser sends Origin, it must match.
      if (method !== 'GET' && method !== 'HEAD') {
        if (!(req.headers.get('content-type') ?? '').startsWith('application/json')) {
          return json(415, { error: 'Expected application/json.' });
        }
        const origin = req.headers.get('origin');
        if (origin && origin !== url.origin) return json(403, { error: 'Cross-origin request blocked.' });
      }

      // Occasional housekeeping.
      if (Math.random() < 0.01) {
        await db.query(`DELETE FROM sessions WHERE expires_at < now()`);
        await db.query(`DELETE FROM rate_limits WHERE window_start < now() - interval '1 day'`);
      }

      const session = await getSession(req, secure);
      const withRefresh = (res) => {
        if (session?.refreshCookie) res.headers.append('set-cookie', session.refreshCookie);
        return res;
      };

      // ---- auth ----
      if (path === '/api/auth/me' && method === 'GET') {
        return withRefresh(json(200, { user: session ? { email: session.email } : null }));
      }

      // Email-only sign-in: no password and no verification. Typing an email
      // creates the account the first time and signs straight back into it after.
      if (path === '/api/auth/email' && method === 'POST') {
        const wait = await rateLimit(`ip:${ip}`, LIMITS.ip);
        if (wait) return json(429, { error: 'Too many attempts. Try again later.' }, { 'retry-after': String(wait) });
        const { body, tooLarge, malformed } = await readJson(req);
        if (tooLarge || malformed) return json(400, { error: 'Invalid request.' });
        const v = validateEmail(body);
        if (v.error) return json(400, { error: v.error });
        const { rows } = await db.query(
          `INSERT INTO users (email, password_hash) VALUES ($1, '') ON CONFLICT (email) DO UPDATE SET email = EXCLUDED.email
           RETURNING id, (xmax = 0) AS created`,
          [v.email],
        );
        // Drop any session this browser already had and issue a fresh token.
        if (session) await db.query(`DELETE FROM sessions WHERE token_hash = $1`, [session.hash]);
        const cookie = await startSession(rows[0].id, secure);
        return json(rows[0].created ? 201 : 200, { user: { email: v.email } }, { 'set-cookie': cookie });
      }

      if (path === '/api/auth/logout' && method === 'POST') {
        if (session) await db.query(`DELETE FROM sessions WHERE token_hash = $1`, [session.hash]);
        return json(200, { ok: true }, { 'set-cookie': sessionCookie(secure, '', 0) });
      }

      if (path === '/api/auth/delete-account' && method === 'POST') {
        if (!session) return json(401, { error: 'Not signed in.' });
        const { body, tooLarge, malformed } = await readJson(req);
        if (tooLarge || malformed) return json(400, { error: 'Invalid request.' });
        // Ask for the email to be typed again so an accidental click can't delete everything.
        if (normalizeEmail(body?.email) !== session.email) return json(400, { error: 'That email doesn’t match this account.' });
        // Sessions and data are removed by ON DELETE CASCADE.
        await db.query(`DELETE FROM users WHERE id = $1`, [session.userId]);
        return json(200, { ok: true }, { 'set-cookie': sessionCookie(secure, '', 0) });
      }

      // ---- user data (requires sign-in) ----
      if (path === '/api/data') {
        if (!session) return json(401, { error: 'Not signed in.' });

        if (method === 'GET') {
          const { rows } = await db.query(`SELECT data, rev FROM user_data WHERE user_id = $1`, [session.userId]);
          return withRefresh(json(200, rows[0] ? { data: rows[0].data, rev: rows[0].rev } : { data: null, rev: 0 }));
        }

        if (method === 'PUT') {
          const { body, tooLarge, malformed } = await readJson(req);
          if (tooLarge) return json(413, { error: 'Your data is too large to save.' });
          if (malformed) return json(400, { error: 'Invalid request.' });
          const { data, rev } = body ?? {};
          if (!isValidState(data) || !Number.isInteger(rev) || rev < 0) return json(400, { error: 'Invalid data.' });
          const payload = JSON.stringify(data);
          // Optimistic concurrency: only write if the client saw the latest revision, so a stale
          // tab or device can't silently overwrite newer changes.
          const { rows } =
            rev === 0
              ? await db.query(
                  `INSERT INTO user_data (user_id, data, rev) VALUES ($1, $2::jsonb, 1) ON CONFLICT (user_id) DO NOTHING RETURNING rev`,
                  [session.userId, payload],
                )
              : await db.query(
                  `UPDATE user_data SET data = $2::jsonb, rev = rev + 1, updated_at = now()
                    WHERE user_id = $1 AND rev = $3 RETURNING rev`,
                  [session.userId, payload, rev],
                );
          if (!rows[0]) return json(409, { error: 'Your data was changed in another tab or device.' });
          return withRefresh(json(200, { rev: rows[0].rev }));
        }
      }

      return json(404, { error: 'Not found.' });
    } catch (err) {
      console.error(err);
      return json(500, { error: 'Something went wrong. Please try again.' });
    }
  };
}
