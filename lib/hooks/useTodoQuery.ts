import { useQuery } from '@tanstack/react-query';
import fetchTodoById from '../api/fetchTodoById';
import { Todo } from '../types';

const useTodoQuery = (todoId: string) =>
  useQuery<Todo>({
    queryKey: ['todos', todoId],
    queryFn: () => fetchTodoById(todoId),
  });

export default useTodoQuery;
