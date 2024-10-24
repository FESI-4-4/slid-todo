import { IconDashboardFlag } from '@/public/icons/IconDashboardFlag';
import GoalTodoCard from './GoalTodoCard';
import useGoalsQuery from '@/lib/hooks/useGoalsQuery';

const GoalTodo = () => {
  const { data: goals } = useGoalsQuery({ size: 3 }); // 3로 고정, 이후 무한스크롤로 3개씩.
  return (
    <section className='flex mt-6'>
      <div className='flex-col px-6 py-4 w-[344px] sm:w-[637px] lg:w-[1200px] h-[768px] bg-white rounded-xl border border-slate-100'>
        <div className='flex items-center w-full gap-2'>
          <div className='w-10 h-10 bg-orange-500 rounded-[15px] grid place-content-center'>
            <IconDashboardFlag />
          </div>
          <p className='text-slate-800 text-lg font-semibold'>목표 별 할 일</p>
        </div>
        <div className='flex-col mt-6 space-y-4'>
          {goals?.goals.map((goal) => (
            <div key={goal.id} className='flex w-full h-[304px] p-6 bg-blue-50 rounded-[32px]'>
              <GoalTodoCard goal={goal} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GoalTodo;
