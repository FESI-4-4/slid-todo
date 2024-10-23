'use client';
import { useEffect, useState } from 'react';
import TodoItem, { TodoItemData } from '../common/TodoItem';
import { todosTodo, todosDone } from './tododummyGoal';
import { getTodos } from '@/lib/api/getTodos';
const GoalTodoCard = () => {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [dones, setDones] = useState<TodoItemData[]>([]);

  return (
    <div className='w-full flex-col items-center'>
      <div className='flex justify-between'>
        <p>{'목표이름'}</p>
        <button>+할일추가</button>
      </div>
      <div>progressbar</div>
      <div className='flex'>
        <div className='w-full flex-col bg-orange-200'>
          <p className='bold'>To do</p>
          {todos.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
        <div className='w-full flex-col bg-green-200'>
          <p className='bold'>Done</p>
          {dones.map((todo) => (
            <TodoItem data={todo} key={todo.id} />
          ))}
        </div>
      </div>
      <button>더보기/펼치기</button>
    </div>
  );
};

export default GoalTodoCard;
