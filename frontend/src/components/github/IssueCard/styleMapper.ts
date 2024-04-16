import { CSSProperties } from 'react';
import { IssueCardProps } from './types';
import { PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: IssueCardProps) => {
  // Set default values.
  const {
    shaded = PROP_DEFAULTS.shaded,
    firstIssue = PROP_DEFAULTS.firstIssue,
    lastIssue = PROP_DEFAULTS.lastIssue,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    height: '85px',
    backgroundColor: shaded ? 'var(--light-grey4)' : 'var(--white)',
    borderTop: firstIssue ? 'none' : '1px solid var(--light-grey2)',
    borderBottomRightRadius: lastIssue ? '10px' : 'none',
    borderBottomLeftRadius: lastIssue ? '10px' : 'none',
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
