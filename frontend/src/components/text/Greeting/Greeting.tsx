import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Typography } from 'components';
import { getTimeBasedGreeting } from 'utils';

export const Greeting = () => {
  const { user, isAuthenticated } = useSSO();

  return (
    <>
      {isAuthenticated && (
        <>
          <Typography display="flex" size="large" margin="20px 0 5px 0">
            {getTimeBasedGreeting()}&nbsp;
            <Typography color="blue" bold>
              {user?.first_name}
            </Typography>
            !
          </Typography>
        </>
      )}
      <Typography size="large" margin="0 0 25px 0">
        Browse our code offerings below and click on one for more details.
      </Typography>
    </>
  );
};
