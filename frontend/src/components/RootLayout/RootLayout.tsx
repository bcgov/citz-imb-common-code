import { Header } from '@bcgov/design-system-react-components';
import { AuthButton, Breadcrumbs } from 'src/components';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { styles } from './styles';
import { PackageType } from 'src/constants/packages';

export const RootLayout = () => {
  const { pathname } = useLocation();

  const paths = pathname.split('/');

  const packages = useLoaderData() as PackageType[];

  const labels = paths
    .map((path: string) => {
      const pkg = packages.find((pkg) => pkg.pageRoute === path);
      return pkg ? pkg.title : path;
    })
    .join('/');

  return (
    <>
      <Header title="CITZ IMB Common Code">
        <AuthButton />
      </Header>
      <div style={styles}>
        <Breadcrumbs pathname={pathname} labels={labels} />
        <Outlet />
      </div>
    </>
  );
};
