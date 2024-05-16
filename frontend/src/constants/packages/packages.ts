import { PackageType } from './types';

export const packages: PackageType[] = [
  {
    repo: 'citz-imb-sso-react',
    title: 'SSO React',
    iconType: 'Authenticate',
    pageRoute: 'sso-react',
    section: 'Single Sign-On',
    badge: 'experimental',
    summary:
      "An npm package that offers an integration solution for connecting React applications requiring authentication to the B.C. government's Single Sign-On (CSS) service.",
    details:
      "This npm package offers an integration solution for connecting React applications requiring authentication to the B.C. government's Single Sign-On (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their React applications to meet B.C. government security standards.",
  },
  {
    repo: 'citz-imb-sso-express',
    title: 'SSO Express',
    iconType: 'Authenticate',
    pageRoute: 'sso-express',
    section: 'Single Sign-On',
    badge: 'experimental',
    summary:
      "An npm package that offers an integration solution for connecting Express applications requiring authentication to the B.C. government's Single Sign-On (CSS) service.",
    details:
      "This npm package offers an integration solution for connecting Express applications requiring authentication to the B.C. government's Single Sign-On (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their Express applications to meet B.C. government security standards.",
  },
  {
    repo: 'citz-imb-sso-css-api',
    title: 'SSO CSS API',
    iconType: 'JSON',
    pageRoute: 'sso-css-api',
    section: 'Single Sign-On',
    badge: 'experimental',
    summary:
      'An npm package that offers the Common Hosted Single Sign-on API Account as functions, allowing SSO management through code instead of through the dashboard.',
    details:
      "This npm package offers the CSS (Common Hosted Single Sign-on) API Account functionality through easy to use functions in your NodeJS application. The CSS API Account is part of the B.C. government's Single Sign-On SSO (CSS) service and is used to manage your SSO integrations through code instead of through the dashboard. This can be used to add or remove user roles and much more. Endpoints in the CSS API are offered as JavaScript functions in this package.",
  },
];
