import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
