import { SVGProps } from 'react';
const IconEmbed = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="0.75" y="0.75" width="14.2143" height="9.5" rx="0.821429" stroke="white" stroke-width="1.5" />
      <rect x="2.25" y="2" width="3.5" height="7" rx="0.785714" fill="#93C5FD" />
      <path
        d="M7.07153 7.46418V3.92847M7.07153 3.92847H10.6072M7.07153 3.92847L11.0001 7.85704"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconEmbed;
