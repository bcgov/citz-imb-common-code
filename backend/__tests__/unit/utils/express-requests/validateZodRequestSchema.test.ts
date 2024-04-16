import { z } from 'zod';
import { HttpError, validateZodRequestSchema } from '@/utils';

// Test suite for the validateZodRequestSchema function
describe('validateZodRequestSchema', () => {
  // Test case: Ensure the object is validated against the provided Zod schema
  it('should validate the object against the provided Zod schema', () => {
    // Define test data
    const obj = {
      name: 'John',
      age: 30,
    };
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });
    const errorMsgPrefix = 'Validation error: ';

    // Call the function with the test data
    const result = validateZodRequestSchema(obj, schema, errorMsgPrefix);

    // Expect the result to match the input object
    expect(result).toEqual(obj);
  });

  // Test case: Ensure HttpError is thrown when validation fails
  it('should throw HttpError when validation fails', () => {
    // Define test data
    const obj = {
      name: 'John',
      age: '30', // Age should be a number, but provided as a string
    };
    const schema = z.object({
      name: z.string(),
      age: z.number(),
    });
    const errorMsgPrefix = 'Validation error: ';

    // Expect the function to throw HttpError with the appropriate status code
    expect(() => {
      validateZodRequestSchema(obj, schema, errorMsgPrefix);
    }).toThrow(HttpError);
  });
});
