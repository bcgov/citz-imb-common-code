import { CSSProperties } from 'react';

export type Icon = 'Authenticate' | 'Exit' | 'JSON';

export type IconProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  icon: Icon;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: 'dark' | 'white' | 'grey' | 'blue';
  margin?: string | number;
  additionalStyles?: CSSProperties;
};
