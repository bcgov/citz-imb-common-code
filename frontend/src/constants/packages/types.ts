import { IconProps } from 'src/components';
import { PackageBadge } from 'src/constants';

export type PackageType = {
  repo: string;
  title: string;
  summary: string;
  section: string;
  badge: PackageBadge;
  iconType: IconProps['icon'];
  pageRoute: string;
  documentationLink: string;
  details: string;
};
