'use client';

import { type ReactNode } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

interface PageContainerProps {
  children: ReactNode;
  pageUrl?: string;
}

const PageContainer = ({ children }: PageContainerProps) => {
  const pageUrl = usePathname();
  function getTransformedUrl(pathname: string) {
    if (pathname.includes('/todos') && pathname.includes('/note')) {
      return '/note-edit';
    } else if (pathname.includes('/todos') && pathname.includes('/create')) {
      return '/note-create';
    } else if (pathname.includes('/dashboard')) {
      return '/dashboard';
    } else if (pathname.includes('/goals')) {
      return '/goals';
    }
    return 'default';
  }

  const transformedUrl = getTransformedUrl(pageUrl);

  const containerStyle = {
    default: 'bg-slate-100',
    '/note-create': 'bg-white flex',
    '/note-edit': 'bg-white flex',
    '/dashboard': 'bg-slate-100',
    '/goals': 'bg-slate-100',
  };

  const sectionStyle = {
    default: 'max-w-[800px]',
    '/dashboard': 'max-w-[1200px]',
    '/note-create': 'max-w-[800px] grow',
    '/note-edit': 'max-w-[800px] grow',
    '/goals': 'max-w-[1200px]',
  };

  return (
    <main className={twMerge(clsx('w-full h-full pt-[3.5rem] sm:pt-0', containerStyle[transformedUrl]))}>
      <section className={twMerge(clsx('h-full lg:px-20 sm:px-6 px-4 py-6', sectionStyle[transformedUrl]))}>
        {children}
      </section>
    </main>
  );
};

export default PageContainer;
