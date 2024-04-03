import { CSSProperties, ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  id?: string;
  className?: string;
  ariaLabel?: string;
  padding?: string | number;
  margin?: string | number;
  divider?: boolean;
  borderRadius?: string | number;
  backgroundColor?: string;
  overlayBackgroundColor?: string;
  width?: string | number;
  height?: string | number;
  additionalStyles?: CSSProperties;
};
