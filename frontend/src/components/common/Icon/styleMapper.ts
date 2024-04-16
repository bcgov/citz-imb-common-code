import { CSSProperties } from 'react';
import { IconProps } from './types';

// Maps prop values to css styles.
export const styleMapper = (props: IconProps) => {
  // Set default values.
  const { margin, additionalStyles } = props;

  const styles: CSSProperties = {
    margin,
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
