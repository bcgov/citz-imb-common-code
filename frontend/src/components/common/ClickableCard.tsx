import React, { CSSProperties, MouseEventHandler, ReactNode, memo, useMemo, useState } from 'react';

type ClickableCardProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  padding?: string | number;
  borderRadius?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  width?: string | number;
  height?: string | number;
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
  }, [props, isHovered]);
};

const ClickableCardComponent = (props: ClickableCardProps) => {
  const { children, onClick = () => {} } = props;

  const [isHovered, setIsHovered] = useState(false);
  const styles = useStyles(props, isHovered);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
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
 * @property {ReactNode} children - The content inside the card.
 * @property {MouseEventHandler<HTMLAnchorElement>} [onClick] - Function to execute on card click.
 * @property {string | number} [padding='16px 24px'] - Internal spacing of the card.
 * @property {string} [borderRadius='4px'] - Corner roundness of the card.
 * @property {string} [backgroundColor='var(--white)'] - Background color of the card.
 * @property {string} [hoverBackgroundColor='var(--light-grey2)'] - Background color on hover.
 * @property {string | number} [width='100%'] - Width of the card.
 * @property {string | number} [height='100px'] - Height of the card.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the stack component.
 */
export const ClickableCard = memo(ClickableCardComponent);
