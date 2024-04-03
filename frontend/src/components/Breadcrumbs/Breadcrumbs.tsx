import { makeCrumb } from './makeCrumb';
import { BreadCrumbProps, BreadCrumbStyles, CrumbProperty } from './types';
import { styleMapper } from './styleMapper';
import { useDynamicStyles } from 'hooks';
import { Crumb } from './Crumb';

export const Breadcrumbs = (props: BreadCrumbProps) => {
  console.log('Breadcrumbs', props);
  const { pathname } = props;

  const styles = useDynamicStyles(props, styleMapper) as BreadCrumbStyles;

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
