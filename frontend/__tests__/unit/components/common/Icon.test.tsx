import { render, screen } from '@testing-library/react';
import { Icon, IconProps, IconType } from '@/components';

// Test suite for Icon component
describe('Icon component', () => {
  // Test case: Ensure that the Icon component renders the specified icon
  it('renders the specified icon', () => {
    // Mock props for the Icon component
    const iconProps = {
      icon: 'Authenticate',
      color: 'blue',
    } as IconProps;
    // Render the Icon component with the mock props
    render(<Icon {...iconProps} />);
    // Check if the icon element is present in the document
    expect(screen.getByTestId('icon-authenticate')).toBeInTheDocument();
  });

  // Test case: Ensure that the Icon component applies additional CSS class names
  it('applies additional CSS class names', () => {
    // Mock props for the Icon component with a custom class name
    const iconProps = {
      icon: 'Authenticate' as IconType,
      className: 'custom-class',
    };
    // Render the Icon component with the mock props
    render(<Icon {...iconProps} />);
    // Check if the icon element has the custom-class class
    expect(screen.getByTestId('icon-component')).toHaveClass('custom-class');
  });

  // Test case: Ensure that the Icon component applies additional styles
  it('applies additional styles', () => {
    // Mock props for the Icon component with additional styles
    const iconProps = {
      icon: 'JSON' as IconType,
      additionalStyles: { color: 'red' },
    };
    // Render the Icon component with the mock props
    render(<Icon {...iconProps} />);
    // Check if the icon element has the color style set to red
    expect(screen.getByTestId('icon-component')).toHaveStyle('color: red');
  });
});
