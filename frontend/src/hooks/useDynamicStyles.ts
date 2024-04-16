import { CSSProperties, useMemo } from 'react';

// eslint-disable-next-line no-unused-vars
type StyleMapper<Props> = (props: Props, isHovered?: boolean) => CSSProperties;

export const useDynamicStyles = <Props extends object>(
  props: Props,
  styleMapper: StyleMapper<Props>,
  isHovered?: boolean,
) => {
  // Memoize for better performance.
  return useMemo(() => {
    return styleMapper(props, isHovered);
  }, [props, isHovered]);
};
