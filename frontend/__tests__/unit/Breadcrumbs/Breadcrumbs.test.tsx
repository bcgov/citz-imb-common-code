import { Breadcrumbs } from 'components';
import { render } from '@testing-library/react';

describe('Breadcrumbs', () => {
  describe('when pathname is "/"', () => {
    it('should render a single link to the home page', () => {
      const element = render(<Breadcrumbs pathname="/" />);
      const crumbLinks = element.container.querySelectorAll('.crumb > .link');

      expect(crumbLinks.length).toBe(1);
      expect(crumbLinks[0].childNodes[0].textContent).toBe('Home');
      expect(crumbLinks[0].getAttribute('href')).toBe('/');
    });
  });
});
