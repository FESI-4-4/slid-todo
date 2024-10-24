'use client';

import AllTodoList from '@/components/AllTodos/AllTodoList';
import Filters from '@/components/AllTodos/Filters';
import Button from '@/components/common/ButtonSlid';
import PageContainer from '@/components/common/PageLayout/PageContainer';
import PageHeader from '@/components/common/PageLayout/PageHeader';
import { getTodos, TodoItemData } from '@/lib/api/getTodos';
import { IconPlusSmall } from '@/public/icons/IconPlusSmall';
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
    <PageContainer>
      <PageHeader title={`모든 할 일 (${totalCount})`}>
        <Button className='border-none gap-1 p-0 active:bg-none' variant='outlined'>
          <IconPlusSmall stroke='#3B82F6' />
          할일 추가
        </Button>
      </PageHeader>
      <div className='sm:p-6 p-4 bg-white rounded-xl flex flex-col gap-4'>
        <Filters />
        <AllTodoList todos={todos} />
      </div>
    </PageContainer>
  );
}
