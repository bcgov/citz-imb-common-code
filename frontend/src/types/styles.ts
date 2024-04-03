import { CSSProperties, MouseEventHandler } from 'react';

export type Styles = {
  id?: string;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  hoverEffects?: boolean;
  padding?: string | number;
  margin?: string | number;
  borderRadius?: string | number;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  width?: string | number;
  height?: string | number;
  additionalStyles?: CSSProperties;
};
