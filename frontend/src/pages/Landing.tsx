import { Fragment } from 'react';
import { Greeting, PackageCard, Stack } from 'components';
import { PackageType } from 'constants/packages';
import { Link, useLoaderData } from 'react-router-dom';
import { chunkArray } from 'utils';

const Landing = () => {
  const packages = useLoaderData() as PackageType[];

  // Create chunks of 2
  const packageChunks = chunkArray(packages, 2);

  return (
    <>
      <Greeting />
      {packageChunks.map((chunk, index) => (
        <Fragment key={index}>
          <Stack gap="20px">
            {chunk.map((pkg, packageIndex) => (
              <Fragment key={packageIndex}>
                <Link key={pkg.title} to={pkg.pageRoute} style={{ textDecoration: 'none' }}>
                  <PackageCard icon={pkg.iconType} title={pkg.title} summary={pkg.summary} />
                </Link>
                {/* Add space to the stack if the last package is in a stack by itself */}
                {chunk.length === 1 && index === packageChunks.length - 1 && (
                  <div style={{ width: '112%' }} />
                )}
              </Fragment>
            ))}
          </Stack>
          <br />
        </Fragment>
      ))}
    </>
  );
};

export default Landing;
