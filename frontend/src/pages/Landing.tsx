import React from 'react';
import { ClickableCard, PageLayout, Stack, Typography } from 'components/common';

const Landing = () => {
  return (
    <PageLayout>
      <Stack gap="20px">
        <ClickableCard>
          <Typography size="large" color="blue" bold>
            SSO React
          </Typography>
        </ClickableCard>
        <ClickableCard>
          <Typography size="large" color="blue" bold>
            SSO Express
          </Typography>
        </ClickableCard>
      </Stack>
    </PageLayout>
  );
};

export default Landing;
