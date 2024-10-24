import { InfiniteData, QueryKey, useQueryClient } from '@tanstack/react-query';
import { TodosResponse } from '../hooks/useUpdateTodoMutation';

export const isTodosQueryKey = (queryKey: QueryKey): queryKey is ['todos'] | ['todos', Record<string, unknown>] => {
  return Array.isArray(queryKey) && queryKey[0] === 'todos';
};

export const findMatchingTodoQueries = (queryClient: ReturnType<typeof useQueryClient>) => {
  return queryClient.getQueriesData<InfiniteData<TodosResponse>>({
    predicate: (query) => isTodosQueryKey(query.queryKey),
  });
};
