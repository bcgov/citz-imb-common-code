import { Request, Response } from 'express';
import { errorWrapper } from '../../utils';

import { ENV } from '../../config';
const { ENVIRONMENT, DEBUG, VERBOSE_DEBUG } = ENV;

/**
 * Provide configuration variables to the frontend.
 * @method GET
 * @route /config
 */
export const getConfig = errorWrapper(async (req: Request, res: Response) => {
  const configuration = {
    ENVIRONMENT,
    DEBUG,
    VERBOSE_DEBUG,
  };

  res.json(configuration);
});
