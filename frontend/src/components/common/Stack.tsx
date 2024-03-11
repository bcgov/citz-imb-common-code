import React, { CSSProperties, ReactNode, memo, useMemo } from 'react';

type StackProps = {
  children: ReactNode;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  gap?: string;
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
  additionalStyles?: CSSProperties;
};

const useStyles = (props: StackProps) => {
  const {
    direction = 'row',
    gap = '5px',
    alignItems,
    flexWrap = 'nowrap',
    additionalStyles,
  } = props;

  // Memoize for better performance.
  return useMemo(() => {
    const styles: CSSProperties = { display: 'flex', flexDirection: direction, gap, flexWrap };

    // Align items.
    if (alignItems && ['row', 'row-reverse'].includes(direction))
      styles.justifyContent = alignItems;
    if (alignItems && ['column', 'column-reverse'].includes(direction))
      styles.alignItems = alignItems;

    return { ...styles, ...additionalStyles };
  }, [direction, gap, flexWrap, alignItems, additionalStyles]);
};

const StackComponent = (props: StackProps) => {
  const styles = useStyles(props);

  return <div style={styles}>{props.children}</div>;
};

export const Stack = memo(StackComponent);
