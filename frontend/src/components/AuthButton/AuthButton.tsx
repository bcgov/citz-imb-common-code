import { Button } from '@bcgov/design-system-react-components';
import { useSSO } from '@bcgov/citz-imb-sso-react';

export const AuthButton = () => {
  const { isAuthenticated, login, logout } = useSSO();

  if (isAuthenticated)
    return (
      <Button variant="secondary" onPress={() => logout()}>
        LOGOUT
      </Button>
    );

  return (
    <Button variant="secondary" onPress={() => login({ idpHint: 'idir' })}>
      LOGIN WITH IDIR
    </Button>
  );
};
