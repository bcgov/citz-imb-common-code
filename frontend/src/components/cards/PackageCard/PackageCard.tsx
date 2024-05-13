import { Badge, Card, Icon, Stack, Typography } from 'src/components';
import { PackageCardProps } from './types';
import { PACKAGE_BADGE_COLORS, PACKAGE_BADGE_TOOLTIPS } from '@/constants';

export const PackageCard = (props: PackageCardProps) => {
  const { icon, title, summary, badge } = props;

  return (
    <Card>
      <Stack>
        <Icon icon={icon} margin="0 8px 0 0" />
        <Stack direction="column">
          <Stack spaceBetween>
            <Typography size="large" color="blue" bold>
              {title}
            </Typography>
            <Badge
              size="small"
              text={badge}
              tooltip={PACKAGE_BADGE_TOOLTIPS[badge]}
              color={PACKAGE_BADGE_COLORS[badge]}
            />
          </Stack>
          <Typography size="small">{summary}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
