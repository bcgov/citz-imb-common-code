import { CSSProperties, useMemo } from 'react';

// eslint-disable-next-line no-unused-vars
type StyleMapper<Props> = (props: Props) => CSSProperties;

export const useDynamicStyles = <Props extends object>(
  props: Props,
  styleMapper: StyleMapper<Props>,
) => {
  // Memoize for better performance.
  return useMemo(() => {
    return styleMapper(props);
  }, [props]);
};
