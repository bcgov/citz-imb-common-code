import { CSSProperties } from 'react';
import { Styles } from 'types';

export type BreadCrumbProps = {
  pathname: string;
  labels: string;
  styles?: Styles;
};

export type CrumbProperty = {
  label: string;
  path: string;
};

export type BreadCrumbStyles = {
  div: CSSProperties;
  ul: CSSProperties;
  li: CSSProperties;
  a: CSSProperties;
  current?: CSSProperties;
};
