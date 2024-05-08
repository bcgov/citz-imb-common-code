import { IconProps } from 'src/components';

export type PackageType = {
  repo: string;
  title: string;
  summary: string;
  section: string;
  iconType: IconProps['icon'];
  pageRoute: string;
  details: string;
};
