import { SVGProps } from 'react';

const IconStateActive = (props: SVGProps<SVGSVGElement>) => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect x='3' y='3' width='18' height='18' rx='6' fill='#3182F6' />
    <path
      d='M7 11.625L10.1098 14.7348C10.2563 14.8813 10.4937 14.8813 10.6402 14.7348L16.375 9'
      stroke='white'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
);

export default IconStateActive;
