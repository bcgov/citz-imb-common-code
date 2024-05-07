import { render, screen } from '@testing-library/react';
import { Heading } from '@/components';

// Test suite for Heading component
describe('Heading component', () => {
  // Test case: Ensure that the Heading component renders the provided children
  it('renders children', () => {
    render(<Heading>Hello World</Heading>);
    // Check if the text "Hello World" is present in the document
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  // Test case: Ensure that the Heading component renders with an overline
  it('renders with overline', () => {
    render(<Heading overline>Hello World</Heading>);
    // Check if the overline element is present in the document
    expect(screen.getByTestId('heading-overline')).toBeInTheDocument();
  });

  // Test case: Ensure that the Heading component renders with a divider
  it('renders with divider', () => {
    render(<Heading divider>Hello World</Heading>);
    // Check if the divider element is present in the document
    expect(screen.getByTestId('heading-divider')).toBeInTheDocument();
  });

  // Test case: Ensure that the Heading component applies additional CSS class names
  it('applies additional CSS class names', () => {
    render(<Heading className="custom-class">Hello World</Heading>);
    const heading = screen.getByText('Hello World');
    // Check if the heading element has the custom-class class
    expect(heading).toHaveClass('custom-class');
  });

  // Test case: Ensure that the Heading component applies additional styles
  it('applies additional styles', () => {
    render(<Heading additionalStyles={{ color: 'red' }}>Hello World</Heading>);
    const heading = screen.getByText('Hello World');
    // Check if the heading element has the color style set to red
    expect(heading).toHaveStyle('color: red');
  });
});
