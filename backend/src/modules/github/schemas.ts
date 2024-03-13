import { zodProperty } from '../../utils';
import { z } from 'zod';

export const paramSchemas = {
  getIssues: z.object({
    repo: zodProperty.nonEmptyString('repo').describe('The name of the github repository.'),
  }),
};

export const querySchemas = {
  getIssues: z.object({
    state: z
      .enum(['open', 'closed', 'all'])
      .describe('State of the issues to be fetched: open, closed, or both (all).'),
  }),
};
