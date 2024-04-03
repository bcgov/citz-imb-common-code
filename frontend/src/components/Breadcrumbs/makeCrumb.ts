import { CrumbProperty } from './types';

export const makeCrumb = (
  crumb: string,
  index: number,
  myPath: string,
): CrumbProperty | undefined => {
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
