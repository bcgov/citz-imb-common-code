import { CSSProperties } from 'react';
import { StackProps } from './types';
import { PROP_DEFAULTS } from './constants';

// Maps prop values to css styles.
export const styleMapper = (props: StackProps) => {
  // Set default values.
  const {
    direction = PROP_DEFAULTS.direction,
    gap = PROP_DEFAULTS.gap,
    alignItems,
    flexWrap = PROP_DEFAULTS.flexWrap,
    spaceAround = PROP_DEFAULTS.spaceAround,
    spaceBetween = PROP_DEFAULTS.spaceBetween,
    spaceEvenly = PROP_DEFAULTS.spaceEvenly,
    additionalStyles,
  } = props;

  const styles: CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    gap,
    flexWrap,
    justifyContent:
      alignItems && ['row', 'row-reverse'].includes(direction!)
        ? alignItems // Prioritizes alignItems props.
        : spaceAround
          ? 'space-around'
          : spaceBetween
            ? 'space-between'
            : spaceEvenly
              ? 'space-evenly'
              : 'normal', // Default to normal.
    alignItems:
      alignItems && ['column', 'column-reverse'].includes(direction!) ? alignItems : 'normal',
  };

  // Adds additionalStyles after styles, so they will override any style properties of styles object.
  return { ...styles, ...additionalStyles };
};
