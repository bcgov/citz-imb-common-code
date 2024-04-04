import { Card, Icon, Stack, Typography } from 'components/common';
import { PackageCardProps } from './types';
import { useNavigate } from 'react-router-dom';

export const PackageCard = (props: PackageCardProps) => {
  const { icon, title, summary, pageRoute } = props;

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`${pageRoute}`)}>
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
