import './styles.css';
import { Greeting, Heading, PackageCard, Section } from 'src/components';
import { PackageType } from 'src/constants/packages';
import { Link, useLoaderData } from 'react-router-dom';

export const Landing = () => {
  const packages = useLoaderData() as PackageType[];

  // Group packages by their section
  const groupedPackages: { [key: string]: PackageType[] } = {};
  packages.forEach((pkg) => {
    if (!groupedPackages[pkg.section]) {
      // Create property for section in groupPackages
      groupedPackages[pkg.section] = [];
    }
    groupedPackages[pkg.section].push(pkg);
  });

  return (
    <>
      <Greeting />
      {/* Render each section */}
      {Object.entries(groupedPackages).map(([section, sectionPackages]) => (
        <>
          <Section
            key={section}
            title={
              <Heading size="xx-small" bold>
                {section}
              </Heading>
            }
          >
            <div className="responsiveGridContainer">
              {sectionPackages.map((pkg) => (
                <Link key={pkg.title} to={pkg.pageRoute} style={{ textDecoration: 'none' }}>
                  <PackageCard icon={pkg.iconType} title={pkg.title} summary={pkg.summary} />
                </Link>
              ))}
            </div>
          </Section>
          <br />
        </>
      ))}
    </>
  );
};
