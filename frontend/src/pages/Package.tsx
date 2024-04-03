import { PageLayout, Typography } from 'components/common';
import { GitHubIssues } from 'components/github';

type PackageProps = {
  repo: string;
  summary: string;
};

const Package = (props: PackageProps) => {
  const { repo, summary } = props;

  return (
    <PageLayout>
      <br />
      <Typography>{summary}</Typography>
      <br />
      <hr />
      <br />
      <GitHubIssues repo={repo} />
    </PageLayout>
  );
};

export default Package;
