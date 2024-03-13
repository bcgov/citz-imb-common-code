import { zodProperty } from '../../utils';
import { z } from 'zod';

export const getOpenIssuesParamsSchema = z.object({
  repo: zodProperty.nonEmptyString('repo').describe('The name of the github repository.'),
});
