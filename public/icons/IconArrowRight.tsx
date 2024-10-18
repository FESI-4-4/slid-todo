const IconArrowRight = ({ size = 24, color = '#475569' }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 24 24' fill='none'>
      <path
        d='M10 7L14.9999 12L10 16.9999'
        stroke={color}
        strokeWidth='1.8'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default IconArrowRight;
