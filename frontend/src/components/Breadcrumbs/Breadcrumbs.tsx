import { Crumb } from './Crumb';
import { makeCrumbs } from './makeCrumbs';
import { BreadCrumbProps } from './types';
import { styles } from './styles';

export const Breadcrumbs = (props: BreadCrumbProps) => {
  const { pathname, labels } = props;

  if (pathname === '/') return null;

  const crumbs = makeCrumbs(pathname, labels);

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
