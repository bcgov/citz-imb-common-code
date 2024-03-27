import React, { memo } from 'react';
import { useDynamicStyles } from 'hooks';
import { HeadingProps } from './types';
import { styleMapper } from './styleMapper';
import { OVERLINE_STYLES } from './constants';

const HeadingComponent = (props: HeadingProps) => {
  const styles = useDynamicStyles(props, styleMapper);

  return (
    <div id={props.id} className={props.className} style={styles}>
      {props.overline && <div style={OVERLINE_STYLES} />}
      {props.children}
      {props?.divider && <hr />}
    </div>
  );
};

/**
 * Heading text component.
 * @param {HeadingProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the typography component.
 * @property {string} [id] - An optional identifier for the typography component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {'x-small' | 'small' | 'medium' | 'large' | 'x-large'} [size='medium'] - The size of the text.
 * @property {'left' | 'right' | 'center'} [align='left'] - Text alignment.
 * @property {'dark' | 'white' | 'blue'} [color='dark'] - The color of the text.
 * @property {boolean} [divider=false] - Adds a divider <hr> element below.
 * @property {boolean} [overline=false] - Adds an overline above the title.
 * @property {boolean} [bold=false] - Sets whether the text is bold.
 * @property {string | number} [lineHeight] - The line height of the text.
 * @property {'none' | 'capitalize' | 'uppercase' | 'lowercase'} [textTransform='none'] - The transformation to apply to the text.
 * @property {'none' | 'underline' | 'overline' | 'line-through'} [textDecoration='none'] - The decoration to apply to the text.
 * @property {string | number} [letterSpacing] - The spacing between letters in the text.
 * @property {'block' | 'inline' | 'inline-block' | 'flex'} [display] - The CSS display property of the text component.
 * @property {string | number} [margin] - External spacing around the text component.
 * @property {string | number} [padding] - Internal spacing within the text component.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the text component.
 */
export const Heading = memo(HeadingComponent);
