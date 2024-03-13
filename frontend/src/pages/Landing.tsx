import React from 'react';
import { PageLayout, Stack } from 'components/common';

const Landing = () => {
  return (
    <PageLayout>
      <Stack>
        <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }}></div>
        <div style={{ width: '100%', height: '100px', backgroundColor: 'blue' }}></div>
      </Stack>
    </PageLayout>
  );
};

export default Landing;
