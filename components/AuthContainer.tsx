import MainLogo from '@/public/images/MainLogo';
import Link from 'next/link';
import React from 'react';

type link = {
  text: string;
  hrefText: string;
  href: string;
};

interface AuthContainerProps {
  children: React.ReactNode;
  link: link;
}

const AuthContainer: React.FC<AuthContainerProps> = ({ children, link }) => {
  return (
    <div className='flex flex-col justify-center items-center '>
      <MainLogo className={`mt-[140px] mb-[60px]`} />
      {children}
      <div className='flex gap-x-1 my-10 text-sm font-medium'>
        {link.text}
        <Link href={link.href}>
          <span className='text-link hover:underline'>{link.hrefText}</span>
        </Link>
      </div>
    </div>
  );
};

export default AuthContainer;
