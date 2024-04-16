import { Button } from '@bcgov/design-system-react-components';
import { AuthButtonProps } from './types';

export const AuthButton = (props: AuthButtonProps) => {
  const { login, logout, isAuthenticated } = props;

  if (isAuthenticated)
    return (
      <Button variant="secondary" onPress={() => logout()}>
        LOGOUT
      </Button>
    );

  return (
    <Button variant="secondary" onPress={() => login()}>
      LOGIN WITH IDIR
    </Button>
  );
};
