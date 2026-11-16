import { createHash, randomBytes, scrypt, timingSafeEqual } from 'node:crypto';

// scrypt at OWASP's recommended minimum cost (N=2^17, r=8, p=1 — ~128 MiB per hash).
const DEFAULT_COST = { N: 2 ** 17, r: 8, p: 1 };
const KEY_LEN = 64;
const maxmem = (c) => 128 * c.N * c.r * 2;

function scryptAsync(password, salt, cost) {
  return new Promise((resolve, reject) =>
    scrypt(password, salt, KEY_LEN, { ...cost, maxmem: maxmem(cost) }, (err, key) => (err ? reject(err) : resolve(key))),
  );
}

/** Returns "scrypt$N$r$p$salt$hash" so the cost can be raised later without breaking old hashes. */
export async function hashPassword(password, cost = DEFAULT_COST) {
  const salt = randomBytes(16);
  const key = await scryptAsync(password.normalize('NFKC'), salt, cost);
  return ['scrypt', cost.N, cost.r, cost.p, salt.toString('base64'), key.toString('base64')].join('$');
}

export async function verifyPassword(password, stored) {
  const [alg, N, r, p, salt, hash] = String(stored).split('$');
  if (alg !== 'scrypt' || !salt || !hash) return false;
  const expected = Buffer.from(hash, 'base64');
  const key = await scryptAsync(password.normalize('NFKC'), Buffer.from(salt, 'base64'), {
    N: Number(N),
    r: Number(r),
    p: Number(p),
  });
  return key.length === expected.length && timingSafeEqual(key, expected);
}

export const newSessionToken = () => randomBytes(32).toString('base64url');
export const sha256 = (s) => createHash('sha256').update(s).digest('hex');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(v) {
  return typeof v === 'string' ? v.trim().toLowerCase() : '';
}

export function validateSignup(body) {
  const email = normalizeEmail(body?.email);
  const password = typeof body?.password === 'string' ? body.password : '';
  if (!EMAIL_RE.test(email) || email.length > 254) return { error: 'Enter a valid email address.' };
  if (password.length < 8) return { error: 'Password must be at least 8 characters.' };
  if (password.length > 256) return { error: 'Password must be at most 256 characters.' };
  return { email, password };
}
