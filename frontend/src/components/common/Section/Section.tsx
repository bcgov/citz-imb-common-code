import { memo } from 'react';
import { SectionProps } from './types';
import { styleMapper, styleMapperBody } from './styleMapper';
import { useDynamicStyles } from 'src/hooks';

const SectionComponent = (props: SectionProps) => {
  const styles = useDynamicStyles(props, styleMapper);
  const bodyStyles = useDynamicStyles(props, styleMapperBody);

  return (
    <section id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
      <>{props.title}</>
      <div style={bodyStyles}>{props.children}</div>
    </section>
  );
};

/**
 * Section component.
 * @param {SectionProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the section component.
 * @property {string | ReactNode} title - The title for the section.
 * @property {string} [id] - An optional identifier for the section component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {string | number} [padding='20px'] - Padding between content and border of section body.
 * @property {string | number} [subtitleSpacing=0] - Spacing between content and title.
 * @property {string} [borderColor] - Color of the content border.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the section component.
 * @property {CSSProperties} [additionalBodyStyles] - Additional inline styles to apply to the section component's body.
 */
export const Section = memo(SectionComponent);
