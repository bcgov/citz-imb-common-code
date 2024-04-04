import { useSSO } from '@bcgov/citz-imb-sso-react';
import { Card, Icon, Stack, Typography } from 'components';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { user, isAuthenticated } = useSSO();
  const navigate = useNavigate();

  // Function to generate greeting based on time of day
  const getTimeBasedGreeting = (): string => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning'; // From 0:00 (midnight) to 11:59
    if (hour < 18) return 'Good afternoon'; // From 12:00 (noon) to 17:59 [5:59pm]
    return 'Good evening'; // From 18:00 [6:00pm] to 23:59 [11:59pm]
  };

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
      <Typography size="large" margin="25px 0 25px 0">
        Browse our code offerings below and click on one for more details.
      </Typography>
      <Stack gap="20px">
        <Card onClick={() => navigate('/sso-react')}>
          <Stack>
            <Icon icon="Authenticate" margin="0 8px 0 0" />
            <Stack direction="column">
              <Typography size="large" color="blue" bold>
                SSO React
              </Typography>
              <Typography size="small">
                An npm package that offers an integration solution for React applications requiring
                authentication through the B.C. government&apos;s Single Sign-On SSO service.
              </Typography>
            </Stack>
          </Stack>
        </Card>
        <Card onClick={() => navigate('/sso-express')}>
          <Stack>
            <Icon icon="Authenticate" margin="0 8px 0 0" />
            <Stack direction="column">
              <Typography size="large" color="blue" bold>
                SSO Express
              </Typography>
              <Typography size="small">
                An npm package that offers an integration solution for Express applications
                requiring authentication through the B.C. government&apos;s Single Sign-On SSO
                service.
              </Typography>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </>
  );
};

export default Landing;
