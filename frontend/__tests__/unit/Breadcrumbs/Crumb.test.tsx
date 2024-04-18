import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Crumb } from 'components/Breadcrumbs/Crumb';

describe('Crumb', () => {
  const style = {
    div: {},
    ul: {},
    li: { color: 'red' },
    a: { color: 'blue' },
    current: { color: 'green' },
  };

  it('renders the current crumb without a link', () => {
    render(
      <MemoryRouter>
        <Crumb pathname="/current" crumb={{ path: '/current', label: 'Current' }} style={style} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Current')).toBeInTheDocument();
    expect(screen.getByText('Current')).toHaveStyle('color: green');
  });

  it('renders a non-current crumb with a link', () => {
    render(
      <MemoryRouter>
        <Crumb pathname="/current" crumb={{ path: '/other', label: 'Other' }} style={style} />
      </MemoryRouter>,
    );

    expect(screen.getByText('Other')).toBeInTheDocument();
    expect(screen.getByText('Other')).toHaveStyle('color: blue');
  });
});
