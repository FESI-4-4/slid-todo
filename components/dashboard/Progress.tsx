import { ImageProgress } from '@/public/images/ImageProgress';
import { ImageProgressMobile } from '@/public/images/ImageProgressMobile';
import { ImageProgressTablet } from '@/public/images/ImageProgressTablet';
import { IconProgress } from '@/public/icons/IconProgress';

const Progress = () => {
  return (
    <section
      className=' relative flex justify-between w-[343px] h-[250px] 
    sm:w-[306px] sm:h-[250px]
    lg:w-[588px] lg:h-[250px] bg-blue-500 rounded-xl'
    >
      <div className='flex-col px-6 pt-4'>
        <div className='w-10 h-10 bg-slate-900 rounded-[15px] grid place-content-center'>
          <IconProgress />
        </div>
        <div className='flex-col mt-4'>
          <p className='text-white text-lg font-semibold text-nowrap'>내 진행 상황</p>
          <span className='flex mt-1 items-center gap-1 text-nowrap'>
            <p className='text-white text-3xl font-bold'>74</p>
            <p className='text-white text-base font-semibold'>%</p>
          </span>
        </div>
      </div>
      <div className='absolute right-0 bottom-0'>
        <ImageProgressMobile className='block sm:hidden lg:hidden' />
        <ImageProgressTablet className='hidden sm:block lg:hidden ' />
        <ImageProgress className='hidden sm:hidden lg:block ' />
      </div>
    </section>
  );
};
export default Progress;
