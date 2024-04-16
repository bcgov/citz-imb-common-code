import { SSOUser } from '@bcgov/citz-imb-sso-express';

import ENV from './env';
const { DEBUG } = ENV;

// SSO auth integration configuration.
export const SSO_OPTIONS = {
  afterUserLogin: (user: SSOUser) => {
    if (DEBUG) console.log(`DEBUG: ${user.display_name} has logged in.`);
  },
  afterUserLogout: (user: SSOUser) => {
    if (DEBUG) console.log(`DEBUG: ${user.display_name} has logged out.`);
  },
};
