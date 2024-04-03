import { BreadCrumbProps } from './types';

type crumb = {
  label: string;
  path: string;
};

const makeCrumb = (crumb: string, index: number, myPath: string): crumb | undefined => {
  if (index === 0 && crumb === '') {
    return {
      label: 'Home',
      path: '/',
    };
  }

  if (index !== 0 && crumb === '') {
    return undefined;
  }

  return {
    label: crumb,
    path: myPath.slice(0, myPath.indexOf(crumb) + crumb.length),
  };
};

export const Breadcrumbs = ({ pathname }: BreadCrumbProps) => {
  const myPath = '/page/next/olf/lkj/';

  const crumbs: crumb[] = myPath
    .split('/')
    .map((crumb, index) => makeCrumb(crumb, index, myPath))
    .filter((crumb) => crumb !== undefined) as crumb[];

  console.log('crumbs', crumbs);

  return (
    <ul className="breadcrumbs">
      {crumbs.map((crumb, index) => (
        <li key={index} className="crumb">
          <a className="link" href={crumb.path}>
            {crumb.label}
          </a>
        </li>
      ))}
    </ul>
  );
};
