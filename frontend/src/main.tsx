import 'css/base.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { KeycloakProvider } from '@bcgov/citz-imb-kc-react';
import AppRouter from 'AppRouter';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <KeycloakProvider>
      <AppRouter />
    </KeycloakProvider>
  </React.StrictMode>,
);
