import { CSSProperties } from 'react';
import { SectionProps } from './types';
import { PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: SectionProps) => {
  // Set default values.
  const { additionalStyles } = props;

  const styles: CSSProperties = {};

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};

export const styleMapperBody = (props: SectionProps) => {
  // Set default values.
  const {
    padding = PROP_DEFAULTS.padding,
    borderColor = PROP_DEFAULTS.borderColor,
    subtitleSpacing = PROP_DEFAULTS.subtitleSpacing,
    additionalBodyStyles,
  } = props;

  const styles: CSSProperties = {
    border: `2px solid ${borderColor}`,
    borderRadius: '5px',
    marginTop: subtitleSpacing,
    padding,
  };

  // Adds additionalBodyStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalBodyStyles };
};
