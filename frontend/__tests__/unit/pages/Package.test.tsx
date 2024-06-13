import { render, fireEvent } from '@testing-library/react';
import { Package } from '@/pages/Package';
import { ReactNode } from 'react';
import { PackageBadge } from '@/constants';

// Mock window.open to prevent opening new tabs in tests
window.open = jest.fn();

// Mock components
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  GitHubIssues: () => <div />,
  GitHubTabs: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Badge: () => <div />,
}));

const documentationLink = 'http://example.com';

// Test suite for Package page
describe('Package page', () => {
  const mockProps = {
    repo: 'citz-imb-sso-react',
    title: 'Test Package',
    summary: 'This is a test package.',
    badge: 'experimental' as PackageBadge,
    documentationLink,
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  // Test case: Renders title and summary correctly
  it('renders title and summary correctly', () => {
    const { getByText } = render(<Package {...mockProps} />);
    expect(getByText('Test Package')).toBeInTheDocument();
    expect(getByText('This is a test package.')).toBeInTheDocument();
  });

  // Test case: Opens GitHub repository link in new tab
  it('opens GitHub repository link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('GitHub Repository'));
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/bcgov/citz-imb-sso-react',
      '_blank',
    );
  });

  // Test case: Opens NPM package link in new tab
  it('opens NPM package link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Package on NPM'));
    expect(window.open).toHaveBeenCalledWith(
      'https://www.npmjs.com/package/@bcgov/citz-imb-sso-react',
      '_blank',
    );
  });

  // Test case: Opens package documentation link in new tab
  it('opens package documentation link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Package Documentation'));
    expect(window.open).toHaveBeenCalledWith(documentationLink, '_blank');
  });

  // Test case: Opens bug report link in new tab
  it('opens bug report link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Bug Report'));
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/bcgov/citz-imb-sso-react/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=Bug%3A+',
      '_blank',
    );
  });

  // Test case: Opens feature request link in new tab
  it('opens feature request link in new tab', () => {
    const { getByText } = render(<Package {...mockProps} />);
    fireEvent.click(getByText('Feature Request'));
    expect(window.open).toHaveBeenCalledWith(
      'https://github.com/bcgov/citz-imb-sso-react/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=Request%3A+',
      '_blank',
    );
  });
});
