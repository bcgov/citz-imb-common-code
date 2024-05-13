import { render } from '@testing-library/react';
import { Section } from '@/components';

// Test suite for Section component
describe('Section component', () => {
  // Test case: Renders Section component with title and children
  it('renders Section component with title and children', () => {
    const title = 'Section Title';
    const children = <div>Section Content</div>;
    const { getByText, getByLabelText } = render(
      <Section title={title} ariaLabel="Section">
        {children}
      </Section>,
    );

    // Check if Section component is rendered with correct title
    const sectionTitle = getByText(title);
    expect(sectionTitle).toBeInTheDocument();

    // Check if Section component is rendered with correct aria-label
    const section = getByLabelText('Section');
    expect(section).toBeInTheDocument();

    // Check if Section component is rendered with correct children
    const sectionContent = getByText('Section Content');
    expect(sectionContent).toBeInTheDocument();
  });
});
