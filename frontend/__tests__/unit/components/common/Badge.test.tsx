import { render } from '@testing-library/react';
import { Badge } from '@/components';

// Test suite for Badge component
describe('Badge component', () => {
  // Test case: Renders badge with tooltip
  it('renders badge with tooltip', () => {
    // Mock props
    const mockProps = {
      text: 'Test Badge',
      tooltip: 'This is a tooltip',
    };

    // Render Badge component with mock props
    const { getByText } = render(<Badge {...mockProps} />);

    // Get badge element
    const badgeElement = getByText('Test Badge');

    // Expect tooltip to be present in title attribute
    expect(badgeElement).toHaveAttribute('title', 'This is a tooltip');
  });
});
