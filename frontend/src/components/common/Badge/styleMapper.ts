import { CSSProperties } from 'react';
import { BadgeProps } from './types';
import { FONT_SIZES, PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: BadgeProps) => {
  // Set default values.
  const {
    color = PROP_DEFAULTS.color,
    textColor = PROP_DEFAULTS.textColor,
    size = PROP_DEFAULTS.size,
    padding = PROP_DEFAULTS.padding,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    color: textColor,
    fontSize: FONT_SIZES[size!], // ! asserts that the value is not going to be undefined.
    backgroundColor: color,
    borderRadius: '5px',
    height: 'fit-content',
    width: 'fit-content',
    cursor: 'pointer',
    padding,
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
