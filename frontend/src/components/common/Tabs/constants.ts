import { TabsProps } from './types';

// Default values for props of TabsProps.
export const PROP_DEFAULTS: Pick<
  TabsProps,
  'bodyPadding' | 'headerPadding' | 'margin' | 'width' | 'bodyHeight'
> = {
  bodyPadding: '0',
  headerPadding: '8px 12px 0 12px',
  margin: '0',
  width: '1fr',
  bodyHeight: 'fit-content',
};
