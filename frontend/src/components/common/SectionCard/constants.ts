import { SectionCardProps } from './types';

// Default values for props of SectionCardProps.
export const PROP_DEFAULTS: Pick<
  SectionCardProps,
  'bodyPadding' | 'headerPadding' | 'margin' | 'width' | 'bodyHeight'
> = {
  bodyPadding: '16px 24px',
  headerPadding: '16px 24px',
  margin: '0',
  width: '1fr',
  bodyHeight: 'fit-content',
};
