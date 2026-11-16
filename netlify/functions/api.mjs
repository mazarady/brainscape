import { getDatabase } from '@netlify/database';
import { createHandler } from '../../server/handler.js';

// Created once per function instance and reused across invocations.
let handler;

export default async (req, context) => {
  handler ??= createHandler({ db: getDatabase().pool });
  return handler(req, { ip: context.ip });
};

export const config = {
  path: '/api/*',
};
