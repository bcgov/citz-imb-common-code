import { memo } from 'react';
import { useDynamicStyles } from 'src/hooks';
import { IconProps } from './types';
import { styleMapper } from './styleMapper';
import { Icons } from 'src/components';
import { COLORS, PROP_DEFAULTS, SIZES } from './constants';

const IconComponent = (props: IconProps) => {
  const styles = useDynamicStyles(props, styleMapper);

  const Icon = Icons[props.icon];

  return (
    <div id={props.id} className={props.className} style={styles}>
      <Icon
        color={props?.color ? COLORS[props.color] : COLORS[PROP_DEFAULTS.color!]} // ! asserts that the value is not going to be undefined.
        size={props?.size ? SIZES[props.size] : SIZES[PROP_DEFAULTS.size!]} // ! asserts that the value is not going to be undefined.
      />
    </div>
  );
};

/**
 * SVG Icon component.
 * @param {IconProps} props - Properties are shown below.
 * @property {'Authenticate'} icon - The icon to display.
 * @property {string} [id] - An optional identifier for the icon component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {'x-small' | 'small' | 'medium' | 'large' | 'x-large'} [size='medium'] - The size of the icon.
 * @property {'dark' | 'white' | 'blue'} [color='dark'] - The color of the icon.
 * @property {string | number} [margin] - External spacing around the icon component.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the icon component.
 */
export const Icon = memo(IconComponent);
