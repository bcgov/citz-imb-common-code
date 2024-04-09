import { Button } from '@bcgov/design-system-react-components';
import { AuthButtonsProps } from './types';

export const AuthButtons = (props: AuthButtonsProps) => {
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
