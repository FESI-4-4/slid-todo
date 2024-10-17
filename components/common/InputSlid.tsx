import React, { useState, ChangeEvent } from 'react';
import IconArrowDown from '@/public/icons/IconArrowDown';
import IconVisibilityOn from '@/public/icons/IconVisibilityOn';
import IconVisibilityOff from '@/public/icons/IconVisibilityOff';

interface Option {
  value: string;
  label: string;
}

interface InputSlidProps {
  type?: 'text' | 'password' | 'email' | 'select';
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  error?: string;
  className?: string;
  options?: Option[];
}

const InputSlid: React.FC<InputSlidProps> = ({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  error,
  className = '',
  options = [],
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const baseInputClass = `
    w-full px-6 py-3 rounded-xl
    bg-slate-50  text-slate-800 placeholder-slate-400
    focus:outline-none focus:ring-1 focus:ring-blue-500
    ${error ? 'ring-1 ring-red-700' : ''}
    ${className}
  `;

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-slate-800 mb-1">{label}</label>}
      <div className="relative">
        {type === 'select' ? (
          <select className={`${baseInputClass} appearance-none pr-10`} value={value} onChange={onChange}>
            <option disabled value="">
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
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            className={baseInputClass}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )}

        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {showPassword ? <IconVisibilityOn /> : <IconVisibilityOff />}
          </button>
        )}

        {type === 'select' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none ">
            <IconArrowDown />
          </div>
        )}
      </div>
      {error && <p className="mt-2 ml-4 text-sm text-red-700">{error}</p>}
    </div>
  );
};

export default InputSlid;
