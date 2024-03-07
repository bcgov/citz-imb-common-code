// Environment variables set in compose file.
const {
  NODE_ENV,
  ENVIRONMENT,
  DEBUG,
  VERBOSE_DEBUG,
  FRONTEND_URL,
  BACKEND_URL,
  BACKEND_PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

// Exported configuration values.
export default {
  PORT: BACKEND_PORT ? Number(BACKEND_PORT) : 3600,
  NODE_VERSION: process.version,
  NODE_ENV,
  DEBUG: DEBUG === 'true',
  VERBOSE_DEBUG: VERBOSE_DEBUG === 'true',
  ENVIRONMENT,
  FRONTEND_URL,
  BACKEND_URL,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
};
