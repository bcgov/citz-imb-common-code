import { SSOProvider } from '@bcgov/citz-imb-sso-react';
import 'css/base.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SSOProvider>
      <App />
    </SSOProvider>
  </React.StrictMode>,
);
