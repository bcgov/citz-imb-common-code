import 'css/base.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SSOProvider } from '@bcgov/citz-imb-sso-react';
import AppRouter from 'AppRouter';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SSOProvider>
      <AppRouter />
    </SSOProvider>
  </React.StrictMode>,
);
