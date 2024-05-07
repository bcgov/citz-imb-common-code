import { render, screen } from '@testing-library/react';
import { Spinner } from '@/components';

// Test suite for Spinner component
describe('Spinner component', () => {
  // Test case: Ensure that the Spinner component renders with the correct styles
  it('renders with correct styles', () => {
    // Mock props for the Spinner component
    const spinnerProps = {}; // Empty props
    // Render the Spinner component with the mock props
    render(<Spinner {...spinnerProps} />);
    // Get the spinner element
    const spinnerElement = screen.getByTestId('spinner');
    // Check if the spinner element has the correct styles applied
    expect(spinnerElement).toHaveStyle(`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
    `);
  });

  // Test case: Ensure that the Spinner component renders with the correct styles, with height prop
  it('renders with correct styles with height prop', () => {
    // Mock props for the Spinner component
    const spinnerProps = {
      height: '50px', // Mock height
    };
    // Render the Spinner component with the mock props
    render(<Spinner {...spinnerProps} />);
    // Get the spinner element
    const spinnerElement = screen.getByTestId('spinner');
    // Check if the spinner element has the correct styles applied
    expect(spinnerElement).toHaveStyle(`
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 50px;
    `);
  });
});
