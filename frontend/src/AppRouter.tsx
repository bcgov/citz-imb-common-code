import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ENDPOINTS } from './utils';
import { Button, Header } from '@bcgov/design-system-react-components';
import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Spinner } from 'components/common';

// Lazy loaded pages.
const Pages = {
  Landing: lazy(() => import('pages/Landing')),
  Package: lazy(() => import('pages/Package')),
};

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
          <Button variant="secondary" onPress={() => login({ idpHint: 'idir' })}>
            LOGIN WITH IDIR
          </Button>
        )}
      </Header>
      <Router>
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
          {/* SSO React Package */}
          <Route
            path="/sso-react"
            element={
              <Suspense fallback={<Spinner />}>
                <Pages.Package repo="citz-imb-sso-react" />
              </Suspense>
            }
          />
          {/* SSO Express Package */}
          <Route
            path="/sso-express"
            element={
              <Suspense fallback={<Spinner />}>
                <Pages.Package repo="citz-imb-sso-express" />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
