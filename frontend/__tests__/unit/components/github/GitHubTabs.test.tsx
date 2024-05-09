import { render } from '@testing-library/react';
import { GitHubTabs } from '@/components';
import { ReactNode } from 'react';

// Mock spinner
jest.mock('@/components', () => ({
  ...jest.requireActual('@/components'),
  Tabs: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  GitHubIssues: ({ repo, id }: { repo: string; id: string }) => <div data-testid={id}>{repo}</div>,
}));

// Test suite for GitHubTabs component
describe('GitHubTabs component', () => {
  // Test case: Renders GitHubTabs with GitHubIssues component
  it('renders GitHubTabs with GitHubIssues component', () => {
    const repo = 'example/repo';
    const { getByTestId } = render(<GitHubTabs repo={repo} />);

    // Check if GitHubIssues component is rendered inside Tabs component
    const tabsContainer = getByTestId('github-issues-tab');
    expect(tabsContainer).toBeInTheDocument();
  });
});
