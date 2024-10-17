'use client';
import { ImageLogoWithText } from '@/public/images/ImageLogoWithText';
import { usePathname } from 'next/navigation';
import Profile from './NavProfile';
import NavDashBoard from './NavDashBoard';
import NavGoal from './NavGoal';
const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className='w-full h-full flex-col'>
      {pathname === '/login' || pathname === '/signup' ? (
        <></>
      ) : (
        <nav className='flex-col'>
          <div className='py-2 px-[5px] ml-4 mt-3'>
            <ImageLogoWithText />
          </div>
          <div className='flex-col divide-y'>
            <Profile />
            <NavDashBoard />
            <NavGoal />
          </div>
        </nav>
      )}
    </div>
  );
};
export default NavBar;
