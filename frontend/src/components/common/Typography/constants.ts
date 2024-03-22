import { TypographyProps } from './types';

export const FONT_SIZES: Record<Exclude<TypographyProps['size'], undefined>, string | number> = {
  'x-small': '0.7em',
  small: '0.85em',
  medium: '1em',
  large: '1.15em',
  'x-large': '1.3em',
};

export const COLORS: Record<Exclude<TypographyProps['color'], undefined>, string> = {
  dark: 'var(--text-color)',
  white: 'var(--white)',
  blue: 'var(--bcgov-light-blue)',
};

export const PROP_DEFAULTS: Pick<
  TypographyProps,
  'size' | 'align' | 'color' | 'bold' | 'textTransform' | 'textDecoration'
> = {
  size: 'medium',
  align: 'left',
  color: 'dark',
  bold: false,
  textTransform: 'none',
  textDecoration: 'none',
};
