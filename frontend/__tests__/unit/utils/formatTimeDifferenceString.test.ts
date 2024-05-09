import { formatTimeDifferenceString } from '@/utils';

// Test suite for formatTimeDifferenceString function
describe('formatTimeDifferenceString function', () => {
  // Test case: Ensure seconds are formatted correctly
  it('formats the time difference correctly (seconds)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T12:30:05Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '5 seconds'
    expect(formattedPastTime).toBe('5 seconds');
    spy.mockRestore();
  });

  // Test case: Ensure 1 second is formatted correctly
  it('formats the time difference correctly (1 second)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T12:30:01Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '1 second'
    expect(formattedPastTime).toBe('1 second');
    spy.mockRestore();
  });

  // Test case: Ensure minutes are formatted correctly
  it('formats the time difference correctly (minutes)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T12:35:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '5 minutes'
    expect(formattedPastTime).toBe('5 minutes');
    spy.mockRestore();
  });

  // Test case: Ensure 1 minute is formatted correctly
  it('formats the time difference correctly (1 minute)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T12:31:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '1 minute'
    expect(formattedPastTime).toBe('1 minute');
    spy.mockRestore();
  });

  // Test case: Ensure hours are formatted correctly
  it('formats the time difference correctly (hours)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T17:30:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '5 hours'
    expect(formattedPastTime).toBe('5 hours');
    spy.mockRestore();
  });

  // Test case: Ensure 1 hour is formatted correctly
  it('formats the time difference correctly (1 hour)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-06T13:30:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '1 hour'
    expect(formattedPastTime).toBe('1 hour');
    spy.mockRestore();
  });

  // Test case: Ensure days are formatted correctly
  it('formats the time difference correctly (days)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-11T12:30:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '5 days'
    expect(formattedPastTime).toBe('5 days');
    spy.mockRestore();
  });

  // Test case: Ensure 1 day is formatted correctly
  it('formats the time difference correctly (1 day)', () => {
    // Mock current time
    const mockDateObject = new Date('2024-05-07T12:30:00Z');
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValueOnce(mockDateObject.getTime());
    // Mock a past date string
    const pastDateString = '2024-05-06T12:30:00Z';
    // Call the formatTimeDifferenceString function with the past date string
    const formattedPastTime = formatTimeDifferenceString(pastDateString);
    // Expect the formatted time to be a string
    expect(typeof formattedPastTime).toBe('string');
    // Expect the formatted time to be '1 day'
    expect(formattedPastTime).toBe('1 day');
    spy.mockRestore();
  });
});
