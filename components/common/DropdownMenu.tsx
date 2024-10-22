'use client';
import React, { useState, useEffect, useRef, ComponentType, SVGProps } from 'react';

interface DropdownProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  dropdownList: string[];
  onItemClick: (item: string) => void;
  className?: string;
}

const DropdownMenu = ({ icon: Icon, dropdownList, onItemClick, className: iconButtonClasses }: DropdownProps) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex-col justify-center items-center relative inline-block'>
      <button
        onClick={toggleDropdown}
        className='rounded focus:outline-none flex justify-center items-center'
        aria-label='더보기 메뉴 열기'
      >
        <Icon width={24} height={24} className={iconButtonClasses} />
      </button>

      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className='absolute right-0 mt-2 w-auto bg-white rounded-xl shadow-[4px_4px_10px_-2px_rgba(0,0,0,0.05)] items-center'
        >
          <ul className='flex flex-col text-nowrap text-sm sm:text-lg lg:text-lg text-slate-700 justify-center items-center text-center'>
            {dropdownList.map((listItem, idx) => (
              <li
                key={idx}
                className='flex justify-center items-center text-center px-4 pt-2 pb-[6px] hover:bg-gray-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl'
                onClick={() => {
                  onItemClick(listItem);
                  closeDropdown();
                }}
              >
                {listItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
