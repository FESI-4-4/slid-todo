import { IconFlagSmall } from '@/public/icons/IconFlagSmall';
import ButtonSlid from '../common/ButtonSlid';
import { IconPlusSmall } from '@/public/icons/IconPlusSmall';

const NavGoal = () => {
  return (
    <div className='w-full flex justify-between px-4 py-6 gap-2 text-nowrap'>
      <div>
        <div className='w-6 h-6 flex justify-center items-center'>
          <IconFlagSmall />
        </div>
      </div>
      <div className='flex-grow flex-col'>
        <div className='text-lg font-medium text-slate-800'>목표</div>
      </div>
      <div className='flex items-center sm:hidden lg:hidden mr-5'>
        <ButtonSlid variant='outlined' className='gap-[2px] rounded-xl text-sm w-[84px] px-3 py-2'>
          <IconPlusSmall stroke='#3B82F6' />
          <span>새 목표</span>
        </ButtonSlid>
      </div>
    </div>
  );
};
export default NavGoal;
