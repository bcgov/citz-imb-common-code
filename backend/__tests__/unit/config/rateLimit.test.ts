import { RATE_LIMIT_OPTIONS } from '@/config';

// Test suite for RATE_LIMIT_OPTIONS object
describe('RATE_LIMIT_OPTIONS object', () => {
  // Test case: Ensure windowMs property is set correctly
  it('should have correct windowMs property', () => {
    expect(RATE_LIMIT_OPTIONS.windowMs).toBe(2000);
  });

  // Test case: Ensure max property is set correctly
  it('should have correct max property', () => {
    expect(RATE_LIMIT_OPTIONS.max).toBe(100);
  });

  // Test case: Ensure standardHeaders property is set to true
  it('should have standardHeaders property set to true', () => {
    expect(RATE_LIMIT_OPTIONS.standardHeaders).toBe(true);
  });

  // Test case: Ensure legacyHeaders property is set to false
  it('should have legacyHeaders property set to false', () => {
    expect(RATE_LIMIT_OPTIONS.legacyHeaders).toBe(false);
  });
});
