import React, { CSSProperties, MouseEventHandler, ReactNode, memo, useMemo, useState } from 'react';

type CardProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  width?: string;
  height?: string;
  additionalStyles?: CSSProperties;
};

const useStyles = (props: CardProps, isHovered: boolean) => {
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

const ClickableCardComponent = (props: CardProps) => {
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

export const ClickableCard = memo(ClickableCardComponent);