import { CSSProperties } from 'react';

export type BreadCrumbProps = {
  pathname: string;
  labels: string;
};

export type CrumbProps = {
  pathname: string;
  crumb: CrumbProperty;
  style: BreadCrumbStyles;
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
