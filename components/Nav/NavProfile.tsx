import { User } from '@/lib/api/login';
import { getUserFromStorage, removeUserFromStorage } from '@/lib/utils/auth';
import { ImageProfile } from '@/public/images/ImageProfile';
import { ImageProfileSmall } from '@/public/images/ImageProfileSmall';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = getUserFromStorage();
    setUser(user);
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (res.ok) {
        removeUserFromStorage();
        window.location.href = '/login';
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className='w-full flex px-4 py-6 gap-2 text-nowrap'>
      <div className=''>
        <div className='w-8 h-8 bg-blue-50 rounded-xl flex justify-center items-center sm:hidden lg:hidden'>
          <ImageProfileSmall />
        </div>
        <div className='w-16 h-16 bg-blue-50 rounded-xl sm:flex lg:flex justify-center items-center hidden'>
          <ImageProfile />
        </div>
      </div>
      <div className=' w-full flex sm:flex-col lg:flex-col justify-between gap-2'>
        <div className='flex-grow flex-col '>
          <div className='text-xs sm:text-sm lg:text-sm font-semibold text-slate-800'>
            {user?.name ?? '불러오는 중...'}
          </div>
          <div className='text-xs sm:text-sm lg:text-sm font-medium text-slate-600'>
            {user?.email ?? '불러오는 중...'}
          </div>
        </div>
        <div className='flex items-end'>
          <button onClick={handleLogout} className='text-xs text-slate-400 mr-4'>
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
