import express from 'express';
const router = express.Router();

import { getIssues } from './controller';

/**
 * Use github api to lookup open issues for a repo.
 * @method GET
 * @route /github/issues/:repo
 * @param {'open' | 'closed' | 'all'} state - Query param.
 */
router.route('/issues/:repo').get(getIssues);

export default router;
