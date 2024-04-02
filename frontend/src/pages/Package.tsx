import { PageLayout } from 'components/common';
import { GitHubIssues } from 'components/github';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from 'utils';

type PackageProps = {
  repo: string;
};

const Package = (props: PackageProps) => {
  const { repo } = props;

  const [issues, setIssues] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINTS.GITHUB_ISSUES(repo, 'open'));
      const issues = await response.json();
      setIssues(issues);
    })();
  }, []);

  return (
    <PageLayout>
      <GitHubIssues issues={issues} />
    </PageLayout>
  );
};

export default Package;
