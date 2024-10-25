import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

const PageContainer = ({ children, className = '', containerClassName = '' }: PageContainerProps) => {
  return (
    <div className={twMerge(clsx('bg-slate-100 w-full h-full overflow-auto', containerClassName))}>
      <div className={twMerge(clsx('lg:px-20 sm:px-6 px-4 py-6 max-w-[792px] h-full', className))}>{children}</div>
    </div>
  );
};

export default PageContainer;
