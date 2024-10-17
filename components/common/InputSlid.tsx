import React, { useState, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import IconArrowDown from '@/public/icons/IconArrowDown';
import IconVisibilityOn from '@/public/icons/IconVisibilityOn';
import IconVisibilityOff from '@/public/icons/IconVisibilityOff';

interface Option {
  value: string;
  label: string;
}

interface InputSlidProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  type?: 'text' | 'password' | 'email' | 'select';
  label?: string;
  error?: string;
  options?: Option[];
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
}

const InputSlid = forwardRef<HTMLInputElement | HTMLSelectElement, InputSlidProps>(
  (
    {
      type = 'text',
      label,
      placeholder,
      error,
      className = '',
      options = [],
      inputClassName = '',
      labelClassName = '',
      errorClassName = '',
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const baseInputClass = twMerge(
      clsx(
        'w-full px-6 py-3 rounded-xl',
        'bg-slate-50 text-slate-800 placeholder-slate-400',
        'focus:outline-none focus:ring-1 focus:ring-blue-500',
        'text-sm sm:text-base',
        error && 'ring-1 ring-red-700',
        inputClassName
      )
    );

    const labelClass = twMerge(
      clsx('block text-base font-semibold text-slate-800 mb-3', 'text-sm sm:text-base', labelClassName)
    );

    const errorClass = twMerge(clsx('mt-2 ml-4 text-red-700', 'text-xs sm:text-sm', errorClassName));

    return (
      <div className={twMerge('mb-4', className)}>
        {label && (
          <label htmlFor={props.id || label} className={labelClass}>
            {label}
          </label>
        )}
        <div className='relative'>
          {type === 'select' ? (
            <select
              ref={ref as React.Ref<HTMLSelectElement>}
              className={`${baseInputClass} appearance-none pr-10`}
              {...props}
            >
              <option disabled value=''>
                {placeholder || '선택하세요'}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              id={props.id || label}
              type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
              className={baseInputClass}
              placeholder={placeholder}
              {...props}
            />
          )}

          {type === 'password' && (
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 pr-3 flex items-center'
            >
              {showPassword ? <IconVisibilityOn /> : <IconVisibilityOff />}
            </button>
          )}

          {type === 'select' && (
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
              <IconArrowDown />
            </div>
          )}
        </div>
        {error && <p className={errorClass}>{error}</p>}
      </div>
    );
  }
);

InputSlid.displayName = 'InputSlid';

export default InputSlid;
