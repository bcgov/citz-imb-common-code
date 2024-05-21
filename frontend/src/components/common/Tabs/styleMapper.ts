import { CSSProperties } from 'react';
import { TabsProps } from './types';
import { PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: TabsProps) => {
  // Set default values.
  const { margin = PROP_DEFAULTS.margin, width = PROP_DEFAULTS.width, additionalStyles } = props;

  const styles: CSSProperties = {
    margin,
    borderRadius: '10px',
    border: '2px solid var(--light-grey2)',
    width,
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};

export const styleMapperHeader = (props: TabsProps) => {
  // Set default values.
  const { headerPadding = PROP_DEFAULTS.headerPadding, additionalHeaderStyles } = props;

  const styles: CSSProperties = {
    padding: headerPadding,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    borderBottom: '2px solid var(--light-grey2)',
    backgroundColor: 'var(--bcgov-blue-navy)',
    color: 'var(--white)',
    fontSize: '1.5em',
  };

  // Adds additionalHeaderStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalHeaderStyles };
};

export const styleMapperHeaderButton = (props: TabsProps) => {
  // Set default values.
  const { additionalHeaderButtonStyles } = props;

  const styles: CSSProperties = {
    marginRight: '8px',
    padding: '8px',
    fontSize: '0.75em',
    cursor: 'pointer',
  };

  // Adds additionalHeaderButtonStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalHeaderButtonStyles };
};

export const styleMapperBody = (props: TabsProps) => {
  // Set default values.
  const {
    bodyPadding = PROP_DEFAULTS.bodyPadding,
    bodyHeight = PROP_DEFAULTS.bodyHeight,
    additionalBodyStyles,
  } = props;

  const styles: CSSProperties = {
    padding: bodyPadding,
    height: bodyHeight,
    backgroundColor: 'var(--white)',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  };

  // Adds additionalBodyStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalBodyStyles };
};
