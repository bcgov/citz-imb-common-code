/* eslint-disable @typescript-eslint/no-explicit-any */
import { ZodError, z } from 'zod';
import { HttpError } from './HttpError';
import { httpStatusCode } from './httpStatusCode';

export const validateZodRequestSchema = (
  obj: Record<string, any>,
  schema: z.ZodSchema<unknown>,
  errorMsgPrefix: string,
): any => {
  try {
    // Use Zod schema to parse and validate the query parameters
    return schema.parse(obj);
  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.errors
        .map((e) => {
          const path = e.path;
          const message = e.message;

          let expected = '';
          let received = '';

          // Expected and received only exist on type ZodIssueCode, where type of e wants to be ZodIssue
          if ('expected' in e && 'received' in e) {
            expected = e.expected as string;
            received = e.received as string;
          }

          return `${path}: (Expected: ${expected}, Received: ${received}, Message: ${message})`;
        })
        .join(', ');

      // If validation fails, throw an error with detailed information
      throw new HttpError(`${errorMsgPrefix}${formattedErrors}`, httpStatusCode.BAD_REQUEST);
    }
    // For unexpected errors, rethrow them
    throw error;
  }
};
