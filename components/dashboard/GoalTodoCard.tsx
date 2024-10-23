'use client';
import TodoItem from '../common/TodoItem';
import useTodosQuery from '@/lib/hooks/useTodosQuery';
import { Goal } from '@/lib/types';

const GoalTodoCard = ({ goal }: { goal: Goal }) => {
  const todos = useTodosQuery(`${goal.id}-todos`, { goalId: goal.id, done: false, size: 5 }).data;
  const dones = useTodosQuery(`${goal.id}-dones`, { goalId: goal.id, done: true, size: 5 }).data;

  return (
    <div className='w-full flex-col justify-center items-center'>
      <div className='flex justify-between'>
        <p className='text-lg font-bold'>{goal.title || '목표이름'}</p>
        <button>+할일추가</button>
      </div>
      <div className='my-2 w-full'>progress bar</div>
      <div className='flex gap-3'>
        <div className='w-full flex-col'>
          <p className='bold text-sm font-semibold'>To do</p>
          {todos?.todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
        <div className='w-full flex-col'>
          <p className='bold text-sm font-semibold'>Done</p>
          {dones?.todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
      </div>
      <button className='w-full'>더보기/펼치기</button>
    </div>
  );
};

export default GoalTodoCard;
