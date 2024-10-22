'use client';

import AllTodoList from '@/components/allTodos/AllTodoList';
import Filters from '@/components/allTodos/Filters';
import HeaderAllTodos from '@/components/allTodos/HeaderAllTodos';
import { getTodos, TodoItemData } from '@/lib/api/getTodos';
import { useEffect, useState } from 'react';

export default function Alltodos() {
  const [todos, setTodos] = useState<TodoItemData[]>([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const { todos } = await getTodos({ done: false, size: 20 });
      setTodos(todos);
    };
    fetchTodos();
  }, []);
  return (
    <div className='bg-slate-100'>
      <main className='mx-20 my-6 '>
        <HeaderAllTodos length={3} />
        <div className='sm:p-6 p-4 bg-white rounded-xl flex flex-col gap-4'>
          <Filters />
          <AllTodoList todos={todos} />
        </div>
      </main>
    </div>
  );
}
