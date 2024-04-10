import { CrumbProperty } from './types';

export const makeCrumbs = (pathname: string, labels: string): CrumbProperty[] => {
  const paths = pathname.split('/');

  const labelsArray = labels.split('/');
  labelsArray[0] = 'Home';

  let currentPath = '';

  const myObjects = paths.map((path, index) => {
    let label;

    if (labelsArray[index] === '' || labelsArray[index] === undefined) {
      label = path;
    } else {
      label = labelsArray[index];
    }
    currentPath += '/' + path;

    return {
      path: currentPath.replace('//', '/'),
      label,
    };
  });
  return myObjects;
};
