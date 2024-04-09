import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Header } from '@bcgov/design-system-react-components';
import { AuthButtons, PageLayout } from 'components';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const AppRouter = () => {
  const { isAuthenticated, login, logout } = useSSO();

  const loginHandler = () => login({ idpHint: 'idir' });

  return (
    <>
      <Header title="CITZ IMB Common Code">
        <AuthButtons isAuthenticated={isAuthenticated} login={loginHandler} logout={logout} />
      </Header>
      <PageLayout>
        <RouterProvider router={router} />
      </PageLayout>
    </>
  );
};

export default AppRouter;
