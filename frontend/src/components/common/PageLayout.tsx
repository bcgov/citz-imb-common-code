import React, { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

const styles = {
  margin: '20px 210px',
  minHeight: 'calc(100dvh - 105px)',
};

export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div style={styles}>{children}</div>;
};
