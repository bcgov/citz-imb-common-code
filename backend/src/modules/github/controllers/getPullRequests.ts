import { Request, Response } from 'express';
import { HttpError, errorWrapper, HTTP_STATUS_CODES } from '@bcgov/citz-imb-express-utilities';
import { paramSchemas, querySchemas } from '../schemas';

/**
 * Use github api to lookup pull requests for a repo.
 * @method GET
 * @route /github/pulls/:repo
 * @param {'open' | 'closed' | 'all'} state - Query param.
 */
export const getPullRequests = errorWrapper(async (req: Request, res: Response) => {
  const { getZodValidatedParams, getZodValidatedQuery } = req;
  const { repo } = getZodValidatedParams(paramSchemas.getIssues);
  const { state } = getZodValidatedQuery(querySchemas.getIssues);

  const OWNER = 'bcgov';
  const url = `https://api.github.com/repos/${OWNER}/${repo}/issues?state=${state}`;

  const response = await fetch(url);
  if (!response.ok)
    throw new HttpError(
      HTTP_STATUS_CODES.BAD_REQUEST,
      `Failed to fetch GitHub issues from ${repo}.`,
    );

  // Get issues.
  const issues = await response.json();
  if (!issues)
    throw new HttpError(HTTP_STATUS_CODES.NOT_FOUND, `No GitHub issues found for ${repo}.`);

  // Filter out issues.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filteredIssues = issues.filter((issue: any) => issue.pull_request);

  // Remove unneeded properties from issues objects.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const simplifiedIssues = filteredIssues.map((issue: any) => ({
    url: issue.html_url,
    number: issue.number,
    title: issue.title,
    comments: issue.comments,
    created_at: issue.created_at,
    updated_at: issue.updated_at,
    reactions: issue.reactions,
    user: {
      login: issue.user.login,
      avatar_url: issue.user.avatar_url,
      url: issue.user.html_url,
    },
  }));

  res.json(simplifiedIssues);
});
