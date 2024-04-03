import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Button, Header } from '@bcgov/design-system-react-components';
import { Breadcrumbs, Spinner } from 'components';
import { lazy, Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { endpoints } from 'utils';

// Lazy loaded pages.
const Pages = {
  Landing: lazy(() => import('pages/Landing')),
};

const AppRouter = () => {
  const { isAuthenticated, login, logout } = useSSO();

  // Load config when origin changes.
  useEffect(() => {
    (async () => {
      const response = await fetch(endpoints.config);
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
          <Button variant="secondary" onPress={() => login({ idpHint: 'idir' })}>
            LOGIN WITH IDIR
          </Button>
        )}
      </Header>
      <Router>
        <Breadcrumbs pathname={window.location.pathname} />
        <Routes>
          {/* LANDING PAGE */}
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Pages.Landing />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
