import { getTimeBasedGreeting } from '@/utils';

// Test suite for getTimeBasedGreeting function
describe('getTimeBasedGreeting function', () => {
  // Test case: Ensure that the getTimeBasedGreeting function returns 'Good morning' before 12:00
  it('returns "Good morning" before 12:00', () => {
    // Mock Date.getHours to return 10 for 10 AM
    const spy = jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);

    // Call the getTimeBasedGreeting function
    const greeting = getTimeBasedGreeting();
    spy.mockRestore();

    // Expect the result to be 'Good morning'
    expect(greeting).toBe('Good morning');
  });

  // Test case: Ensure that the getTimeBasedGreeting function returns 'Good afternoon' between 12:00 and 18:00
  it('returns "Good afternoon" between 12:00 and 18:00', () => {
    // Mock Date.getHours to return 15 for 3 PM
    const spy = jest.spyOn(Date.prototype, 'getHours').mockReturnValue(15);

    // Call the getTimeBasedGreeting function
    const greeting = getTimeBasedGreeting();
    spy.mockRestore();

    // Expect the result to be 'Good afternoon'
    expect(greeting).toBe('Good afternoon');
  });

  // Test case: Ensure that the getTimeBasedGreeting function returns 'Good evening' after 18:00
  it('returns "Good evening" after 18:00', () => {
    // Mock Date.getHours to return 20 for 8 PM
    const spy = jest.spyOn(Date.prototype, 'getHours').mockReturnValue(20);

    // Call the getTimeBasedGreeting function
    const greeting = getTimeBasedGreeting();
    spy.mockRestore();

    // Expect the result to be 'Good evening'
    expect(greeting).toBe('Good evening');
  });
});
