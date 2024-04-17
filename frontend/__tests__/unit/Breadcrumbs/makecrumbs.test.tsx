import { makeCrumbs } from 'components/Breadcrumbs/makeCrumbs';

describe('makeCrumbs', () => {
  it('should return correct crumbs', () => {
    const pathname = '/path/to/resource';
    const labels = '/Path/To/Resource';

    const result = makeCrumbs(pathname, labels);

    expect(result).toEqual([
      { path: '/', label: 'Home' },
      { path: '/path', label: 'Path' },
      { path: '/path/to', label: 'To' },
      { path: '/path/to/resource', label: 'Resource' },
    ]);
  });

  it('should use path as label when no custom label is provided', () => {
    const pathname = '/path/to/resource';
    const labels = '/';

    const result = makeCrumbs(pathname, labels);

    expect(result).toEqual([
      { path: '/', label: 'Home' },
      { path: '/path', label: 'path' },
      { path: '/path/to', label: 'to' },
      { path: '/path/to/resource', label: 'resource' },
    ]);
  });
});
