import { AuthenticateProps } from './types';

export const Authenticate = (props: AuthenticateProps) => {
  const { color, size } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 192 192"
      fill="none"
      data-testid="icon-authenticate"
    >
      <path
        d="M96 62H68c-17.673 0-32.389 14.46-29.302 31.862C47.497 143.453 75.94 170 96 170m0-108h28c17.673 0 32.389 14.46 29.302 31.862C144.503 143.453 116.06 170 96 170"
        stroke={color}
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M68 56c0-15.464 12.536-28 28-28s28 12.536 28 28c0 2.06-.222 4.067-.644 6h12.197c.294-1.957.447-3.96.447-6 0-22.091-17.909-40-40-40S56 33.909 56 56c0 2.04.153 4.043.447 6h12.197A28.105 28.105 0 0 1 68 56Zm-.367 98.946C70.417 141.836 82.06 132 96 132c12.903 0 23.838 8.427 27.601 20.077l8.982-9.608C125.816 129.136 111.975 120 96 120c-15.922 0-29.725 9.076-36.516 22.338L65.5 152l2.133 2.946Z"
        fill={color}
      />
      <circle cx="96" cy="94" r="14" stroke={color} strokeWidth="12" />
    </svg>
  );
};
