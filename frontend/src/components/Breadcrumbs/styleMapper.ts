import { BreadCrumbProps, BreadCrumbStyles } from './types';

// Maps prop values to css styles.
export const styleMapper = (props: BreadCrumbProps, isHovered?: boolean) => {
  // Set default values.
  const {
    padding = '16px 24px',
    margin = '0',
    borderRadius = '4px',
    backgroundColor = 'var(--white)',
    hoverBackgroundColor = 'var(--light-grey2)',
    width = '1fr',
    height = 'fit-content',
    hoverEffects = true,
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
