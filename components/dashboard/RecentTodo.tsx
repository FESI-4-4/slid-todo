import IconArrowRight from '@/public/icons/IconArrowRight';
import { IconTodoRecently } from '@/public/icons/IconTodoRecently';
import TodoItem from '../common/TodoItem';
import useTodosQuery from '@/lib/hooks/useTodosQuery';
import Link from 'next/link';

const RecentTodo = () => {
  const { data: recentTodos } = useTodosQuery('recentTodos', { size: 4 }); // 4로 고정

  return (
    <section
      className='flex-col bg-white rounded-xl border border-slate-100 gap-4
      w-[343px] h-[250px] px-4 pb-6 pt-4
      sm:w-[306px] sm:h-[250px] sm:px-6 sm:pb-6 sm:pt-4
      lg:w-[588px] lg:h-[250px]
    '
    >
      <div className='flex items-center w-full gap-2'>
        <div className='w-10 h-10 bg-blue-500 rounded-[15px] grid place-content-center'>
          <IconTodoRecently />
        </div>
        <p className='text-slate-800 text-lg font-semibold text-nowrap'>최근 등록한 할 일</p>
        <Link href='/todos' className='flex last:ml-auto text-slate-600 text-sm font-medium leading-tight text-nowrap'>
          <span className='flex items-center'>모두 보기</span>
          <IconArrowRight />
        </Link>
      </div>
      <div className='w-full'>
        {recentTodos?.todos.map((todo) => (
          <TodoItem data={todo} key={todo.id} viewGoal />
        ))}
      </div>
    </section>
  );
};
export default RecentTodo;
