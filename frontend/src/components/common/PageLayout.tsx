import { ReactNode } from 'react';

type PageLayoutProps = {
  children: ReactNode;
};

const styles = {
  margin: '20px 14%', // Top/Bottom: 20px, Left/Right: 14% (responsive)
  minHeight: 'calc(100dvh - 105px)', // Header: 65px + Margin: 40px = 105px offset
};

/**
 * Layout for page components.
 * - minimum height is screen size.
 * - margin to keep content in the center of the page.
 */
export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div style={styles}>{children}</div>;
};
