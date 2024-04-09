import { Greeting, IconProps, PackageCard, Stack } from 'components';
import { Link } from 'react-router-dom';
import packages from '../packages.json';

const Landing = () => {
  return (
    <>
      <Greeting />
      <Stack gap="20px">
        {packages.map((pkg) => (
          <Link key={pkg.title} to={pkg.pageRoute} style={{ textDecoration: 'none' }}>
            <PackageCard
              icon={pkg.icon as IconProps['icon']}
              title={pkg.title}
              pageRoute={pkg.pageRoute}
              summary={pkg.summary}
            />
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Landing;
