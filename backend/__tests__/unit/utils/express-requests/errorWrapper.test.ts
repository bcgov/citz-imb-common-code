import { Request, Response, NextFunction } from 'express';
import { errorWrapper, HttpError, httpStatusCode } from '@/utils';

// Test suite for the errorWrapper function
describe('errorWrapper', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;
  let mockHandler: jest.Mock;

  // Set up mock objects before each test
  beforeEach(() => {
    mockRequest = {
      method: 'GET',
      originalUrl: '/test',
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    mockHandler = jest.fn();
  });

  // Test case: Ensure the provided handler is called
  it('should call the provided handler', async () => {
    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);
    expect(mockHandler).toHaveBeenCalled();
  });

  // Test case: Ensure HttpError instances are caught and handled properly
  it('should catch and handle HttpError instances', async () => {
    const error = new HttpError('Custom error message', httpStatusCode.BAD_REQUEST);
    mockHandler.mockRejectedValueOnce(error);

    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(httpStatusCode.BAD_REQUEST);
    expect(mockResponse.json).toHaveBeenCalledWith({
      method: mockRequest.method,
      originalUrl: mockRequest.originalUrl,
      message: 'Custom error message',
    });
  });

  // Test case: Ensure other Error instances are caught and handled properly
  it('should catch and handle other Error instances', async () => {
    const error = new Error('Generic error');
    mockHandler.mockRejectedValueOnce(error);

    await errorWrapper(mockHandler)(mockRequest as Request, mockResponse as Response, mockNext);

    expect(mockResponse.status).toHaveBeenCalledWith(httpStatusCode.INTERNAL_SERVER_ERROR);
    expect(mockResponse.json).toHaveBeenCalledWith({
      method: mockRequest.method,
      originalUrl: mockRequest.originalUrl,
      message: 'Generic error',
    });
  });
});
