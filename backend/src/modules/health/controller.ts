import { Request, Response } from 'express';
import { errorWrapper } from '../../utils';

/**
 * Check if application is healthy.
 * @method GET
 * @route /health
 */
export const isHealthy = errorWrapper(async (req: Request, res: Response) => {
  res.send('Application is healthy!');
});
