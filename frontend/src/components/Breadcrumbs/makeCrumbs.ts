import { CrumbProperty } from './types';
/**
 * Function that creates an array of objects with the path and label for each path
 *
 * @param pathname a string that represents the current path, delimited by '/'
 * @param labels a string that represents the labels for each path, delimited by '/'
 * @returns an array of objects with the path and label for each path
 */
export const makeCrumbs = (pathname: string, labels: string): CrumbProperty[] => {
  const paths = pathname.split('/');

  const labelsArray = labels.split('/');
  labelsArray[0] = 'Home';

  let currentPath = '';

  const crumbs = paths.map((path, index) => {
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

  return crumbs;
};
