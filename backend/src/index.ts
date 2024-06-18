import app from './express';
import { dataSource } from './database/dataSource';

import { ENV } from './config';
const { PORT, DEBUG } = ENV;

import { logMessages } from './utils';
const {
  DATABASE_CONNECTION,
  DATABASE_CONNECTION_ERROR,
  SERVER_START,
  UTC_DATE_TIME,
  PACIFIC_DATE_TIME,
  CURRENT_NODE_VERSION,
  DEBUG_ENABLED,
} = logMessages;

// Connect to the database.
dataSource
  .initialize()
  .then(() => {
    console.info(DATABASE_CONNECTION);
    // Start the Express application (server).
    app.listen(PORT, () => {
      try {
        // Log server start information.
        console.info(SERVER_START);
        console.info(CURRENT_NODE_VERSION);
        console.info(UTC_DATE_TIME);
        console.info(PACIFIC_DATE_TIME);
        console.log("Hello, I'm serving traffic.");
        if (DEBUG) console.info(DEBUG_ENABLED);
      } catch (error) {
        // Log any error that occurs during the server start.
        console.error(error);
      }
    });
  })
  .catch((error) => {
    // Log any error that occurs during the database connection.
    console.error(DATABASE_CONNECTION_ERROR);
    console.error(error);
  });
