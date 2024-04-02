import { PageLayout } from 'components/common';
import { GitHubIssues } from 'components/github';

type PackageProps = {
  repo: string;
};

const Package = (props: PackageProps) => {
  const { repo } = props;

  return (
    <PageLayout>
      <GitHubIssues repo={repo} />
    </PageLayout>
  );
};

export default Package;
