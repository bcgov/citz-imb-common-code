import { TypographyProps } from './types';

// Keys in FONT_SIZES are of type TypographyProps['size'], excluding undefined.
export const FONT_SIZES: Record<Exclude<TypographyProps['size'], undefined>, string | number> = {
  'x-small': '0.7em',
  small: '0.85em',
  medium: '1em', // 1x the size of the default text sizing
  large: '1.15em',
  'x-large': '1.3em',
};

// Keys in COLORS are of type TypographyProps['color'], excluding undefined.
export const COLORS: Record<Exclude<TypographyProps['color'], undefined>, string> = {
  dark: 'var(--text-color)',
  white: 'var(--white)',
  blue: 'var(--bcgov-light-blue)',
};

// Default values for props of TypographyProps.
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
