import express from 'express';
const router = express.Router();

import { isHealthy } from './controller';

/**
 * Check if application is healthy.
 * @method GET
 * @route /health
 */
router.route('/').get(isHealthy);

export default router;
