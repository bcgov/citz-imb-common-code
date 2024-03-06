import { KeycloakUser } from '@bcgov/citz-imb-kc-express';
import { activateUser } from '../utils';

import ENV from './env';
const { DEBUG } = ENV;

// Keycloak auth integration configuration.
export const KEYCLOAK_OPTIONS = {
  afterUserLogin: (user: KeycloakUser) => {
    if (DEBUG) console.log(`DEBUG: ${user.display_name} has logged in.`);
    activateUser(user);
  },
  afterUserLogout: (user: KeycloakUser) => {
    if (DEBUG) console.log(`DEBUG: ${user.display_name} has logged out.`);
    console.log(`${user?.display_name ?? 'Unknown'} has logged out.`);
  },
};
