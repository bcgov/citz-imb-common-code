import { Breadcrumbs, Spinner } from 'components';
import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

// Lazy loaded pages.
const Pages = {
  Landing: lazy(() => import('pages/Landing')),
  Package: lazy(() => import('pages/Package')),
};

const Router = () => {
  return (
    <>
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
    </>
  );
};

export default Router;
