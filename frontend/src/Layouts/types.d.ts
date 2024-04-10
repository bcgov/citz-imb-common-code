import { Package } from 'types';

export type RootLayoutProps = {
  children: ReactNode;
  pathname?: string;
  labels?: string;
  packages?: Package[];
};
