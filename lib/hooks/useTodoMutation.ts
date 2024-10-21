import { useMutation } from '@tanstack/react-query';
import baseFetch from '../api/baseFetch';

const useTodoMutation = (todoId: string) =>
  useMutation({
    mutationKey: ['todos', todoId],
    mutationFn: (todoId?: string, options?: RequestInit) =>
      baseFetch(`/4-4-dev/todos${todoId ? '/' + todoId : ''}`, options),
  });

export default useTodoMutation;
