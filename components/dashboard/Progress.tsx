import { IconProgressImage } from '@/public/icons/IconProgessImage';
import { IconProgress } from '@/public/icons/IconProgress';

const Progress = () => {
  return (
    <section className='flex justify-between w-[588px] h-[250px] bg-blue-500 rounded-xl'>
      <div className='flex-col px-6 py-4 '>
        <div className='w-10 h-10 bg-slate-900 rounded-[15px] grid place-content-center'>
          <IconProgress />
        </div>
        <div className='flex-col mt-4'>
          <p className='text-white text-lg font-semibold'>내 진행 상황</p>
          <span className='flex mt-1 items-center gap-1'>
            <p className='text-white text-3xl font-bold'>74</p>
            <p className='text-white text-base font-semibold'>%</p>
          </span>
        </div>
      </div>
      <div className='flex items-end last:ml-0 last:mt-0'>
        <IconProgressImage />
      </div>
    </section>
  );
};
export default Progress;
