'use client';
import TodoItem from '../common/TodoItem';
import useTodosQuery from '@/lib/hooks/useTodosQuery';
import { Goal } from '@/lib/types';

const GoalTodoCard = ({ goal }: { goal: Goal }) => {
  const todos = useTodosQuery(`${goal.id}-todos`, { goalId: goal.id, done: false, size: 5 }).data;
  const dones = useTodosQuery(`${goal.id}-dones`, { goalId: goal.id, done: true, size: 5 }).data;

  return (
    <div className='w-full flex-col items-center'>
      <div className='flex justify-between'>
        <p>{goal.title || '목표이름'}</p>
        <button>+할일추가</button>
      </div>
      <div>progressbar</div>
      <div className='flex'>
        <div className='w-full flex-col bg-orange-200'>
          <p className='bold'>To do</p>
          {todos?.todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
        <div className='w-full flex-col bg-green-200'>
          <p className='bold'>Done</p>
          {dones?.todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
      </div>
      <button>더보기/펼치기</button>
    </div>
  );
};

export default GoalTodoCard;
