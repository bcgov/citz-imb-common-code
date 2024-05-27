import { formatDateString } from '@/utils';

// Test suite for formatDateString function
describe('formatDateString function', () => {
  // Test case: Ensure that the formatDateString function formats the date string correctly
  it('formats the date string correctly', () => {
    // Mock an ISO date string
    const isoDateString = '2024-05-06T12:30:00Z';
    // Call the formatDateString function with the mock ISO date string
    const formattedDate = formatDateString(isoDateString, 'UTC');
    // Check if the formatted date matches the expected format
    expect(formattedDate).toMatch('May 6, 2024 at 12:30:00 PM');
  });
});
