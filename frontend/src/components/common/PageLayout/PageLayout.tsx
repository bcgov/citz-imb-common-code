import { PageLayoutProps } from './types';
import { styles } from './styles';

/**
 * Layout for page components.
 * - minimum height is screen size.
 * - margin to keep content in the center of the page.
 */
export const PageLayout = (props: PageLayoutProps) => {
  const { children } = props;
  return <div style={styles}>{children}</div>;
};
