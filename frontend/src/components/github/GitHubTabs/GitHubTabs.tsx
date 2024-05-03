import { Tabs, GitHubIssues } from 'src/components';
import { memo } from 'react';
import { GitHubTabsProps } from './types';

const GitHubTabsComponent = (props: GitHubTabsProps) => {
  const { repo } = props;

  return (
    <Tabs
      currentTabId="github-issues-tab"
      tabs={[{ id: 'github-issues-tab', title: 'Open Issues' }]}
    >
      <GitHubIssues repo={repo} id="github-issues-tab" />
    </Tabs>
  );
};

/**
 * Displays github issue and pull request details.
 * @param {GitHubTabsProps} props - Properties are shown below.
 * @property {string} repo - The name of the GitHub repo to query.
 */
export const GitHubTabs = memo(GitHubTabsComponent);
