import { PACKAGE_BADGE_COLORS, PACKAGE_BADGE_TOOLTIPS, PackageBadge } from '@/constants';
import { Button } from '@bcgov/design-system-react-components';
import bugReportIcon from 'src/assets/bug-report.svg';
import featureRequestIcon from 'src/assets/feature-request.svg';
import exchangeLabIcon from 'src/assets/exchange-lab-icon.svg';
import githubIcon from 'src/assets/github-icon.png';
import npmIcon from 'src/assets/npm-icon.webp';
import { Badge, GitHubTabs, Heading, Stack, Typography } from 'src/components';

type PackageProps = {
  repo: string;
  title: string;
  summary: string;
  badge: PackageBadge;
  documentationLink: string;
};

export const Package = (props: PackageProps) => {
  const { repo, title, summary, badge, documentationLink } = props;

  // On press events.
  const openBugReportInNewTab = () =>
    window.open(
      `https://github.com/bcgov/${repo}/issues/new?assignees=&labels=bug&projects=&template=bug_report.md&title=Bug%3A+`,
      '_blank',
    );
  const openFeatureRequestInNewTab = () =>
    window.open(
      `https://github.com/bcgov/${repo}/issues/new?assignees=&labels=&projects=&template=feature_request.md&title=Request%3A+`,
      '_blank',
    );
  const openGitHubRepoInNewTab = () => window.open(`https://github.com/bcgov/${repo}`, '_blank');
  const openNPMInNewTab = () =>
    window.open(`https://www.npmjs.com/package/@bcgov/${repo}`, '_blank');
  const openDocsInNewTab = () => window.open(documentationLink, '_blank');

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
        {/* BUG REPORT LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src={bugReportIcon} alt="Bug Report" width="35px" height="35px" />
          <Button variant="link" onPress={() => openBugReportInNewTab()}>
            Bug Report
          </Button>
        </Stack>
        {/* FEATURE REQUEST LINK */}
        <Stack gap="0" additionalStyles={{ alignItems: 'center' }}>
          <img src={featureRequestIcon} alt="Feature Request" width="30px" height="30px" />
          <Button variant="link" onPress={() => openFeatureRequestInNewTab()}>
            Feature Request
          </Button>
        </Stack>
      </Stack>
      <br />
      <GitHubTabs repo={repo} />
    </>
  );
};
