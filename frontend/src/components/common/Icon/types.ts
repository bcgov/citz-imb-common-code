import { CSSProperties } from 'react';

export type IconType = 'Authenticate' | 'Exit' | 'JSON';

export type IconProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  icon: IconType;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: 'dark' | 'white' | 'grey' | 'blue';
  margin?: string | number;
  additionalStyles?: CSSProperties;
};
