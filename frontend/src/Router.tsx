import { RootLayout } from 'components';
import { PackageType, packages } from 'constants/packages';
import Landing from 'pages/Landing';
import { NotFound } from 'pages/NotFound';
import PackagePage from 'pages/Package';
import { createBrowserRouter } from 'react-router-dom';

const packageLoader = (): PackageType[] => packages;

const packageRoutes = packages.map((pkg) => ({
  path: pkg.pageRoute,
  element: <PackagePage repo={pkg.repo} title={pkg.title} summary={pkg.details} />,
}));

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    loader: packageLoader,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        loader: packageLoader,
        element: <Landing />,
      },
      ...packageRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes);
