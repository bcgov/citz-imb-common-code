import { CSSProperties } from 'react';
import { TypographyProps } from './types';
import { COLORS, FONT_SIZES, PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: TypographyProps) => {
  // Set default values.
  const {
    size = PROP_DEFAULTS.size,
    align = PROP_DEFAULTS.align,
    color = PROP_DEFAULTS.color,
    bold = false,
    lineHeight,
    textTransform = PROP_DEFAULTS.textTransform,
    textDecoration = PROP_DEFAULTS.textDecoration,
    letterSpacing,
    display,
    margin,
    padding,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    fontSize: FONT_SIZES[size!], // ! asserts that the value is not going to be undefined.
    textAlign: align,
    color: COLORS[color!], // ! asserts that the value is not going to be undefined.
    fontWeight: bold ? 700 : 500,
    lineHeight,
    textTransform,
    textDecoration,
    letterSpacing,
    display,
    margin,
    padding,
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
