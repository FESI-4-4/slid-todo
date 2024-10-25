import { useMutation, useQueryClient } from '@tanstack/react-query';
import baseFetch from '../api/baseFetch';

export interface DeleteTodoInput {
  todoId: number;
}

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ todoId }: DeleteTodoInput) => {
      return baseFetch(`/4-4-dev/todos/${todoId}`, {
        method: 'DELETE',
      });
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
