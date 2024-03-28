import { CSSProperties } from 'react';

export type IconProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  icon: 'Authenticate';
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: 'dark' | 'white' | 'blue';
  margin?: string | number;
  additionalStyles?: CSSProperties;
};
