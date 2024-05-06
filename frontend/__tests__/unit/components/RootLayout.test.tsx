import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { RootLayout } from '@/components';

// Mock react router
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(() => ({ pathname: '/test' })),
  useLoaderData: jest.fn(() => [{ pageRoute: 'test', title: 'Test' }]),
  Outlet: () => <div data-testid="mock-outlet" />,
}));

// Mock components
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Breadcrumbs: () => <div data-testid="mock-breadcrumbs" />,
  AuthButton: () => <div data-testid="mock-authbutton" />,
}));

// Test suite for RootLayout component
describe('RootLayout component', () => {
  test('renders header with title and AuthButton', () => {
    render(
      <MemoryRouter>
        <RootLayout />
      </MemoryRouter>,
    );

    // Assert header title
    expect(screen.getByText('CITZ IMB Common Code')).toBeInTheDocument();
    // Assert presence of AuthButton
    expect(screen.getByTestId('mock-authbutton')).toBeInTheDocument();
  });

  test('renders Breadcrumbs and Outlet', () => {
    render(
      <MemoryRouter initialEntries={['/test']}>
        <RootLayout />
      </MemoryRouter>,
    );

    // Assert presence of Breadcrumbs
    expect(screen.getByTestId('mock-breadcrumbs')).toBeInTheDocument();
    // Assert presence of Outlet
    expect(screen.getByTestId('mock-outlet')).toBeInTheDocument();
  });
});
