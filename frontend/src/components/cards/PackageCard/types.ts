import { PackageBadge } from 'src/constants';
import { IconProps } from 'src/components';

export type PackageCardProps = {
  icon: IconProps['icon'];
  title: string;
  summary: string;
  badge: PackageBadge;
};
