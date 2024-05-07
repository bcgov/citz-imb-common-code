import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from '@/components';

// Test suite for Modal component
describe('Modal component', () => {
  // Test case: Ensure that the Modal component renders when isOpen is true
  it('renders when isOpen is true', () => {
    // Mock props for the Modal component with isOpen set to true
    const modalProps = {
      title: 'Example Modal',
      isOpen: true,
      onClose: jest.fn(), // Mock onClose function
    };
    // Render the Modal component with the mock props
    render(<Modal {...modalProps}>Modal content</Modal>);
    // Check if the modal element is present in the document
    expect(screen.getByText('Example Modal')).toBeInTheDocument();
  });

  // Test case: Ensure that the Modal component does not render when isOpen is false
  it('does not render when isOpen is false', () => {
    // Mock props for the Modal component with isOpen set to false
    const modalProps = {
      title: 'Example Modal',
      isOpen: false,
      onClose: jest.fn(), // Mock onClose function
    };
    // Render the Modal component with the mock props
    render(<Modal {...modalProps}>Modal content</Modal>);
    // Check if the modal element is not present in the document
    expect(screen.queryByText('Example Modal')).not.toBeInTheDocument();
  });

  // Test case: Ensure that the onClose function is called when the close button is clicked
  it('calls onClose function when close button is clicked', () => {
    // Mock onClose function
    const onCloseMock = jest.fn();
    // Mock props for the Modal component with isOpen set to true and onClose function
    const modalProps = {
      title: 'Example Modal',
      isOpen: true,
      onClose: onCloseMock,
    };
    // Render the Modal component with the mock props
    render(<Modal {...modalProps}>Modal content</Modal>);
    // Click the close button
    fireEvent.click(screen.getByTestId('exit-modal-button'));
    // Check if the onClose function is called
    expect(onCloseMock).toHaveBeenCalled();
  });
});
