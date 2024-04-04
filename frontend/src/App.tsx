import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Button, Header } from '@bcgov/design-system-react-components';
import { PageLayout } from 'components';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ENDPOINTS } from './utils';
import Router from './Router';

const AppRouter = () => {
  const { isAuthenticated, login, logout } = useSSO();

  // Load config when origin changes.
  useEffect(() => {
    (async () => {
      const response = await fetch(ENDPOINTS.CONFIG);
      const configuration = await response.json();
      (window as Window).configuration = configuration;
    })();
  }, [window.location.origin]);

  return (
    <>
      <Header title="CITZ IMB Common Code">
        {isAuthenticated ? (
          <Button variant="secondary" onPress={() => logout()}>
            LOGOUT
          </Button>
        ) : (
          <Button variant="secondary" onPress={() => login({ idpHint: 'idir', redirectURL: '/redirect' })}>
            LOGIN WITH IDIR
          </Button>
        )}
      </Header>
      <PageLayout>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PageLayout>
    </>
  );
};

export default AppRouter;
