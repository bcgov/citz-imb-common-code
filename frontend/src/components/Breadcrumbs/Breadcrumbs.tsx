import { BreadCrumbProps } from './types';

export const Breadcrumbs = (props: BreadCrumbProps) => {
  console.log('Breadcrumb props:', props);

  const pathname = { ...props };

  console.log(pathname);

  // const crumbs = pathname.split('/').filter((crumb: string) => crumb !== '');

  // console.log(crumbs);

  return (
    <ul className="breadcrumbs">
      <li className="crumb">
        <a className="link" href="/">
          Home
        </a>
      </li>
    </ul>
  );
};
