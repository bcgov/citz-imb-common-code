import { Breadcrumbs } from 'components';
import { render } from '@testing-library/react';

describe('Breadcrumbs', () => {
  describe('when pathname is "/"', () => {
    it('should render a single link to the home page', () => {
      const element = render(<Breadcrumbs pathname="/" labels="" />);
      const crumbItems = element.container.querySelectorAll('li');

      expect(crumbItems.length).toBe(1);
      expect(crumbItems[0].childNodes[0].textContent).toBe('Home');
    });
  });

  describe('when pathname is "/page"', () => {
    it('should render a two links to home & page', () => {
      const element = render(<Breadcrumbs pathname="/page" labels="/Page" />);
      const crumbItems = element.container.querySelectorAll('li');

      expect(crumbItems.length).toBe(2);
      expect(crumbItems[0].childNodes[0].textContent).toBe('Home');

      const crumbLink = crumbItems[0].querySelector('a');
      expect(crumbLink?.getAttribute('href')).toBe('/');
      expect(crumbItems[1].childNodes[0].textContent).toBe('Page');
    });
  });
});
