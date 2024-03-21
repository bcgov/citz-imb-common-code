import React, { CSSProperties, ReactNode, memo, useMemo } from 'react';

type HeadingProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  size?: 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  divider?: boolean;
  align?: 'left' | 'right' | 'center';
  additionalStyles?: CSSProperties;
};

const useStyles = (props: HeadingProps) => {
  const { size = 'medium', align = 'left', additionalStyles } = props;

  // Memoize for better performance.
  return useMemo(() => {
    const fontSizes = {
      'x-small': '1.2em',
      small: '1.45em',
      medium: '1.75em',
      large: '2em',
      'x-large': '2.5em',
    };

    const styles: CSSProperties = { fontSize: fontSizes[size], textAlign: align };

    return { ...styles, ...additionalStyles };
  }, [size, align, additionalStyles]);
};

const HeadingComponent = (props: HeadingProps) => {
  const styles = useStyles(props);

  return (
    <>
      <h1 id={props.id} className={props.className} style={styles}>
        {props.children}
      </h1>
      {props.divider && <hr />}
    </>
  );
};

/**
 * Text heading component.
 * @param {HeadingProps} props - Properties are shown below.
 * @property {ReactNode} children - Child components, or stacked components.
 * @property {string} id - (optional) Identifier.
 * @property {string} className - (optional) CSS class names.
 * @property {'x-small' | 'small' | 'medium' | 'large' | 'x-large'} size - (optional) Size of heading. Default is 'medium'.
 * @property {boolean} divider - (optional) Places a divider bar (<hr />) below the heading.
 * @property {'left' | 'right' | 'center'} align - (optional) Align text. Default is 'left'.
 * @property {CSSProperties} additionalStyles - Additional css properties.
 */
export const Heading = memo(HeadingComponent);
