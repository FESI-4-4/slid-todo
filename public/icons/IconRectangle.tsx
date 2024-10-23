import { SVGProps } from 'react';

export const Rectangle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 28 28' {...props}>
      <rect width='28' height='28' fill='#DBEAFE' rx='8.4' />
    </svg>
  );
};
