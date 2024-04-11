import { SSO_OPTIONS } from '@/config';
import { SSOUser } from '@bcgov/citz-imb-sso-express';

// Set DEBUG environment variable for this test case
jest.mock('@/config/env', () => ({
  DEBUG: true,
}));

// Test suite for SSO auth integration configuration when DEBUG enabled
describe('SSO auth integration configuration when DEBUG is enabled', () => {
  // Test case: Check afterUserLogin function
  it('should log user in if DEBUG is enabled', () => {
    const user: Partial<SSOUser> = { display_name: 'TestUser' };
    const debugSpy = jest.spyOn(console, 'log');

    SSO_OPTIONS.afterUserLogin(user as SSOUser);

    expect(debugSpy).toHaveBeenCalledWith(`DEBUG: ${user.display_name} has logged in.`);

    debugSpy.mockRestore();
  });

  // Test case: Check afterUserLogout function
  it('should log user out if DEBUG is enabled', () => {
    const user: Partial<SSOUser> = { display_name: 'TestUser' };
    const debugSpy = jest.spyOn(console, 'log');

    SSO_OPTIONS.afterUserLogout(user as SSOUser);

    expect(debugSpy).toHaveBeenCalledWith(`DEBUG: ${user.display_name} has logged out.`);

    debugSpy.mockRestore();
  });
});
