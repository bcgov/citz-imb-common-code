import { sso } from '@bcgov/citz-imb-sso-express';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { CORS_OPTIONS, RATE_LIMIT_OPTIONS, SSO_OPTIONS } from './config';
import { configRouter, githubRouter, healthRouter } from './modules';
import { routes } from './routes';
import { zodValidationMiddleware } from './utils';

// Define Express App
const app = express();

// Allow frontend use of a proxy (Nginx).
app.set('trust proxy', 1);

// Initialize SSO integration.
sso(app, SSO_OPTIONS);

/**
 * Middleware for parsing request bodies.
 * @module body-parser
 * @property {Function} urlencodedParser - Middleware for parsing URL-encoded data from the request body.
 * @property {Function} jsonParser - Middleware for parsing JSON data from the request body.
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors(CORS_OPTIONS));
app.use(rateLimit(RATE_LIMIT_OPTIONS));

// Disabled because it exposes information about the used framework to potential attackers.
app.disable('x-powered-by');

// Add zod validation functions.
app.use(zodValidationMiddleware);

// Routing
app.use('/health', healthRouter);
app.use('/config', configRouter);
app.use('/github', githubRouter);

console.log('routes', routes);
routes.stack.forEach((r) => {
  console.log(`---------- ${r.route?.stack[0].method} ${r.route?.path} ----------`);
  console.log(r.route);
});

app.use('/routes', routes);

export default app;
