import { Card, Icon, Stack, Typography } from 'src/components';
import { PackageCardProps } from './types';

export const PackageCard = (props: PackageCardProps) => {
  const { icon, title, summary } = props;

  return (
    <Card>
      <Stack>
        <Icon icon={icon} margin="0 8px 0 0" />
        <Stack direction="column">
          <Typography size="large" color="blue" bold>
            {title}
          </Typography>
          <Typography size="small">{summary}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};
