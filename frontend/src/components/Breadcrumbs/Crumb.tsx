import { NavLink } from 'react-router-dom';
import { CrumbProps } from './types';

export const Crumb = (props: CrumbProps) => {
  const { pathname, crumb, style } = props;

  if (crumb.path === pathname)
    return (
      <li style={style.li}>
        <p style={style.current}>{crumb.label}</p>
      </li>
    );

  return (
    <li style={style.li}>
      <NavLink style={style.a} to={crumb.path}>
        {crumb.label}
      </NavLink>
      <span>/</span>
    </li>
  );
};
