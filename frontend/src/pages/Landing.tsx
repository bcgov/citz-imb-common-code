import { Greeting, PackageCard, Stack } from 'components';
import { PackageType } from 'constants/packages';
import { Link, useLoaderData } from 'react-router-dom';

const Landing = () => {
  const packages = useLoaderData() as PackageType[];

  return (
    <>
      <Greeting />
      <Stack gap="20px">
        {packages.map((pkg) => (
          <Link key={pkg.title} to={pkg.pageRoute} style={{ textDecoration: 'none' }}>
            <PackageCard
              icon={pkg.iconType}
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
