import { BreadCrumbProps, BreadCrumbStyles } from './types';
import { STYLE_DEFAULTS } from 'types';

// Maps prop values to css styles.
export const styleMapper = (props: BreadCrumbProps, isHovered?: boolean) => {
  // Set default values.
  const {
    padding = STYLE_DEFAULTS.padding,
    margin = STYLE_DEFAULTS.margin,
    borderRadius = STYLE_DEFAULTS.borderRadius,
    backgroundColor = STYLE_DEFAULTS.backgroundColor,
    hoverBackgroundColor = STYLE_DEFAULTS.hoverBackgroundColor,
    width = STYLE_DEFAULTS.width,
    height = STYLE_DEFAULTS.height,
    hoverEffects = STYLE_DEFAULTS.hoverEffects,
    additionalStyles,
  } = props.styles || {};

  const styles: BreadCrumbStyles = {
    div: {
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
    },
    ul: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
      display: 'flex',
    },
    li: {
      display: 'inline',
    },
    a: {
      textDecoration: 'underline',
      padding: '0 0.5rem',
      color: 'var(--link-text-color)',
    },
    current: {
      padding: '0 0.5rem',
    },
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
