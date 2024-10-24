'use client';

import AllTodoList from '@/components/AllTodos/AllTodoList';
import Filters from '@/components/AllTodos/Filters';
import Button from '@/components/common/ButtonSlid';
import PageContainer from '@/components/common/PageLayout/PageContainer';
import PageHeader from '@/components/common/PageLayout/PageHeader';
import { useIntersectionObserver } from '@/lib/hooks/useIntersectionObserver';
import { useTodosInfiniteQuery } from '@/lib/hooks/useTodosInfiniteQuery';
import { IconPlusSmall } from '@/public/icons/IconPlusSmall';
import { useSearchParams } from 'next/navigation';

export default function Alltodos() {
  const params = useSearchParams();
  const status = params.get('status');

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } = useTodosInfiniteQuery({
    size: 20,
    done: status === 'completed' ? true : status === 'in-progress' ? false : undefined,
  });

  const loadMoreRef = useIntersectionObserver({
    onIntersect: fetchNextPage,
    enabled: !!hasNextPage && !isFetching,
    threshold: 0.5,
    rootMargin: '100px',
  });

  const todos = data?.pages.flatMap((page) => page.todos) ?? [];
  const totalCount = data?.pages[0]?.totalCount ?? 0;

  if (isLoading) {
    return <div>불러오는 중...</div>;
  }

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
        <div ref={loadMoreRef} className='h-10 flex items-center justify-center'>
          {isFetching && <div>불러오는 중...</div>}
        </div>
      </div>
    </PageContainer>
  );
}
