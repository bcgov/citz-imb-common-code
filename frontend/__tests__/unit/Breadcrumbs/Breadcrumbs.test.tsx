import { render, screen } from '@testing-library/react';
import { Breadcrumbs } from 'components';

describe('Breadcrumbs', () => {
  it('renders breadcrumbs correctly', () => {
    const props = {
      pathname: '/path/to/resource',
      labels: '/Path/To/Resource',
    };

    render(<Breadcrumbs {...props} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Path')).toBeInTheDocument();
    expect(screen.getByText('To')).toBeInTheDocument();
    expect(screen.getByText('Resource')).toBeInTheDocument();
  });

  it('does not render when pathname is /', () => {
    const props = {
      pathname: '/',
      labels: '/',
    };

    const { container } = render(<Breadcrumbs {...props} />);

    expect(container.firstChild).toBeNull();
  });
});
