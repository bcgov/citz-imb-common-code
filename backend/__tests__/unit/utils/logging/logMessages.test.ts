import { colors as c, getCurrentDateTime, logMessages } from '@/utils';
import { ENV } from '@/config';

const { PORT, NODE_VERSION } = ENV;

describe('Constants', () => {
  it('SERVER_START should have correct value', () => {
    expect(logMessages.SERVER_START).toEqual(
      `${c.LBlue}Express Server started on port ${c.Reset}${PORT}${c.LBlue}${c.Reset}.`,
    );
  });

  it('CURRENT_NODE_VERSION should have correct value', () => {
    expect(logMessages.CURRENT_NODE_VERSION).toEqual(
      `${c.Yellow}[NODE]${c.Reset} Current version of node.js: ${NODE_VERSION}`,
    );
  });

  it('DEBUG_ENABLED should have correct value', () => {
    expect(logMessages.DEBUG_ENABLED).toEqual(
      `${c.Red}DEBUG is enabled. Set environment variable to 'false' to disable.${c.Reset}`,
    );
  });

  it('UTC_DATE_TIME should have correct value', () => {
    const expectedUTCDateTime = `${c.Yellow}[UTC]${c.Reset} Current date and time: ${
      getCurrentDateTime().formattedDateUTC
    }, ${getCurrentDateTime().formattedTimeUTC}`;
    // Slice last 3 digits to account for differing timing of function calls
    expect(logMessages.UTC_DATE_TIME.slice(0, -3)).toEqual(expectedUTCDateTime.slice(0, -3));
  });

  it('PACIFIC_DATE_TIME should have correct value', () => {
    const expectedPacificDateTime = `${c.Yellow}[${getCurrentDateTime().pacificTimeZone}]${c.Reset} Current date and time: ${
      getCurrentDateTime().formattedDatePacific
    }, ${getCurrentDateTime().formattedTimePacific}`;
    // Slice last 3 digits to account for differing timing of function calls
    expect(logMessages.PACIFIC_DATE_TIME.slice(0, -3)).toEqual(
      expectedPacificDateTime.slice(0, -3),
    );
  });
});
