/* eslint-disable @typescript-eslint/no-var-requires */
import { render } from '@testing-library/react';
import { Greeting } from '@/components/text/Greeting';
import { getTimeBasedGreeting } from '@/utils';

// Mock getTimeBasedGreeting utility function
jest.mock('@/utils', () => ({
  getTimeBasedGreeting: jest.fn(() => 'Good morning'),
}));

// Mock Typography component
jest.mock('@/components', () => ({
  Typography: jest.fn(({ children }) => <div>{children}</div>),
}));

// Test suite for Greeting component
describe('Greeting component', () => {
  test('renders message even when user is not authenticated', () => {
    // Mock useSSO hook to return isAuthenticated as false
    jest.spyOn(require('@bcgov/citz-imb-sso-react'), 'useSSO').mockReturnValue({
      isAuthenticated: false,
    });

    // Render the component
    render(<Greeting />);

    expect(getTimeBasedGreeting).not.toHaveBeenCalled();
    expect(document.body.textContent).toContain(
      'Browse our code offerings below and click on one for more details.',
    );
  });

  test('renders greeting message when user is authenticated', () => {
    // Mock useSSO hook to return isAuthenticated as true and user with first_name
    jest.spyOn(require('@bcgov/citz-imb-sso-react'), 'useSSO').mockReturnValue({
      isAuthenticated: true,
      user: { first_name: 'John' },
    });

    // Render the component
    render(<Greeting />);

    expect(getTimeBasedGreeting).toHaveBeenCalled();
    expect(document.body.textContent).toMatch(/Good morning\s+John!/);
  });
});
