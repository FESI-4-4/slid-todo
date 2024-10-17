import { SVGProps } from 'react';

const IconCheck = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7 11.625L10.1098 14.7348C10.2563 14.8813 10.4937 14.8813 10.6402 14.7348L16.375 9"
        stroke="#3B82F6"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};
export default IconCheck;
