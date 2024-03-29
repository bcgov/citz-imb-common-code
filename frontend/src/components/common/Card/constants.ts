import { CardProps } from './types';

// Default values for props of CardProps.
export const PROP_DEFAULTS: Pick<
  CardProps,
  | 'padding'
  | 'margin'
  | 'borderRadius'
  | 'backgroundColor'
  | 'hoverBackgroundColor'
  | 'width'
  | 'height'
  | 'hoverEffects'
> = {
  padding: '16px 24px',
  margin: '0',
  borderRadius: '4px',
  backgroundColor: 'var(--white)',
  hoverBackgroundColor: 'var(--light-grey2)',
  width: '1fr',
  height: 'fit-content',
  hoverEffects: true,
};
