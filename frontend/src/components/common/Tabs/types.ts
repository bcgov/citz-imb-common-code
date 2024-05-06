import { CSSProperties, ReactNode } from 'react';

export type Tab = {
  id: string;
  title: string;
};

export type TabsProps = {
  children: ReactNode;
  currentTabId: string;
  tabs: Tab[];
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
  additionalHeaderButtonStyles?: CSSProperties;
};
