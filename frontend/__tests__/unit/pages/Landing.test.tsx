/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLoaderData } from 'react-router-dom';
import { packages } from '@/constants';
import { Landing } from '@/pages/Landing';
import { ReactNode } from 'react';

// Mock the useLoaderData hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLoaderData: jest.fn(),
}));

// Mock components
jest.mock('@/components', () => ({
  Greeting: () => <div data-testid="greeting-message" />,
  PackageCard: ({ title }: { title: string }) => <div>{title}</div>,
  Section: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

// Test suite for Landing page
describe('Landing page', () => {
  beforeEach(() => {
    (useLoaderData as jest.Mock).mockReturnValue(packages);
  });

  it('renders greeting and package cards', () => {
    // Mock useSSO hook
    jest.spyOn(require('@bcgov/citz-imb-sso-react'), 'useSSO').mockReturnValue({
      isAuthenticated: true,
      user: { first_name: 'John' },
    });

    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>,
    );

    // Assert that the greeting is rendered
    const greetingElement = screen.getByTestId('greeting-message');
    expect(greetingElement).toBeInTheDocument();

    // Assert that each package card is rendered with correct title, summary, and link
    packages.forEach((pkg) => {
      const packageTitle = screen.getByText(pkg.title);
      expect(packageTitle).toBeInTheDocument();
    });
  });
});
