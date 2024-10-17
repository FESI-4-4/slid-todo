import React, { SVGProps } from 'react';

export const IconKebabWithCircle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx='12' cy='12' r='10' fill='#F8FAFC' />
      <g transform='translate(10, 6)'>
        <svg xmlns='http://www.w3.org/2000/svg' width='4' height='12' viewBox='0 0 4 12' fill='none'>
          <circle
            cx='1.94199'
            cy='6.00039'
            r='0.525'
            transform='rotate(-90 1.94199 6.00039)'
            fill='#94A3B8'
            stroke='#94A3B8'
            stroke-width='1.16667'
            stroke-linecap='round'
          />
          <circle
            cx='1.94199'
            cy='9.96719'
            r='0.525'
            transform='rotate(-90 1.94199 9.96719)'
            fill='#94A3B8'
            stroke='#94A3B8'
            stroke-width='1.16667'
            stroke-linecap='round'
          />
          <circle
            cx='1.94199'
            cy='2.03359'
            r='0.525'
            transform='rotate(-90 1.94199 2.03359)'
            fill='#94A3B8'
            stroke='#94A3B8'
            stroke-width='1.16667'
            stroke-linecap='round'
          />
        </svg>
      </g>
    </svg>
  );
};
