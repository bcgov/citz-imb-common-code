import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Button, Header } from '@bcgov/design-system-react-components';
import { Breadcrumbs, PageLayout, Spinner } from 'components';
import { lazy, Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ENDPOINTS } from './utils';

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
      <PageLayout>
        <Breadcrumbs pathname={window.location.pathname} />
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
                  <Pages.Package
                    repo="citz-imb-sso-react"
                    title="SSO React"
                    summary="This npm package offers an integration solution for React applications requiring authentication through the B.C. government's Single Sign-On SSO (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their React applications to meet B.C. government security standards."
                  />
                </Suspense>
              }
            />
            {/* SSO Express Package */}
            <Route
              path="/sso-express"
              element={
                <Suspense fallback={<Spinner />}>
                  <Pages.Package
                    repo="citz-imb-sso-express"
                    title="SSO Express"
                    summary="This npm package offers an integration solution for Express applications requiring authentication through the B.C. government's Single Sign-On SSO (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their Express applications to meet B.C. government security standards."
                  />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </PageLayout>
    </>
  );
};

export default AppRouter;
