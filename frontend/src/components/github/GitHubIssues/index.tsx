import { memo, useEffect, useState } from 'react';
import { GitHubIssue, GitHubIssuesProps } from './types';
import { SectionCard, Spinner, Typography } from 'components/common';
import { IssueCardProps } from '../IssueCard/types';
import { IssueCard } from '../IssueCard';
import { ENDPOINTS } from 'utils';

const GitHubIssuesComponent = (props: GitHubIssuesProps) => {
  const { repo } = props;

  const [issues, setIssues] = useState<GitHubIssue[] | undefined>();

  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINTS.GITHUB_ISSUES(repo, 'open'));
      const issues = await response.json();
      setIssues(issues);
    })();
  }, []);

  // Component to render a list of GitHub issues using IssueCard components
  const IssuesList = () => {
    // Map each GitHub issue to an IssueCard component
    const renderedIssues = issues?.map((issue, index) => {
      // Transform GitHub issue object into props for IssueCard component
      const issueCardProps: IssueCardProps = {
        title: issue.title,
        issueNumber: issue.number,
        url: issue.url,
        createdAt: issue.created_at,
        updatedAt: issue.updated_at,
        avatarURL: issue.user.avatar_url,
        author: issue.user.login,
        authorURL: issue.user.url,
        commentCount: issue.comments,
        likeCount: issue.reactions['+1'],
        dislikeCount: issue.reactions['-1'],
        laughCount: issue.reactions.laugh,
        hoorayCount: issue.reactions.hooray,
        confusedCount: issue.reactions.confused,
        heartCount: issue.reactions.heart,
        rocketCount: issue.reactions.rocket,
        eyesCount: issue.reactions.eyes,
        // Set firstIssue prop for the first issue
        firstIssue: index === 0,
        // Set lastIssue prop for the last issue
        lastIssue: index === issues.length - 1,
        // Shade every second issue
        shaded: index % 2 !== 0,
      };

      // Return an IssueCard component with the props for the current GitHub issue
      return <IssueCard key={issue.number} {...issueCardProps} />;
    });

    // Render the list of IssueCard components
    return <div>{renderedIssues}</div>;
  };

  return (
    <SectionCard
      bodyPadding="0"
      title={
        <Typography bold size="small">
          GitHub Open Issues
        </Typography>
      }
    >
      {issues ? (
        issues.length > 0 ? (
          <IssuesList />
        ) : (
          <Typography align="center" padding="20px">
            No open issues.
          </Typography>
        )
      ) : (
        <Spinner height="100px" />
      )}
    </SectionCard>
  );
};

/**
 * Displays github issue details.
 * @param {GitHubIssuesProps} props - Properties are shown below.
 * @property {GitHubIssue[]} [issues] - The github issues to display.
 */
export const GitHubIssues = memo(GitHubIssuesComponent);
