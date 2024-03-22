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
  }, [props]);
};

const StackComponent = (props: StackProps) => {
  const styles = useStyles(props);

  return <div style={styles}>{props.children}</div>;
};

/**
 * Stack components vertically or horizontally.
 * @param {StackProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the stack component.
 * @property {'row' | 'row-reverse' | 'column' | 'column-reverse'} [direction='row'] - Css property flexDirection.
 * @property {string} [gap='5px'] - The space between child components.
 * @property {'center' | 'flex-start' | 'flex-end' | 'stretch'} [alignItems='stretch'] - Aligns children in the cross axis.
 * @property {'wrap' | 'nowrap' | 'wrap-reverse'} [flexWrap='nowrap'] - Controls children wrapping.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the stack component.
 */
export const Stack = memo(StackComponent);
