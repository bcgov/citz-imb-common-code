import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from '@/components/common/Card';

// Test suite for Card component
describe('Card component', () => {
  // Test case: renders children
  it('renders children correctly', () => {
    render(
      <Card>
        <div data-testid="child">Child Element</div>
      </Card>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  // Test case: applies props correctly
  it('applies provided props correctly', () => {
    render(
      <Card
        id="card"
        className="test-class"
        ariaLabel="test-label"
        onClick={() => {}}
        padding="20px"
        margin="10px"
        borderRadius="8px"
        backgroundColor="red"
        hoverBackgroundColor="blue"
        width="200px"
        height="300px"
        additionalStyles={{ border: '1px solid black' }}
      >
        Content
      </Card>,
    );

    const card = document.querySelector('#card');
    expect(card).toHaveClass('test-class');
    expect(card).toHaveAttribute('aria-label', 'test-label');
    expect(card).toHaveStyle('padding: 20px');
    expect(card).toHaveStyle('margin: 10px');
    expect(card).toHaveStyle('border-radius: 8px');
    expect(card).toHaveStyle('background-color: red');
    expect(card).toHaveStyle('width: 200px');
    expect(card).toHaveStyle('height: 300px');
    expect(card).toHaveStyle('border: 1px solid black');
  });

  // Test case: handles mouse events
  it('handles mouse events correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Card id="card" onClick={onClickMock}>
        Content
      </Card>,
    );
    const card = document.querySelector('#card');
    fireEvent.mouseEnter(card as Element);
    fireEvent.mouseLeave(card as Element);
    fireEvent.click(card as Element);
    expect(onClickMock).toHaveBeenCalled();
  });
});
