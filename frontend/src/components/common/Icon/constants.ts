import { IconProps } from './types';

// Keys in SIZES are of type IconProps['size'], excluding undefined.
export const SIZES: Record<Exclude<IconProps['size'], undefined>, string | number> = {
  'x-small': '15px',
  small: '30px',
  medium: '50px',
  large: '70px',
  'x-large': '90px',
};

// Keys in COLORS are of type IconProps['color'], excluding undefined.
export const COLORS: Record<Exclude<IconProps['color'], undefined>, string> = {
  dark: 'var(--text-color)',
  white: 'var(--white)',
  grey: 'var(--grey)',
  blue: 'var(--bcgov-light-blue)',
};

// Default values for props of IconProps.
export const PROP_DEFAULTS: Pick<IconProps, 'size' | 'color'> = {
  size: 'medium',
  color: 'dark',
};
