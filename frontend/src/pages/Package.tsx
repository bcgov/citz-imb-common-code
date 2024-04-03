import { GitHubIssues } from 'components';

type PackageProps = {
  repo: string;
};

const Package = (props: PackageProps) => {
  const { repo } = props;

  return <GitHubIssues repo={repo} />;
};

export default Package;
