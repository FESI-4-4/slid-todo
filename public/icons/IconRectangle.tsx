import { SVGProps } from 'react';

export const IconRectangle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='none' viewBox='0 0 28 28' {...props}>
      <rect width='28' height='28' fill='#DBEAFE' rx='8.4' />
      <path
        fill='#fff'
        d='m6.922 16.717 6.915-2.912a.42.42 0 0 1 .326 0l6.915 2.912a.421.421 0 0 1 0 .776l-6.915 2.911a.42.42 0 0 1-.326 0l-6.915-2.911a.421.421 0 0 1 0-.776'
        fillOpacity='.8'
      />
      <path
        fill='#93C5FD'
        d='m6.922 13.35 6.915-2.912a.42.42 0 0 1 .326 0l6.915 2.912a.421.421 0 0 1 0 .776l-6.915 2.911a.42.42 0 0 1-.326 0l-6.915-2.911a.421.421 0 0 1 0-.776'
      />
      <path
        fill='#60A5FA'
        d='m6.922 9.98 6.915-2.911a.42.42 0 0 1 .326 0l6.915 2.911a.421.421 0 0 1 0 .777l-6.915 2.911a.42.42 0 0 1-.326 0l-6.915-2.911a.421.421 0 0 1 0-.777'
      />
    </svg>
  );
};
