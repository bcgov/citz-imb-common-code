import { hasNoEmptyStringValues } from '@/utils';

// Test suite for hasNoEmptyStringValues function
describe('hasNoEmptyStringValues function', () => {
  // Test case: Ensure that the function returns true when the input object has no empty string values
  it('returns true when the input object has no empty string values', () => {
    // Create an input object without any empty string values
    const input = {
      name: 'John',
      age: 30,
      email: 'john@example.com',
    };
    // Call the hasNoEmptyStringValues function with the input object
    const result = hasNoEmptyStringValues(input);
    // Expect the result to be true
    expect(result).toBe(true);
  });

  // Test case: Ensure that the function returns false when the input object has at least one empty string value
  it('returns false when the input object has at least one empty string value', () => {
    // Create an input object with at least one empty string value
    const input = {
      name: 'John',
      age: 30,
      email: '', // Empty string value
    };
    // Call the hasNoEmptyStringValues function with the input object
    const result = hasNoEmptyStringValues(input);
    // Expect the result to be false
    expect(result).toBe(false);
  });

  // Test case: Ensure that the function returns false when the input is not an object
  it('returns false when the input is not an object', () => {
    // Call the hasNoEmptyStringValues function with a non-object input
    const result = hasNoEmptyStringValues('not an object');
    // Expect the result to be false
    expect(result).toBe(false);
  });

  // Test case: Ensure that the function returns false when the input is null
  it('returns false when the input is null', () => {
    // Call the hasNoEmptyStringValues function with a null input
    const result = hasNoEmptyStringValues(null);
    // Expect the result to be false
    expect(result).toBe(false);
  });
});
