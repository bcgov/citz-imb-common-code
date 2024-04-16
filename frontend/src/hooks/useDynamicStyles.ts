import { useMemo } from 'react';
import { StyleMapper } from './types';

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
