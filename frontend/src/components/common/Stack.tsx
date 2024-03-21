import React, { CSSProperties, ReactNode, memo, useMemo } from 'react';

type StackProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
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

  return (
    <div id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
      {props.children}
    </div>
  );
};

/**
 * Stack components vertically or horizontally.
 * @param {StackProps} props - Properties are shown below.
 * @property {ReactNode} children - Child components, or stacked components.
 * @property {string} id - (optional) Identifier.
 * @property {string} className - (optional) CSS class names.
 * @property {string} ariaLabel - (optional) Aria label.
 * @property {'row' | 'row-reverse' | 'column' | 'column-reverse'} direction - Css property flexDirection;
 * @property {string} gap - Css property.
 * @property {'center' | 'flex-start' | 'flex-end' | 'stretch'} alignItems - Css property.
 * @property {'wrap' | 'nowrap' | 'wrap-reverse'} flexWrap - Css property.
 * @property {CSSProperties} additionalStyles - Additional css properties.
 */
export const Stack = memo(StackComponent);
