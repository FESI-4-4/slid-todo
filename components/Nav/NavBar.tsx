'use client';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return <>{pathname === '/login' || pathname === '/signup' ? <></> : <nav>nav영역</nav>}</>;
};
export default NavBar;
