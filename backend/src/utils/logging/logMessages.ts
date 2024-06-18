import { getCurrentDateTime } from './getCurrentDateTime';
import * as c from './colors';

import { ENV } from '../../config';
const { PORT, NODE_VERSION } = ENV;

export const SERVER_START = `${c.LBlue}Express Server started on port ${c.Reset}${PORT}${c.LBlue}${c.Reset}.`;
export const CURRENT_NODE_VERSION = `${c.Yellow}[NODE]${c.Reset} Current version of node.js: ${NODE_VERSION}`;
export const DEBUG_ENABLED = `${c.Red}DEBUG is enabled. Set environment variable to 'false' to disable.${c.Reset}`;
export const DATABASE_CONNECTION = `${c.Lime}Database connection and initialization successful.${c.Reset}`;
export const DATABASE_CONNECTION_ERROR = `${c.Pink}[ERROR] ${c.Reset}${c.Red}Connecting to the database:${c.Reset}`;

// Current date time message in UTC.
export const UTC_DATE_TIME = `${c.Yellow}[UTC]${c.Reset} Current date and time: ${
  getCurrentDateTime().formattedDateUTC
}, ${getCurrentDateTime().formattedTimeUTC}`;

// Current date time message in PT/PST.
export const PACIFIC_DATE_TIME = `${c.Yellow}[${getCurrentDateTime().pacificTimeZone}]${
  c.Reset
} Current date and time: ${getCurrentDateTime().formattedDatePacific}, ${
  getCurrentDateTime().formattedTimePacific
}`;
