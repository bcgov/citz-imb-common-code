import { CSSProperties } from 'react';
import { ModalProps } from './types';

// Default values for props of ModalProps.
export const PROP_DEFAULTS: Pick<
  ModalProps,
  | 'padding'
  | 'margin'
  | 'borderRadius'
  | 'backgroundColor'
  | 'overlayBackgroundColor'
  | 'width'
  | 'height'
> = {
  padding: '20px',
  margin: '0',
  borderRadius: '8px',
  backgroundColor: 'var(--white)',
  overlayBackgroundColor: 'var(--transparent-grey)' /* semi-transparent background */,
  width: '50%',
  height: 'fit-content',
};

export const MODAL_STYLES: CSSProperties = {
  boxShadow: '0 8px 20px var(--transparent-black)',
};

export const OVERLAY_STYLES: CSSProperties = {
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};
