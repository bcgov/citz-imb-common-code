import { HeadingProps } from './types';

// Keys in FONT_SIZES are of type HeadingProps['size'], excluding undefined.
export const FONT_SIZES: Record<Exclude<HeadingProps['size'], undefined>, string | number> = {
  'xx-small': '1em',
  'x-small': '1.2em',
  small: '1.45em',
  medium: '1.75em', // 1.75x the size of the default text sizing
  large: '2em',
  'x-large': '2.5em',
};

// Keys in COLORS are of type HeadingProps['color'], excluding undefined.
export const COLORS: Record<Exclude<HeadingProps['color'], undefined>, string> = {
  dark: 'var(--text-color)',
  white: 'var(--white)',
  blue: 'var(--bcgov-light-blue)',
};

// Default values for props of HeadingProps.
export const PROP_DEFAULTS: Pick<
  HeadingProps,
  'size' | 'align' | 'color' | 'bold' | 'textTransform' | 'textDecoration' | 'margin'
> = {
  size: 'medium',
  align: 'left',
  color: 'dark',
  bold: false,
  textTransform: 'none',
  textDecoration: 'none',
  margin: '0 0 15px 0',
};

export const OVERLINE_STYLES = {
  height: '4px',
  width: '35px',
  backgroundColor: 'var(--bcgov-yellow)',
  margin: '0 0 8px 0',
};
