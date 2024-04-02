import { PageLayout, Stack } from 'components/common';
import { PackageCard } from 'components/cards';
import { Greeting } from 'components/text';

const Landing = () => {
  return (
    <PageLayout>
      <Greeting />
      <Stack gap="20px">
        <PackageCard
          icon="Authenticate"
          title="SSO React"
          pageRoute="/sso-react"
          summary="An npm package that offers an integration solution for React applications requiring
                authentication through the B.C. government's Single Sign-On SSO service."
        />
        <PackageCard
          icon="Authenticate"
          title="SSO Express"
          pageRoute="/sso-express"
          summary="An npm package that offers an integration solution for Express applications requiring
                authentication through the B.C. government's Single Sign-On SSO service."
        />
      </Stack>
    </PageLayout>
  );
};

export default Landing;
