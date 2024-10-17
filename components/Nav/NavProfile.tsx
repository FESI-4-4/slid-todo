import { ImageProfile } from '@/public/images/ImageProfile';
import { ImageProfileSmall } from '@/public/images/ImageProfileSmall';

const Profile = () => {
  return (
    <div className='w-full flex justify-between px-4 py-6 gap-2 text-nowrap'>
      <div>
        <div className='w-8 h-8 bg-blue-50 rounded-xl flex justify-center items-center sm:hidden lg:hidden'>
          <ImageProfileSmall />
        </div>
        <div className='w-16 h-16 bg-blue-50 rounded-xl sm:flex lg:flex justify-center items-center hidden'>
          <ImageProfile />
        </div>
      </div>
      <div className='flex-grow flex-col'>
        <div className='text-xs font-semibold text-slate-800'>체다치즈</div>
        <div className='text-xs font-medium text-slate-600'>chedacheese@slid.kr</div>
      </div>
      <div className='flex items-end'>
        <div className='text-xs text-slate-400'>로그아웃</div>
      </div>
    </div>
  );
};
export default Profile;
