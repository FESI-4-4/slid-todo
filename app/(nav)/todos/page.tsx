'use client';

import AllTodoList from '@/components/AllTodos/AllTodoList';
import Filters from '@/components/AllTodos/Filters';
import HeaderAllTodos from '@/components/AllTodos/HeaderAllTodos';
import { getTodos, TodoItemData } from '@/lib/api/getTodos';
import { useEffect, useState } from 'react';

export default function Alltodos() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    const fetchTodos = async () => {
      const { todos, totalCount } = await getTodos({ done: false, size: 20 });
      setTodos(todos);
      setTotalCount(totalCount);
    };
    fetchTodos();
  }, []);
  return (
    <div className='bg-slate-100'>
      <main className='mx-20 my-6 '>
        <HeaderAllTodos length={totalCount} />
        <div className='sm:p-6 p-4 bg-white rounded-xl flex flex-col gap-4'>
          <Filters />
          <AllTodoList todos={todos} />
        </div>
      </main>
    </div>
  );
}
