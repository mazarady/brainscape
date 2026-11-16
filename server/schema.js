/**
 * Idempotent schema. It runs once per function cold start, so every Netlify
 * database branch (production, deploy previews, branch deploys) sets itself up
 * with no manual migration step.
 */
export const SCHEMA = [
  `CREATE TABLE IF NOT EXISTS users (
    id            BIGSERIAL PRIMARY KEY,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,
  // Only a SHA-256 hash of each session token is stored, so a leaked database
  // can't be used to take over sessions.
  `CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id    BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,
  `CREATE INDEX IF NOT EXISTS sessions_user_idx ON sessions(user_id)`,
  `CREATE INDEX IF NOT EXISTS sessions_expires_idx ON sessions(expires_at)`,
  `CREATE TABLE IF NOT EXISTS user_data (
    user_id    BIGINT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    data       JSONB NOT NULL,
    rev        INTEGER NOT NULL,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
  )`,
  // Rate limiting lives in the database because serverless instances don't share memory.
  `CREATE TABLE IF NOT EXISTS rate_limits (
    key          TEXT PRIMARY KEY,
    count        INTEGER NOT NULL,
    window_start TIMESTAMPTZ NOT NULL
  )`,
];
