import { getConfig } from '@/modules/config/controller';
import { Request, Response } from 'express';

// Set DEBUG and VERBOSE_DEBUG environment variables for this test case
jest.mock('@/config', () => ({
  ENV: {
    ENVIRONMENT: 'dev',
    DEBUG: true,
    VERBOSE_DEBUG: false,
  },
}));

// Test suite for getConfig function
describe('getConfig', () => {
  // Test case: should return configuration object
  it('should return configuration object', async () => {
    // Mock Request and Response objects
    const req = {} as Request;
    const res = {
      json: jest.fn(),
    } as unknown as Response;
    const nextFunction = jest.fn();

    // Call getConfig function
    await getConfig(req, res, nextFunction);

    // Expectation: res.json should be called with configuration object
    expect(res.json).toHaveBeenCalledWith({
      ENVIRONMENT: 'dev',
      DEBUG: true,
      VERBOSE_DEBUG: false,
    });
  });
});
