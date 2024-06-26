import { CSSProperties, ReactNode } from 'react';

export type StackProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: string | number;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  spaceBetween?: boolean;
  spaceAround?: boolean;
  spaceEvenly?: boolean;
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  additionalStyles?: CSSProperties;
};
