import { PackageType } from './types';

export const packages: PackageType[] = [
  {
    repo: 'citz-imb-sso-react',
    title: 'SSO React',
    iconType: 'Authenticate',
    pageRoute: 'sso-react',
    summary:
      "An npm package that offers an integration solution for React applications requiring authentication through the B.C. government's Single Sign-On SSO service.",
    details:
      "This npm package offers an integration solution for React applications requiring authentication through the B.C. government's Single Sign-On SSO (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their React applications to meet B.C. government security standards.",
  },
  {
    repo: 'citz-imb-sso-express',
    title: 'SSO Express',
    iconType: 'Authenticate',
    pageRoute: 'sso-express',
    summary:
      "An npm package that offers an integration solution for Express applications requiring authentication through the B.C. government's Single Sign-On SSO service.",
    details:
      "This npm package offers an integration solution for Express applications requiring authentication through the B.C. government's Single Sign-On SSO (CSS) service. It abstracts the complexity of handling SSO protocols manually. By using this package, developers can quickly implement authentication and authorization in their Express applications to meet B.C. government security standards.",
  },
  {
    repo: 'citz-imb-sso-css-api',
    title: 'SSO CSS API',
    iconType: 'JSON',
    pageRoute: 'sso-css-api',
    summary:
      "An npm package that offers the CSS API Account (from the B.C. government's Single Sign-On SSO service) functionality through easy to use functions in your NodeJS application.",
    details:
      "This npm package offers the CSS API Account functionality through easy to use functions in your NodeJS application. The CSS API Account is part of the B.C. government's Single Sign-On SSO (CSS) service. Endpoints in the CSS API are offered as JavaScript functions in this package.",
  },
];
