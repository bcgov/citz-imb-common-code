import { HttpError } from '@/utils';

// Test suite for the HttpError class
describe('HttpError', () => {
  // Test case: Ensure HttpError instance is created with the provided message and status code
  it('should create an instance with the provided message and status code', () => {
    // Define test data
    const errorMessage = 'Test error message';
    const statusCode = 404;

    // Create an instance of HttpError
    const error = new HttpError(errorMessage, statusCode);

    // Verify that error is an instance of HttpError
    expect(error instanceof HttpError).toBe(true);

    // Verify that error message is set correctly
    expect(error.message).toBe(errorMessage);

    // Verify that status code is set correctly
    expect(error.statusCode).toBe(statusCode);
  });
});
