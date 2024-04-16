import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Header } from '@bcgov/design-system-react-components';
import { AuthButton } from 'components';
import { Outlet, useLoaderData, useLocation } from 'react-router-dom';
import { styles } from './styles';
import { PackageType } from 'constants/packages';

export const RootLayout = () => {
  const { isAuthenticated, login, logout } = useSSO();

  const { pathname } = useLocation();

  const paths = pathname.split('/');

  const packages = useLoaderData() as PackageType[];

  const labels = paths
    .map((path) => {
      const pkg = packages.find((pkg) => pkg.pageRoute === path);
      return pkg ? pkg.title : path;
    })
    .join('/');

  const loginHandler = () => login({ idpHint: 'idir' });

  return (
    <>
      <Header title="CITZ IMB Common Code">
        <AuthButton isAuthenticated={isAuthenticated} login={loginHandler} logout={logout} />
      </Header>
      <div style={styles}>
        <Outlet />
      </div>
    </>
  );
};
