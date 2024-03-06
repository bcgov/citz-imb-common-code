import express from 'express';
const router = express.Router();

import { getConfig } from './controller';

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
router.route('/').get(getConfig);

export default router;
