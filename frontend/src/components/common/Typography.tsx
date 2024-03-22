import React, { CSSProperties, ReactNode, memo, useMemo } from 'react';

type TypographyProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  align?: 'left' | 'right' | 'center';
  color?: 'dark' | 'white' | 'blue';
  bold?: boolean;
  lineHeight?: string | number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
  textDecoration?: 'none' | 'underline' | 'overline' | 'line-through';
  letterSpacing?: string | number;
  display?: 'block' | 'inline' | 'inline-block';
  margin?: string | number;
  padding?: string | number;
  ellipsis?: boolean;
  additionalStyles?: CSSProperties;
};

const useStyles = (props: TypographyProps) => {
  const {
    size = 'medium',
    align = 'left',
    color = 'dark',
    bold = false,
    lineHeight,
    textTransform = 'none',
    textDecoration = 'none',
    letterSpacing,
    display,
    margin,
    padding,
    ellipsis,
    additionalStyles,
  } = props;

  // Memoize for better performance.
  return useMemo(() => {
    const fontSizes = {
      'x-small': '0.5em',
      small: '0.75em',
      medium: '1em',
      large: '1.25em',
      'x-large': '1.5em',
    };

    const colors = {
      dark: 'var(--text-color)',
      white: 'var(--white)',
      blue: 'var(--bcgov-light-blue)',
    };

    const styles: CSSProperties = {
      fontSize: fontSizes[size],
      textAlign: align,
      color: colors[color],
      fontWeight: bold ? 700 : 500,
      lineHeight,
      textTransform,
      textDecoration,
      letterSpacing,
      display,
      margin,
      padding,
      overflow: ellipsis ? 'hidden' : undefined,
      textOverflow: ellipsis ? 'ellipsis' : undefined,
      whiteSpace: ellipsis ? 'nowrap' : undefined,
    };

    return { ...styles, ...additionalStyles };
  }, [props]);
};

const TypographyComponent = (props: TypographyProps) => {
  const styles = useStyles(props);

  return (
    <div id={props.id} className={props.className} style={styles}>
      {props.children}
    </div>
  );
};

/**
 * Text component.
 * @param {TypographyProps} props - Properties are shown below.
 * @property {ReactNode} children - The content within the typography component.
 * @property {string} [id] - An optional identifier for the typography component.
 * @property {string} [className] - Additional CSS class names to apply to the component.
 * @property {'x-small' | 'small' | 'medium' | 'large' | 'x-large'} [size='medium'] - The size of the text.
 * @property {'left' | 'right' | 'center'} [align='left'] - Text alignment.
 * @property {'dark' | 'white' | 'blue'} [color='dark'] - The color of the text.
 * @property {boolean} [bold=false] - Sets whether the text is bold.
 * @property {string | number} [lineHeight] - The line height of the text.
 * @property {'none' | 'capitalize' | 'uppercase' | 'lowercase'} [textTransform='none'] - The transformation to apply to the text.
 * @property {'none' | 'underline' | 'overline' | 'line-through'} [textDecoration='none'] - The decoration to apply to the text.
 * @property {string | number} [letterSpacing] - The spacing between letters in the text.
 * @property {'block' | 'inline' | 'inline-block'} [display] - The CSS display property of the text component.
 * @property {string | number} [margin] - External spacing around the text component.
 * @property {string | number} [padding] - Internal spacing within the text component.
 * @property {boolean} [ellipsis=false] - If true, text will be truncated with an ellipsis when it overflows its container.
 * @property {CSSProperties} [additionalStyles] - Additional inline styles to apply to the text component.
 */
export const Typography = memo(TypographyComponent);
