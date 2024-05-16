import { PackageBadge } from '.';

export const PACKAGE_BADGE_TOOLTIPS: Record<PackageBadge, string> = {
  experimental: 'Package is in a testing phase, potentially unstable and subject to change.',
  stable: 'Package has been thoroughly tested and deemed reliable for production use.',
  retired: 'Package is no longer maintained or supported by the developers.',
};

export const PACKAGE_BADGE_COLORS: Record<PackageBadge, string> = {
  experimental: 'var(--experimental-package-badge)',
  stable: 'var(--stable-package-badge)',
  retired: 'var(--retired-package-badge)',
};
