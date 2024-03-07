/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from 'express';
import { ZodError, z } from 'zod';
import { HttpError } from './HttpError';
import { httpStatusCode } from './httpStatusCode';

const validateRequestSchema = (
  obj: Record<string, any>,
  schema: z.ZodSchema<unknown>,
  errorMsgPrefix: string,
): any => {
  try {
    // Use Zod schema to parse and validate the query parameters
    return schema.parse(obj);
  } catch (error) {
    if (error instanceof ZodError) {
      // If validation fails, throw an error with detailed information
      throw new HttpError(
        `${errorMsgPrefix}${error.errors.map((e) => e.message).join(', ')}`,
        httpStatusCode.BAD_REQUEST,
      );
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};

export const getQuery = (req: Request, schema: z.ZodSchema<unknown>): any =>
  validateRequestSchema(req.query, schema, 'Request is malformed. Invalid query parameters: ');

export const getParams = (req: Request, schema: z.ZodSchema<unknown>): any =>
  validateRequestSchema(req.params, schema, 'Request is malformed. Invalid path parameters: ');

export const getBody = (req: Request, schema: z.ZodSchema<unknown>): any =>
  validateRequestSchema(req.body, schema, 'Request is malformed. Invalid request body: ');
