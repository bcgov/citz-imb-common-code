/* eslint-disable @typescript-eslint/no-var-requires */
import { render, fireEvent, screen } from '@testing-library/react';
import { AuthButton } from '@/components/AuthButton';
import { Button } from '@bcgov/design-system-react-components';

// Mock the Button component
jest.mock('@bcgov/design-system-react-components', () => ({
  Button: jest.fn(({ onPress, children }) => <button onClick={onPress}>{children}</button>), // Mocking the Button component with a jest function
}));

// Test suite for AuthButton component
describe('AuthButton component', () => {
  // Reset mock implementation before each test
  beforeEach(() => {
    (Button as jest.Mock).mockClear(); // Reset mock function for Button component
  });

  // Test case: Call login function when login button is clicked
  it('should call login function when login button is clicked', () => {
    const loginMock = jest.fn();
    // Mock useSSO to return isAuthenticated as true
    jest.spyOn(require('@bcgov/citz-imb-sso-react'), 'useSSO').mockReturnValue({
      isAuthenticated: false,
      login: loginMock,
    });
    render(<AuthButton />);
    fireEvent.click(screen.getByText('LOGIN WITH IDIR'));
    expect(loginMock).toHaveBeenCalledWith({ idpHint: 'idir' });
  });

  // Test case: Call logout function when logout button is clicked
  it('should call logout function when logout button is clicked', () => {
    const logoutMock = jest.fn();
    // Mock useSSO to return isAuthenticated as true
    jest.spyOn(require('@bcgov/citz-imb-sso-react'), 'useSSO').mockReturnValue({
      isAuthenticated: true,
      logout: logoutMock,
    });

    render(<AuthButton />);
    fireEvent.click(screen.getByText('LOGOUT'));
    expect(logoutMock).toHaveBeenCalled();
  });
});
