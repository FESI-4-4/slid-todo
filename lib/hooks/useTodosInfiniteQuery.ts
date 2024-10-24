import { useInfiniteQuery } from '@tanstack/react-query';
import baseFetch from '../api/baseFetch';

interface TodosSearchParams {
  goalId?: number;
  done?: boolean;
  size?: number;
}

export const useTodosInfiniteQuery = (searchParams: TodosSearchParams = {}) => {
  return useInfiniteQuery({
    queryKey: ['todos', searchParams],
    queryFn: ({ pageParam }) => {
      // 기본 파라미터 설정
      const stringifiedParams: Record<string, string> = {
        size: String(searchParams.size || 20),
        ...(searchParams.goalId !== undefined && { goalId: String(searchParams.goalId) }),
        ...(searchParams.done !== undefined && { done: String(searchParams.done) }),
      };

      // pageParam이 초기값(1)이 아닐 때만 cursor 추가
      if (pageParam !== 1) {
        stringifiedParams.cursor = String(pageParam);
      }

      const params = new URLSearchParams(stringifiedParams);
      return baseFetch(`/4-4-dev/todos?${params.toString()}`);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.nextCursor) {
        return lastPage.nextCursor;
      }
      return undefined;
    },
    staleTime: Infinity,
  });
};
