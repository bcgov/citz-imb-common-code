import { BadgeProps } from './types';

// Keys in FONT_SIZES are of type BadgeProps['size'], excluding undefined.
export const FONT_SIZES: Record<Exclude<BadgeProps['size'], undefined>, string | number> = {
  small: '0.75em',
  medium: '1em',
  large: '1.25em', // 1.25x the size of the default text sizing
};

// Default values for props of BadgeProps.
export const PROP_DEFAULTS: Pick<BadgeProps, 'color' | 'padding' | 'textColor' | 'size'> = {
  color: 'var(--badge)',
  padding: '3px',
  textColor: 'var(--white)',
  size: 'medium',
};
