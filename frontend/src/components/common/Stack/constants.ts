import { StackProps } from './types';

// Default values for props of StackProps.
export const PROP_DEFAULTS: Pick<
  StackProps,
  'direction' | 'gap' | 'flexWrap' | 'spaceBetween' | 'spaceAround' | 'spaceEvenly'
> = {
  direction: 'row',
  gap: '5px',
  flexWrap: 'nowrap',
  spaceBetween: false,
  spaceAround: false,
  spaceEvenly: false,
};
