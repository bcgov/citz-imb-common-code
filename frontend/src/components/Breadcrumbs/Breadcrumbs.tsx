import { useDynamicStyles } from 'hooks';
import { Crumb } from './Crumb';
import { makeCrumbs } from './makeCrumbs';
import { styleMapper } from './styleMapper';
import { BreadCrumbProps, BreadCrumbStyles } from './types';

export const Breadcrumbs = (props: BreadCrumbProps) => {
  const { pathname, labels } = props;

  if (pathname === '/') return null;

  const crumbs = makeCrumbs(pathname, labels);

  const styles = useDynamicStyles(props, styleMapper) as BreadCrumbStyles;

  return (
    <div style={styles.div}>
      <ul style={styles.ul}>
        {crumbs.map((crumb) => (
          <Crumb key={crumb.label} crumb={crumb} pathname={pathname} style={styles} />
        ))}
      </ul>
    </div>
  );
};
