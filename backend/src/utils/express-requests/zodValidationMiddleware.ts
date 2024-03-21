/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { validateZodRequestSchema } from './validateZodRequestSchema';
import { ZodSchema } from 'zod';

declare module 'express-serve-static-core' {
  interface Request {
    getZodValidatedParams: (schema: ZodSchema<unknown>) => any;
    getZodValidatedQuery: (schema: ZodSchema<unknown>) => any;
    getZodValidatedBody: (schema: ZodSchema<unknown>) => any;
  }
}

// Offers functions to validate parameters and req body against a zod schema.
export const zodValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Params.
  req.getZodValidatedParams = (schema: ZodSchema<unknown>): any =>
    validateZodRequestSchema(req.params, schema, 'Request is malformed. Invalid path parameters: ');

  // Query.
  req.getZodValidatedQuery = (schema: ZodSchema<unknown>): any =>
    validateZodRequestSchema(req.query, schema, 'Request is malformed. Invalid query parameters: ');

  // Request body.
  req.getZodValidatedBody = (schema: ZodSchema<unknown>): any =>
    validateZodRequestSchema(req.body, schema, 'Request is malformed. Invalid request body: ');

  next();
};
