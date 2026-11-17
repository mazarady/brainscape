import { createHash, randomBytes } from 'node:crypto';

export const newSessionToken = () => randomBytes(32).toString('base64url');
export const sha256 = (s) => createHash('sha256').update(s).digest('hex');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(v) {
  return typeof v === 'string' ? v.trim().toLowerCase() : '';
}

export function validateEmail(body) {
  const email = normalizeEmail(body?.email);
  if (!EMAIL_RE.test(email) || email.length > 254) return { error: 'Enter a valid email address.' };
  return { email };
}
