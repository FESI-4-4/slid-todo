import { useQuery } from '@tanstack/react-query';
import { Goals } from '../types';
import baseFetch from '../api/baseFetch';

const useGoalsQuery = (
  searchParams: {
    cursor?: number;
    size?: number;
    sortOrder?: 'oldest' | 'newest';
  } = {}
) => {
  const typed = Object.entries(searchParams).map(([key, value]) => [key, String(value)]);
  const params = new URLSearchParams(typed);

  return useQuery<Goals>({
    queryKey: ['todos', searchParams],
    queryFn: () => baseFetch(`/4-4-dev/goals?${params.toString()}`),
  });
};
export default useGoalsQuery;
