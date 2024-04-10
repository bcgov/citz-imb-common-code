import { PackageType, packages } from 'packagedata';
import Landing from 'pages/Landing';
import { createBrowserRouter } from 'react-router-dom';
import PackagePage from 'pages/Package';
import { RootLayout } from 'Layouts';
import { NotFound } from 'pages/NotFound';

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
