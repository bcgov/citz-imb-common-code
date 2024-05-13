import { render, fireEvent } from '@testing-library/react';
import { Tabs } from '@/components';

// Test suite for Tabs component
describe('Tabs component', () => {
  const tabs = [
    { id: 'tab1', title: 'Tab 1' },
    { id: 'tab2', title: 'Tab 2' },
    { id: 'tab3', title: 'Tab 3' },
  ];

  // Test case: Renders tabs with correct titles
  it('renders tabs with correct titles', () => {
    const { getByText } = render(
      <Tabs currentTabId="tab1" tabs={tabs}>
        <div id="tab1"></div>
        <div id="tab2"></div>
        <div id="tab3"></div>
      </Tabs>,
    );

    tabs.forEach((tab) => {
      const tabElement = getByText(tab.title);
      expect(tabElement).toBeInTheDocument();
    });
  });

  // Test case: Switches active tab when clicked
  it('switches active tab when clicked', () => {
    const { getByText } = render(
      <Tabs currentTabId="tab1" tabs={tabs}>
        <div id="tab1">Tab1</div>
        <div id="tab2">Tab2</div>
        <div id="tab3">Tab3</div>
      </Tabs>,
    );

    expect(getByText('Tab1')).toBeInTheDocument();
    fireEvent.click(getByText('Tab 2'));
    expect(getByText('Tab2')).toBeInTheDocument();
    fireEvent.click(getByText('Tab 3'));
    expect(getByText('Tab3')).toBeInTheDocument();
  });
});
