import { SVGProps } from 'react';

const IconCheck = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
      <rect x='3.5' y='3.5' width='17' height='17' rx='5.5' fill='white' stroke='#E2E8F0' />
    </svg>
  );
};
export default IconCheck;
