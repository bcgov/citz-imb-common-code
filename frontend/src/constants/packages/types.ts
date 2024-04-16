import { IconProps } from 'components';

export type PackageType = {
  repo: string;
  title: string;
  summary: string;
  iconType: IconProps['icon'];
  pageRoute: string;
  details: string;
};
