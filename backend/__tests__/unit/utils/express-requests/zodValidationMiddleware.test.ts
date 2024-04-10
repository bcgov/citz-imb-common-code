/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { validateZodRequestSchema, zodValidationMiddleware } from '@/utils';
import { ZodSchema } from 'zod';

// Mock the validateZodRequestSchema function
jest.mock('@/utils/express-requests/validateZodRequestSchema', () => ({
  validateZodRequestSchema: jest.fn(),
}));

// Test suite for the zodValidationMiddleware function
describe('zodValidationMiddleware', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    // Mock the request object
    mockRequest = {
      params: { id: 'test' },
      query: { page: 1 },
      body: { username: 'Tester' },
      getZodValidatedParams: jest.fn(),
      getZodValidatedQuery: jest.fn(),
      getZodValidatedBody: jest.fn(),
    } as unknown as Partial<Request<any>>;

    mockResponse = {};
    mockNext = jest.fn();
  });

  // Function to test Zod validation
  const testZodValidation = (
    property: 'params' | 'query' | 'body',
    schema: ZodSchema<unknown>,
    errorMsg: string,
  ) => {
    it(`should call validateZodRequestSchema with the correct arguments for ${property}`, () => {
      // Call the middleware
      zodValidationMiddleware(mockRequest as Request, mockResponse as Response, mockNext);

      // Call the Zod validation function for the specified property if it's defined
      const validationFunction =
        mockRequest[
          `getZodValidated${property.charAt(0).toUpperCase() + property.slice(1)}` as keyof Partial<Request>
        ];
      if (validationFunction) {
        validationFunction(schema);
      }

      // Expect validateZodRequestSchema to be called with the correct arguments including the error message
      expect(validateZodRequestSchema).toHaveBeenCalledWith(
        mockRequest[property],
        schema,
        errorMsg,
      );
    });
  };

  // Test case: Ensure Zod validation functions are added to the request object
  it('should add Zod validation functions to the request object', () => {
    // Call the middleware
    zodValidationMiddleware(mockRequest as Request, mockResponse as Response, mockNext);

    // Expect the request object to have the Zod validation functions
    expect(mockRequest.getZodValidatedParams).toBeDefined();
    expect(mockRequest.getZodValidatedQuery).toBeDefined();
    expect(mockRequest.getZodValidatedBody).toBeDefined();
  });

  // Test cases for params, query, and body validations
  testZodValidation(
    'params',
    z.object({ id: z.string() }),
    'Request is malformed. Invalid path parameters: ',
  );
  testZodValidation(
    'query',
    z.object({ page: z.number() }),
    'Request is malformed. Invalid query parameters: ',
  );
  testZodValidation(
    'body',
    z.object({ username: z.string() }),
    'Request is malformed. Invalid request body: ',
  );
});
