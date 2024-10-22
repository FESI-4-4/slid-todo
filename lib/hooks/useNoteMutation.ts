import { useMutation } from '@tanstack/react-query';
import baseFetch from '../api/baseFetch';

const useNoteMutation = (todoId: string) =>
  useMutation({
    mutationKey: ['todos', todoId, 'note'],
    mutationFn: ({ noteId, options }: { noteId?: string; options?: RequestInit }) =>
      baseFetch(`/4-4-dev/notes${noteId ? '/' + noteId : ''}`, options),
  });

export default useNoteMutation;
