import { CSSProperties } from 'react';
import { ModalProps } from './types';
import { MODAL_STYLES, OVERLAY_STYLES, PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: ModalProps) => {
  // Set default values.
  const {
    padding = PROP_DEFAULTS.padding,
    margin = PROP_DEFAULTS.margin,
    borderRadius = PROP_DEFAULTS.borderRadius,
    backgroundColor = PROP_DEFAULTS.backgroundColor,
    width = PROP_DEFAULTS.width,
    height = PROP_DEFAULTS.height,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    ...MODAL_STYLES,
    padding,
    margin,
    borderRadius,
    backgroundColor,
    width,
    height,
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};

// Maps prop values to css styles.
export const styleMapperOverlay = (props: ModalProps) => {
  // Set default values.
  const { overlayBackgroundColor = PROP_DEFAULTS.overlayBackgroundColor } = props;

  const styles: CSSProperties = {
    ...OVERLAY_STYLES,
    backgroundColor: overlayBackgroundColor,
  };

  return styles;
};
