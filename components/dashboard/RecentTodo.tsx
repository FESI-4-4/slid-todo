import IconArrowRight from '@/public/icons/IconArrowRight';
import { IconTodoRecently } from '@/public/icons/IconTodoRecently';

const RecentTodo = () => {
  return (
    <section className='px-6 py-4  w-[588px] h-[250px] bg-white rounded-xl border border-slate-100'>
      <div className='flex items-center w-full gap-2'>
        <div className='w-10 h-10 bg-blue-500 rounded-[15px] grid place-content-center'>
          <IconTodoRecently />
        </div>
        <p className='text-slate-800 text-lg font-semibold text-nowrap'>최근 등록한 할 일</p>
        <div className='flex items-center last:ml-auto'>
          <p className='text-slate-600 text-sm font-medium leading-tight text-nowrap'>모두 보기</p>
          <IconArrowRight />
        </div>
      </div>
      <div className='w-full h-auto my-6'>리스트</div>
    </section>
  );
};
export default RecentTodo;
