import { SSOProvider } from '@bcgov/citz-imb-sso-react';
import 'css/base.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SSOProvider>
      <RouterProvider router={router} />
    </SSOProvider>
  </React.StrictMode>,
);
