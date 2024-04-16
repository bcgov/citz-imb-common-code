import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
