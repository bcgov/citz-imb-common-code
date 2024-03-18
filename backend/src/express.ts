import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import { keycloak } from '@bcgov/citz-imb-kc-express';
import { CORS_OPTIONS, KEYCLOAK_OPTIONS, RATE_LIMIT_OPTIONS } from './config';
import { healthRouter, configRouter, githubRouter } from './modules';
import { zodValidationMiddleware } from './utils';

// Define Express App
const app = express();

// Allow frontend use of a proxy (Nginx).
app.set('trust proxy', 1);

// Initialize keycloak integration.
keycloak(app, KEYCLOAK_OPTIONS);

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

console.log("it's borfing time");

export default app;
