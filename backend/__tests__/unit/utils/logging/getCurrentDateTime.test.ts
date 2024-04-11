import { getCurrentDateTime, GetCurrentDateTime } from '@/utils';

// Test suite for getCurrentDateTime function
describe('getCurrentDateTime', () => {
  // Test case: Ensure the returned object has the correct structure and properties
  it('should return an object with the correct properties and values', () => {
    // Call the getCurrentDateTime function
    const result = getCurrentDateTime();

    // Define the expected structure of the returned object
    const expected: GetCurrentDateTime = {
      formattedDateUTC: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
      formattedTimeUTC: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
      formattedDatePacific: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
      formattedTimePacific: expect.stringMatching(/^\d{2}:\d{2}:\d{2}$/),
      pacificTimeZone: expect.stringMatching(/^(PT|PST)$/),
    };

    // Assert that the result matches the expected structure and properties
    expect(result).toEqual(expected);
  });
});
