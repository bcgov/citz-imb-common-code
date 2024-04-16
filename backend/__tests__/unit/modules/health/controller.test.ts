import { Request, Response } from 'express';
import { isHealthy } from '@/modules/health/controller';

// Test suite for isHealthy controller
describe('isHealthy controller', () => {
  // Test case: Check if the function sends a response with "Application is healthy!"
  it('should send "Application is healthy!" message', async () => {
    // Mock Express request and response objects
    const mockReq = {} as Request;
    const mockRes = {
      send: jest.fn(),
    } as unknown as Response;
    const nextFunction = jest.fn();

    // Call the function
    await isHealthy(mockReq, mockRes, nextFunction);

    // Expectations
    expect(mockRes.send).toHaveBeenCalledWith('Application is healthy!');
  });
});
