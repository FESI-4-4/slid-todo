import { apiFetch } from './interceptor';

export interface Goal {
  id: number;
  title: string;
}

export interface TodoItemData {
  noteId: number;
  done: boolean;
  linkUrl: string;
  fileUrl: string;
  title: string;
  id: number;
  goal: Goal;
  userId: number;
  teamId: string;
  updatedAt: string;
  createdAt: string;
}

interface TodoResponse {
  todos: TodoItemData[];
  totalCount: number;
  nextCursor: number;
}

export const getTodos = async ({
  goalId,
  done,
  cursor,
  size = 20,
}: {
  goalId?: number;
  done?: boolean;
  cursor?: number;
  size?: number;
}): Promise<TodoResponse> => {
  const params = new URLSearchParams();
  if (goalId) params.append('goalId', goalId.toString());
  if (done !== undefined) params.append('done', done.toString());
  if (cursor) params.append('cursor', cursor.toString());
  if (size) params.append('size', size.toString());

  const response = await apiFetch(`/4-4-dev/todos?${params.toString()}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};
