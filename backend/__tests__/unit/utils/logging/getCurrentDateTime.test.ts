import { getCurrentDateTime } from '@/utils';

// Test suite for getCurrentDateTime function
describe('getCurrentDateTime', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  // Test case: Ensure that the function correctly computes the Pacific Standard Time (PST)
  // when provided a UTC time during the PST period.
  it('should handle Pacific Standard Time correctly', () => {
    // Set system time to a known date where PST is applicable
    jest.setSystemTime(new Date('2024-01-15T12:00:00Z'));
    const result = getCurrentDateTime();

    const expected = {
      formattedDateUTC: '2024-01-15',
      formattedTimeUTC: '12:00:00',
      formattedDatePacific: '2024-01-15',
      formattedTimePacific: '04:00:00', // UTC-8 hours
      pacificTimeZone: 'PST',
    };

    expect(result).toEqual(expected);
  });

  // Test case: Ensure that the function correctly computes the Pacific Daylight Time (PDT)
  // when provided a UTC time during the PDT period.
  it('should handle Pacific Daylight Time correctly', () => {
    // Set system time to a known date where PDT is applicable
    jest.setSystemTime(new Date('2024-06-15T12:00:00Z'));
    const result = getCurrentDateTime();

    const expected = {
      formattedDateUTC: '2024-06-15',
      formattedTimeUTC: '12:00:00',
      formattedDatePacific: '2024-06-15',
      formattedTimePacific: '05:00:00', // UTC-7 hours
      pacificTimeZone: 'PT', // PT indicates Pacific Time with daylight saving
    };

    expect(result).toEqual(expected);
  });

  // Test case: Validate the correct adjustment of date and time when the converted Pacific time crosses over to the previous day.
  // This test simulates a scenario where the UTC time translates to late evening PST time on the previous day.
  it('should handle time correctly when pacificHours cross over to the previous day (PST scenario)', () => {
    // Set UTC early morning which corresponds to the previous day in PST
    jest.setSystemTime(new Date('2024-01-15T03:00:00Z'));

    const result = getCurrentDateTime();

    const expected = {
      formattedDateUTC: '2024-01-15',
      formattedTimeUTC: '03:00:00',
      formattedDatePacific: '2024-01-14', // Crossing over to the previous day
      formattedTimePacific: '19:00:00', // 03:00 UTC - 8 hours = 19:00 previous day
      pacificTimeZone: 'PST',
    };

    expect(result).toEqual(expected);
  });

  // Test case: Validate the correct adjustment of date and time when the converted Pacific time crosses over to the previous day during daylight saving time.
  // This test simulates a scenario where the UTC time translates to late evening PDT time on the previous day.
  it('should handle time correctly when pacificHours cross over to the previous day (PDT scenario)', () => {
    // Set UTC early morning which corresponds to the previous day in PDT
    jest.setSystemTime(new Date('2024-06-15T02:00:00Z'));

    const result = getCurrentDateTime();

    const expected = {
      formattedDateUTC: '2024-06-15',
      formattedTimeUTC: '02:00:00',
      formattedDatePacific: '2024-06-14', // Crossing over to the previous day
      formattedTimePacific: '19:00:00', // 02:00 UTC - 7 hours = 19:00 previous day
      pacificTimeZone: 'PT', // PT indicates Pacific Time with daylight saving
    };

    expect(result).toEqual(expected);
  });

  // Test case: Validate crossing over to the previous month in PST
  it('should handle date correctly when crossing over to the previous month (PST scenario)', () => {
    // Set system time to just after midnight UTC at the start of February, which corresponds to the evening of January 31st in PST
    jest.setSystemTime(new Date('2024-02-01T01:00:00Z'));

    const result = getCurrentDateTime();

    const expected = {
      formattedDateUTC: '2024-02-01',
      formattedTimeUTC: '01:00:00',
      formattedDatePacific: '2024-01-31', // January 31st due to -8 hours offset
      formattedTimePacific: '17:00:00', // 01:00 UTC - 8 hours
      pacificTimeZone: 'PST',
    };

    expect(result).toEqual(expected);
  });
});
