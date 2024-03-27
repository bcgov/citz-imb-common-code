import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { endpoints } from './utils';
import { Button, Header } from '@bcgov/design-system-react-components';
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { Spinner } from 'components/common';

// Lazy loaded pages.
const Pages = {
  Landing: lazy(() => import('pages/Landing')),
};

const AppRouter = () => {
  const { isAuthenticated, login, logout } = useKeycloak();

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
