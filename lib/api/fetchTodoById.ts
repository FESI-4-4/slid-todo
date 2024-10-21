import { Todo } from '../types';

const fetchTodoById = async (todoId: string) => {
  const response = await fetch(`/4-4-dev/todos?size=100`);

  const body = await response.json();

  const todo = body.todos.find((todo: Todo) => todo.id === Number(todoId));

  return todo;
};

export default fetchTodoById;
