import { RootLayout } from 'src/components';
import { PackageType, packages } from 'src/constants/packages';
import Landing from '@/pages/Landing';
import { NotFound } from 'src/pages/NotFound';
import PackagePage from 'src/pages/Package';
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
