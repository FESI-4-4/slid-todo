import React, { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface ButtonSlidProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outlined';
  className?: string;
}

const Button: React.FC<ButtonSlidProps> = ({ children, variant = 'filled', className, disabled, ...props }) => {
  const baseClasses =
    'font-semibold py-3 px-6 rounded-xl flex justify-center items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';

  const variantClasses = {
    filled: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-800',
    outlined:
      'border border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 active:text-blue-800',
  };

  const disabledClasses = {
    filled: 'bg-slate-400 text-white border-slate-400  hover:bg-slate-400 ',
    outlined: 'border border-slate-400 text-slate-400',
  };

  const buttonClasses = twMerge(
    clsx(baseClasses, !disabled && variantClasses[variant], disabled && disabledClasses[variant], className)
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
