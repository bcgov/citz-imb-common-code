import './styles.css';
import { Greeting, PackageCard } from 'src/components';
import { PackageType } from 'src/constants/packages';
import { Link, useLoaderData } from 'react-router-dom';

const Landing = () => {
  const packages = useLoaderData() as PackageType[];

  return (
    <>
      <Greeting />
      <div className="responsiveGridContainer">
        {packages.map((pkg) => (
          <Link key={pkg.title} to={pkg.pageRoute} style={{ textDecoration: 'none' }}>
            <PackageCard icon={pkg.iconType} title={pkg.title} summary={pkg.summary} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Landing;
