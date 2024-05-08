import { PACKAGE_BADGE_COLORS, PACKAGE_BADGE_TOOLTIPS } from '@/constants';
import { Button } from '@bcgov/design-system-react-components';
import exchangeLabIcon from 'src/assets/exchange-lab-icon.svg';
import githubIcon from 'src/assets/github-icon.png';
import npmIcon from 'src/assets/npm-icon.webp';
import { Badge, GitHubTabs, Heading, Stack, Typography } from 'src/components';

type PackageProps = {
  repo: string;
  title: string;
  summary: string;
  badge: string;
};

export const Package = (props: PackageProps) => {
  const { repo, title, summary, badge } = props;

  // On press events.
  const openGitHubRepoInNewTab = () => window.open(`https://github.com/bcgov/${repo}`, '_blank');
  const openNPMInNewTab = () =>
    window.open(`https://www.npmjs.com/package/@bcgov/${repo}`, '_blank');
  const openDocsInNewTab = () => window.open(`https://github.com/bcgov/${repo}/wiki`, '_blank');

  return (
    <>
      <br />
      <Stack spaceBetween>
        <Heading overline size="small" bold>
          {title}
        </Heading>
        <Badge
          text={badge}
          tooltip={PACKAGE_BADGE_TOOLTIPS[badge]}
          color={PACKAGE_BADGE_COLORS[badge]}
        />
      </Stack>
      <Typography>{summary}</Typography>
      <br />
      <hr />
      <Stack gap="30px">
        {/* GITHUB LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src={githubIcon} alt="GitHub" width="25px" height="25px" />
          <Button variant="link" onPress={() => openGitHubRepoInNewTab()}>
            GitHub Repository
          </Button>
        </Stack>
        {/* NPM LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src={npmIcon} alt="NPM" width="35px" height="35px" />
          <Button variant="link" onPress={() => openNPMInNewTab()}>
            Package on NPM
          </Button>
        </Stack>
        {/* DOCUMENTATION LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src={exchangeLabIcon} alt="Documentation" width="25px" height="25px" />
          <Button variant="link" onPress={() => openDocsInNewTab()}>
            Package Documentation
          </Button>
        </Stack>
      </Stack>
      <br />
      <GitHubTabs repo={repo} />
    </>
  );
};
