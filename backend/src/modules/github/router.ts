import express from 'express';
const router = express.Router();

import { getIssues, getPullRequests } from './controller';

/**
 * Use github api to lookup issues for a repo.
 * @method GET
 * @route /github/issues/:repo
 * @param {'open' | 'closed' | 'all'} state - Query param.
 */
router.route('/issues/:repo').get(getIssues);

/**
 * Use github api to lookup pull requests for a repo.
 * @method GET
 * @route /github/pulls/:repo
 * @param {'open' | 'closed' | 'all'} state - Query param.
 */
router.route('/pulls/:repo').get(getPullRequests);

export default router;
