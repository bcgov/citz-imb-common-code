import { memo, useState } from 'react';
import { CardProps } from './types';
import { styleMapper } from './styleMapper';
import { useDynamicStyles } from 'hooks';

const CardComponent = (props: CardProps) => {
  const { onClick } = props;
  const [isHovered, setIsHovered] = useState(false);
  const styles = useDynamicStyles(props, styleMapper, isHovered);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      id={props.id}
      className={props.className}
      aria-label={props.ariaLabel}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick !== undefined ? (e) => onClick(e) : () => {}}
      style={styles}
    >
      {props.children}
    </div>
  );
};

/**
 * Card component.
 * @param {CardProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the card component.
 * @property {string} [id] - An optional identifier for the card component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {string} [ariaLabel] - Label for component that can be beneficial for users of screen readers or other assistive technologies.
 * @property {MouseEventHandler<HTMLDivElement>} [onClick] - Function called when the card is clicked.
 * @property {boolean} [hoverEffects=true] - If hover effects should take place.
 * @property {string | number} [padding='16px 24px'] - Internal spacing within the card component.
 * @property {string | number} [margin='0'] - External spacing around the card component.
 * @property {string | number} [borderRadius='4px'] - Corner roundness of the card.
 * @property {string} [backgroundColor] - Background color of the card.
 * @property {string} [hoverBackgroundColor] - Background color of the card on hover.
 * @property {string | number} [width='1fr'] - Width of the card.
 * @property {string | number} [height='fit-content'] - Height of the card.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the card component.
 */
export const Card = memo(CardComponent);
