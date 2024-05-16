import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { IconType, PackageCard } from '@/components';
import { PackageBadge } from '@/constants';

// Mock the components used within PackageCard
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Card: ({ children }: { children: ReactNode }) => <div data-testid="mock-card">{children}</div>,
  Icon: ({ icon }: { icon: IconType }) => <div data-testid="mock-icon">{icon}</div>,
  Stack: ({ children }: { children: ReactNode }) => <div data-testid="mock-stack">{children}</div>,
  Typography: ({ children }: { children: ReactNode }) => (
    <div data-testid="mock-typography">{children}</div>
  ),
  Badge: () => <div />,
}));

// Test suite for PackageCard component
describe('PackageCard component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const props = {
    icon: 'Exit' as IconType,
    title: 'Mock Title',
    summary: 'Mock Summary',
    badge: 'experimental' as PackageBadge,
  };

  // Test case: Renders component children
  it('renders icon, title, and summary correctly', () => {
    render(<PackageCard {...props} />);
    expect(screen.getByTestId('mock-icon')).toHaveTextContent('Exit');
    expect(screen.getByText('Mock Title')).toBeInTheDocument();
    expect(screen.getByText('Mock Summary')).toBeInTheDocument();
  });
});
