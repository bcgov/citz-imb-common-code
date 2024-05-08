import { CSSProperties, ReactNode } from 'react';

export type SectionProps = {
  children: ReactNode;
  title: string | ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  padding?: string | number;
  subtitleSpacing?: string | number;
  borderColor?: string;
  additionalStyles?: CSSProperties;
  additionalBodyStyles?: CSSProperties;
};
