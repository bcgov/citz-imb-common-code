import { ANSI_CODES } from '@bcgov/citz-imb-express-utilities';

export const DEBUG_ENABLED = `${ANSI_CODES.FOREGROUND.RED}DEBUG is enabled. Set environment variable to 'false' to disable.${ANSI_CODES.FORMATTING.RESET}`;
export const DATABASE_CONNECTION = `${ANSI_CODES.FOREGROUND.LIME}Database connection and initialization successful.${ANSI_CODES.FORMATTING.RESET}`;
export const DATABASE_CONNECTION_ERROR = `${ANSI_CODES.FOREGROUND.PINK}[ERROR] ${ANSI_CODES.FORMATTING.RESET}${ANSI_CODES.FOREGROUND.RED}Connecting to the database:${ANSI_CODES.FORMATTING.RESET}`;
