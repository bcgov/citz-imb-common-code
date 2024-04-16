import { CSSProperties } from 'react';

export type StyleMapper<Props> = (props: Props, isHovered?: boolean) => CSSProperties;
