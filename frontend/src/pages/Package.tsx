import { Button } from '@bcgov/design-system-react-components';
import { Heading, PageLayout, Stack, Typography } from 'components/common';
import { GitHubIssues } from 'components/github';

type PackageProps = {
  repo: string;
  title: string;
  summary: string;
};

const Package = (props: PackageProps) => {
  const { repo, title, summary } = props;

  // On press events.
  const openGitHubRepoInNewTab = () => window.open(`https://github.com/bcgov/${repo}`, '_blank');
  const openNPMInNewTab = () =>
    window.open(`https://www.npmjs.com/package/@bcgov/${repo}`, '_blank');
  const openDocsInNewTab = () => window.open(`https://github.com/bcgov/${repo}/wiki`, '_blank');

  return (
    <PageLayout>
      <br />
      <Heading overline size="small" bold>
        {title}
      </Heading>
      <Typography>{summary}</Typography>
      <br />
      <hr />
      <Stack gap="30px">
        {/* GITHUB LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src="src/assets/github-icon.png" alt="GitHub" width="25px" height="25px" />
          <Button variant="link" onPress={() => openGitHubRepoInNewTab()}>
            GitHub Repository
          </Button>
        </Stack>
        {/* NPM LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src="src/assets/npm-icon.webp" alt="GitHub" width="35px" height="35px" />
          <Button variant="link" onPress={() => openNPMInNewTab()}>
            Package on NPM
          </Button>
        </Stack>
        {/* DOCUMENTATION LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src="src/assets/exchange-lab-icon.svg" alt="GitHub" width="25px" height="25px" />
          <Button variant="link" onPress={() => openDocsInNewTab()}>
            Package Documentation
          </Button>
        </Stack>
      </Stack>
      <br />
      <GitHubIssues repo={repo} />
    </PageLayout>
  );
};

export default Package;
