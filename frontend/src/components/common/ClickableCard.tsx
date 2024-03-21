import React, { CSSProperties, MouseEventHandler, ReactNode, memo, useMemo, useState } from 'react';

type ClickableCardProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  ariaLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  width?: string;
  height?: string;
  additionalStyles?: CSSProperties;
};

const useStyles = (props: ClickableCardProps, isHovered: boolean) => {
  const {
    additionalStyles,
    padding = '16px 24px',
    borderRadius = '4px',
    backgroundColor = 'var(--white)',
    hoverBackgroundColor = 'var(--light-grey2)',
    width = '100%',
    height = '100px',
  } = props;

  // Memoize for better performance.
  return useMemo(() => {
    const styles: CSSProperties = {
      padding,
      borderRadius,
      backgroundColor: isHovered ? hoverBackgroundColor : backgroundColor,
      boxShadow: isHovered
        ? 'rgba(0, 0, 0, 0.13) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.1) 0px 0.6px 1.8px 0px'
        : 'none',
      textDecoration: 'none',
      display: 'block',
      color: 'var(--text-color)',
      width,
      height,
    };

    return { ...styles, ...additionalStyles };
  }, [
    padding,
    borderRadius,
    backgroundColor,
    hoverBackgroundColor,
    additionalStyles,
    width,
    height,
    isHovered,
  ]);
};

const ClickableCardComponent = (props: ClickableCardProps) => {
  const { children, onClick = () => {} } = props;

  const [isHovered, setIsHovered] = useState(false);
  const styles = useStyles(props, isHovered);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      id={props.id}
      className={props.className}
      aria-label={props.ariaLabel}
      onClick={onClick}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

/**
 * A card that can be assigned an onClick function and has hover effects.
 * @param {ClickableCardProps} props - Properties are shown below.
 * @property {ReactNode} children - Child components filling the content space of the card.
 * @property {string} id - (optional) Identifier.
 * @property {string} className - (optional) CSS class names.
 * @property {string} ariaLabel - (optional) Aria label.
 * @property {MouseEventHandler<HTMLAnchorElement>} onClick - On click function.
 * @property {string} padding - Css property.
 * @property {string} borderRadius - Css property.
 * @property {string} backgroundColor - Css property.
 * @property {string} hoverBackgroundColor - Css property (on hover).
 * @property {string} width - Css property.
 * @property {string} height - Css property.
 * @property {CSSProperties} additionalStyles - Additional css properties.
 */
export const ClickableCard = memo(ClickableCardComponent);
