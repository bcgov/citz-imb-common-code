import { SectionProps } from './types';

// Default values for props of SectionProps.
export const PROP_DEFAULTS: Pick<SectionProps, 'padding' | 'subtitleSpacing' | 'borderColor'> = {
  padding: '20px',
  subtitleSpacing: 0,
  borderColor: 'var(--light-grey3)',
};
