/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { ClickableCard, PageLayout, Stack, Typography } from 'components/common';

const Landing = () => {
  return (
    <PageLayout>
      <Stack gap="20px">
        <ClickableCard height="125px">
          <Stack direction="column">
            <Typography size="large" color="blue" bold>
              SSO React
            </Typography>
            <Typography size="small">
              Npm package that offers an integration solution for React applications requiring
              authentication through the B.C. government's Single Sign-On SSO service.
            </Typography>
          </Stack>
        </ClickableCard>
        <ClickableCard height="125px">
          <Stack direction="column">
            <Typography size="large" color="blue" bold>
              SSO Express
            </Typography>
            <Typography size="small">
              Npm package that offers an integration solution for Express applications requiring
              authentication through the B.C. government's Single Sign-On SSO service.
            </Typography>
          </Stack>
        </ClickableCard>
      </Stack>
    </PageLayout>
  );
};

export default Landing;
