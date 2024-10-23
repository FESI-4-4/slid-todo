import { useQuery } from '@tanstack/react-query';
import { Todos } from '../types';
import baseFetch from '../api/baseFetch';

const useTodosQuery = (
  todoId: string,
  searchParams: {
    goalId?: number;
    done?: boolean;
    cursor?: number;
    size?: number;
  } = {}
) => {
  const typed = Object.entries(searchParams).map((entry) => [entry[0], String(entry[1])]);
  const params = new URLSearchParams(typed);

  return useQuery<Todos>({
    queryKey: ['todos', todoId],
    queryFn: () => baseFetch(`/4-4-dev/todos${params.size ? '?' + params.toString() : ''}`),
  });
};

export default useTodosQuery;
