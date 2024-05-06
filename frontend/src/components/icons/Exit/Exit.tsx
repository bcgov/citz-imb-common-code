import { ExitProps } from './types';

export const Exit = (props: ExitProps) => {
  const { color, size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      data-testid="exit-authenticate"
    >
      <path
        fill={color}
        d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414 4.242 4.242-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414-4.242-4.242 4.242-4.242z"
      />
    </svg>
  );
};
