import { BreadCrumbStyles, CrumbProperty } from './types';

type CrumbProps = {
  pathname: string;
  crumb: CrumbProperty;
  style: BreadCrumbStyles;
};

export const Crumb = (props: CrumbProps) => {
  const { pathname, crumb, style } = props;

  if (crumb.path === pathname)
    return (
      <li style={style.li}>
        <p style={style.a}>{crumb.label}</p>
      </li>
    );

  return (
    <li style={style.li}>
      <a style={style.a} href={crumb.path}>
        {crumb.label}
      </a>
      <span>/</span>
    </li>
  );
};
