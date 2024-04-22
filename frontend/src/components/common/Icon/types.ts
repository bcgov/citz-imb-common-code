import { CSSProperties } from 'react';

export type IconProps = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  icon: 'Authenticate' | 'Exit' | 'JSON';
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  color?: 'dark' | 'white' | 'grey' | 'blue';
  margin?: string | number;
  additionalStyles?: CSSProperties;
};
