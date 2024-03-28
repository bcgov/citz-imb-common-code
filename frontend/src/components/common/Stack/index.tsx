import React, { memo } from 'react';
import { StackProps } from './types';
import { styleMapper } from './styleMapper';
import { useDynamicStyles } from 'hooks';

const StackComponent = (props: StackProps) => {
  const styles = useDynamicStyles(props, styleMapper);

  return (
    <div id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
      {props.children}
    </div>
  );
};

/**
 * Stack components vertically or horizontally.
 * @param {StackProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the stack component.
 * @property {string} [id] - An optional identifier for the stack component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {'row' | 'row-reverse' | 'column' | 'column-reverse'} [direction='row'] - Css property flexDirection.
 * @property {string | number} [gap='5px'] - The space between child components.
 * @property {'center' | 'flex-start' | 'flex-end' | 'stretch'} [alignItems='stretch'] - Aligns children in the cross axis.
 * @property {'wrap' | 'nowrap' | 'wrap-reverse'} [flexWrap='nowrap'] - Controls children wrapping.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the stack component.
 */
export const Stack = memo(StackComponent);
