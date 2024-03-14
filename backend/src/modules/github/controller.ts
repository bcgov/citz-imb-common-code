import { Request, Response } from 'express';
import { HttpError, errorWrapper, getParams, getQuery, httpStatusCode } from '../../utils';
import { paramSchemas, querySchemas } from './schemas';

/**
 * Use github api to lookup issues for a repo.
 * @method GET
 * @route /github/issues/:repo
 * @param {'open' | 'closed' | 'all'} state - Query param.
 */
export const getIssues = errorWrapper(async (req: Request, res: Response) => {
  const { repo } = getParams(req, paramSchemas.getIssues);
  const { state } = getQuery(req, querySchemas.getIssues);
  const OWNER = 'bcgov';

  const url = `https://api.github.com/repos/${OWNER}/${repo}/issues?state=${state}`;

  const response = await fetch(url);
  if (!response.ok)
    throw new HttpError(`Failed to fetch GitHub issues from ${repo}.`, httpStatusCode.BAD_REQUEST);

  // Get issues.
  const issues = await response.json();
  if (!issues) throw new HttpError(`No GitHub issues found for ${repo}.`, httpStatusCode.NOT_FOUND);

  // Filter out pull requests.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredIssues = issues.filter((issue: any) => !issue.pull_request);

  // Remove unneeded properties from issues objects.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const simplifiedIssues = filteredIssues.map((issue: any) => ({
    url: issue.url,
    number: issue.number,
    title: issue.title,
    comments: issue.comments,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    reactions: issue.reactions,
    user: {
      login: issue.user.login,
      avatar_url: issue.user.avatar_url,
      url: issue.user.url,
    },
  }));

  res.json(simplifiedIssues);
});
