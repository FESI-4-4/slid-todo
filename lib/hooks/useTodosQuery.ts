import { useQuery } from '@tanstack/react-query';
import { Todos } from '../types';
import baseFetch from '../api/baseFetch';

const useTodosQuery = (todoId: string) =>
  useQuery<Todos>({
    queryKey: ['todos', todoId],
    queryFn: () => baseFetch(`/4-4-dev/todos`),
  });

export default useTodosQuery;
