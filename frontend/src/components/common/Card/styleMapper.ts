import { CSSProperties } from 'react';
import { CardProps } from './types';
import { PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: CardProps, isHovered?: boolean) => {
  // Set default values.
  const {
    padding = PROP_DEFAULTS.padding,
    margin = PROP_DEFAULTS.margin,
    borderRadius = PROP_DEFAULTS.borderRadius,
    backgroundColor = PROP_DEFAULTS.backgroundColor,
    hoverBackgroundColor = PROP_DEFAULTS.hoverBackgroundColor,
    width = PROP_DEFAULTS.width,
    height = PROP_DEFAULTS.height,
    hoverEffects = PROP_DEFAULTS.hoverEffects,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    padding,
    margin,
    borderRadius,
    backgroundColor: hoverEffects && isHovered ? hoverBackgroundColor : backgroundColor,
    boxShadow:
      hoverEffects && isHovered
        ? 'rgba(0, 0, 0, 0.13) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.1) 0px 0.6px 1.8px 0px'
        : 'none',
    textDecoration: 'none',
    display: 'block',
    color: 'var(--text-color)',
    width,
    height,
    overflow: 'hidden',
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
