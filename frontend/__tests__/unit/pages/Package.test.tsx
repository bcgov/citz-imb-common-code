import { render, fireEvent } from '@testing-library/react';
import { Package } from '@/pages/Package';

// Mock window.open to prevent opening new tabs in tests
window.open = jest.fn();

// Mock components
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  GitHubIssues: () => <div />,
}));

// Test suite for Package page
describe('Package page', () => {
  const mockProps = {
    repo: 'citz-imb-sso-react',
    title: 'Test Package',
    summary: 'This is a test package.',
  };

  it('renders title and summary correctly', () => {
    const { getByText } = render(<Package {...mockProps} />);
    expect(getByText('Test Package')).toBeInTheDocument();
    expect(getByText('This is a test package.')).toBeInTheDocument();
  });

  it('opens GitHub repository link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('GitHub Repository'));
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/bcgov/citz-imb-sso-react',
      '_blank',
    );
  });

  it('opens NPM package link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Package on NPM'));
    expect(window.open).toHaveBeenCalledWith(
      'https://www.npmjs.com/package/@bcgov/citz-imb-sso-react',
      '_blank',
    );
  });

  it('opens package documentation link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Package Documentation'));
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/bcgov/citz-imb-sso-react/wiki',
      '_blank',
    );
  });
});
