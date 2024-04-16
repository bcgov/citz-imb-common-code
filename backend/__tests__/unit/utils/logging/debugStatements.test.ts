import { Request } from 'express';
import { debugRequest, colors as c } from '@/utils';

// Set DEBUG and VERBOSE_DEBUG environment variables for this test case
jest.mock('@/config', () => ({
  ENV: {
    DEBUG: true,
    VERBOSE_DEBUG: true,
  },
}));

// Test suite for debugRequest function
describe('debugRequest', () => {
  // Test case: Debugging and verbose debugging enabled
  it('should log debug message with verbose debug information', () => {
    // Mock Request object
    const req: Partial<Request> = {
      method: 'PUT',
      originalUrl: '/test',
      query: {},
      body: { test: 'data' },
    };

    // Mock console.info method
    console.info = jest.fn();

    // Call the debugRequest function
    debugRequest(req as Request);

    // Expect debug message to be logged
    expect(console.info).toHaveBeenCalledWith(
      `DEBUG: Request made to [${c.Yellow}PUT${c.Reset}] /test`,
    );

    // Expect verbose debug information to be logged
    expect(console.info).toHaveBeenCalledWith(`  Request query: {}`);
    expect(console.info).toHaveBeenCalledWith('  Request body:', { test: 'data' });
  });
});
