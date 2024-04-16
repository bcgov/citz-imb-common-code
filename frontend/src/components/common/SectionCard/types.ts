import { CSSProperties, ReactNode } from 'react';

export type SectionCardProps = {
  children: ReactNode;
  title: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  bodyPadding?: string | number;
  headerPadding?: string | number;
  margin?: string | number;
  width?: string | number;
  bodyHeight?: string | number;
  additionalStyles?: CSSProperties;
  additionalBodyStyles?: CSSProperties;
  additionalHeaderStyles?: CSSProperties;
};
