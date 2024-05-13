import { CSSProperties } from 'react';

export type BadgeProps = {
  text: string;
  id?: string;
  className?: string;
  ariaLabel?: string;
  color?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  tooltip?: string;
  padding?: string | number;
  additionalStyles?: CSSProperties;
};
