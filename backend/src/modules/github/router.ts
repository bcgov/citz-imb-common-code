import express from 'express';
const router = express.Router();

import { getOpenIssues } from './controller';

/**
 * Use github api to lookup open issues for a repo.
 * @method GET
 * @route /github/issues/open
 */
router.route('/issues/open/:repo').get(getOpenIssues);

export default router;
