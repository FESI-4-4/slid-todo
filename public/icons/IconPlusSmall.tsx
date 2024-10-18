import React, { SVGProps } from 'react';

export const IconPlusSmall = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='17' height='16' viewBox='0 0 17 16' fill='none' {...props}>
      <path d='M3.8335 8H12.8335' stroke={props.stroke || 'white'} stroke-width='1.8' stroke-linecap='round' />
      <path d='M8.3335 12.5V3.5' stroke={props.stroke || 'white'} stroke-width='1.8' stroke-linecap='round' />
    </svg>
  );
};
