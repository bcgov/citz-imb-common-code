import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { NotFound } from '@/pages/NotFound';

// Test suite for NotFound page
describe('NotFound page', () => {
  it('renders page not found message and link to main page', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>,
    );

    // Assert that the "Page not found!" message is rendered
    const notFoundMessage = screen.getByText('Page not found!');
    expect(notFoundMessage).toBeInTheDocument();

    // Assert that the link to the main page is rendered with correct text and href
    const mainPageLink = screen.getByRole('link', { name: /Go back to the main page/i });
    expect(mainPageLink).toBeInTheDocument();
    expect(mainPageLink).toHaveAttribute('href', '/');
  });
});
