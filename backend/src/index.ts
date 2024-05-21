import app from './express';

import { ENV } from './config';
const { PORT, DEBUG } = ENV;

import { logMessages } from './utils';
const { SERVER_START, UTC_DATE_TIME, PACIFIC_DATE_TIME, CURRENT_NODE_VERSION, DEBUG_ENABLED } =
  logMessages;

// Start the Express application (server).
app.listen(PORT, () => {
  try {
    // Log server start information.
    console.info(SERVER_START);
    console.info(CURRENT_NODE_VERSION);
    console.info(UTC_DATE_TIME);
    console.info(PACIFIC_DATE_TIME);
    console.log("Hello, I'm serving traffic.");
    // Adam's default generate new image line
    console.log("Uh-oh, Adam's doing stuff again!");
    if (DEBUG) console.info(DEBUG_ENABLED);
  } catch (error) {
    // Log any error that occurs during the server start.
    console.error(error);
  }
});
