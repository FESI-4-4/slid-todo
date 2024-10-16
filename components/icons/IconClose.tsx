import { SVGProps } from 'react';

const IconClose = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="9" fill="#64748B" />
      <path d="M8 8L16 16" stroke="#F8FAFC" stroke-width="1.8" stroke-linecap="round" />
      <path d="M16 8L8 16" stroke="#F8FAFC" stroke-width="1.8" stroke-linecap="round" />
    </svg>
  );
};
export default IconClose;
