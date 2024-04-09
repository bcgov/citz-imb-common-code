import { useDynamicStyles } from 'hooks';
import { Crumb } from './Crumb';
import { makeCrumb } from './makeCrumb';
import { styleMapper } from './styleMapper';
import { BreadCrumbProps, BreadCrumbStyles, CrumbProperty } from './types';

export const Breadcrumbs = (props: BreadCrumbProps) => {
  const { pathname } = props;

  const styles = useDynamicStyles(props, styleMapper) as BreadCrumbStyles;

  if (pathname === '/') return null;

  const crumbs: CrumbProperty[] = pathname
    .split('/')
    .map((crumb, index) => makeCrumb(crumb, index, pathname))
    .filter((crumb) => crumb !== undefined) as CrumbProperty[];

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
