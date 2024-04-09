import { createBrowserRouter } from 'react-router-dom';
import packages from './packages.json';
import Landing from 'pages/Landing';
import Package from 'pages/Package';

const packageRoutes = packages.map((pkg) => ({
  path: pkg.pageRoute,
  element: <Package repo={pkg.repo} title={pkg.title} summary={pkg.details} />,
}));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  ...packageRoutes,
]);
