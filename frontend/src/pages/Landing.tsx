import React from 'react';
import { ClickableCard, PageLayout, Stack } from 'components/common';

const Landing = () => {
  return (
    <PageLayout>
      <Stack gap="20px">
        <ClickableCard>SSO React</ClickableCard>
        <ClickableCard>SSO Express</ClickableCard>
      </Stack>
    </PageLayout>
  );
};

export default Landing;
