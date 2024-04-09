import { memo } from 'react';
import { SectionCardProps } from './types';
import { styleMapper, styleMapperBody, styleMapperHeader } from './styleMapper';
import { useDynamicStyles } from 'hooks';

const SectionCardComponent = (props: SectionCardProps) => {
  const styles = useDynamicStyles(props, styleMapper);
  const headerStyles = useDynamicStyles(props, styleMapperHeader);
  const bodyStyles = useDynamicStyles(props, styleMapperBody);

  return (
    <div id={props.id} className={props.className} aria-label={props.ariaLabel} style={styles}>
      <div style={headerStyles}>{props.title}</div>
      <div style={bodyStyles}>{props.children}</div>
    </div>
  );
};

/**
 * SectionCard component.
 * @param {SectionCardProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the card component.
 * @property {ReactNode} title - Title of the card.
 * @property {string} [id] - An optional identifier for the card component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {string | number} [bodyPadding='16px 24px'] - Internal spacing within the card component's body.
 * @property {string | number} [headerPadding='16px 24px'] - Internal spacing within the card component's header.
 * @property {string | number} [margin='0'] - External spacing around the card component.
 * @property {string | number} [width='1fr'] - Width of the card.
 * @property {string | number} [bodyHeight='fit-content'] - Height of the card body.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the card component.
 * @property {CSSProperties} [additionalBodyStyles] - Additional inline styles to apply to the card component's body.
 * @property {CSSProperties} [additionalHeaderStyles] - Additional inline styles to apply to the card component's header.
 */
export const SectionCard = memo(SectionCardComponent);
