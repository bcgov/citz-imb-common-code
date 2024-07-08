import { logMessages } from '@/utils';
import { ANSI_CODES } from '@bcgov/citz-imb-express-utilities';

describe('logMessages', () => {
  it('DEBUG_ENABLED should have correct value', () => {
    expect(logMessages.DEBUG_ENABLED).toEqual(
      `${ANSI_CODES.FOREGROUND.RED}DEBUG is enabled. Set environment variable to 'false' to disable.${ANSI_CODES.FORMATTING.RESET}`,
    );
  });
});
