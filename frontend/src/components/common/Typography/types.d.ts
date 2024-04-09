import { CSSProperties, ReactNode } from 'react';

export type TypographyProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  align?: 'left' | 'right' | 'center';
  color?: 'dark' | 'white' | 'blue';
  bold?: boolean;
  lineHeight?: string | number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  letterSpacing?: string | number;
  display?: 'block' | 'inline' | 'inline-block' | 'flex';
  margin?: string | number;
  padding?: string | number;
  additionalStyles?: CSSProperties;
};
