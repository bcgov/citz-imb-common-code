import { memo } from 'react';
import { BadgeProps } from './types';
import { styleMapper } from './styleMapper';
import { useDynamicStyles } from 'src/hooks';

const BadgeComponent = (props: BadgeProps) => {
  const styles = useDynamicStyles(props, styleMapper);

  return (
    <div
      id={props.id}
      title={props.tooltip}
      className={props.className}
      aria-label={props.ariaLabel}
      style={styles}
    >
      {props.text}
    </div>
  );
};

/**
 * Badge component.
 * @param {BadgeProps} props - Properties are shown below.
 * @property {string} text - The content text within the badge component.
 * @property {string} [id] - An optional identifier for the badge component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {string} [color] - Background color of badge.
 * @property {string} [textColor] - Text color of badge.
 * @property {'small' | 'medium' | 'large'} [size='medium'] - Size of the badge.
 * @property {string} [tooltip] - Tooltip text to apply when hovering the badge.
 * @property {string | number} [padding='3px'] - Internal spacing within the badge component.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the badge component.
 */
export const Badge = memo(BadgeComponent);
