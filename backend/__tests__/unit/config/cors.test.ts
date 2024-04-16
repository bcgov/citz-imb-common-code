import { CORS_OPTIONS } from '@/config';

const FRONTEND_URL = 'http://localhost:3000';

// Set environment variables for this test case
jest.mock('@/config/env', () => ({
  FRONTEND_URL: 'http://localhost:3000',
}));

// Test suite for CORS_OPTIONS object
describe('CORS_OPTIONS object', () => {
  // Test case: Ensure origin property is set correctly
  it('should have correct origin property', () => {
    expect(CORS_OPTIONS.origin).toBe(FRONTEND_URL);
  });

  // Test case: Ensure credentials property is set to true
  it('should have credentials property set to true', () => {
    expect(CORS_OPTIONS.credentials).toBe(true);
  });
});
