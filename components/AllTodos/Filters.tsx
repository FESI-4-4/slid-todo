'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import Button from '../common/ButtonSlid';

const Filters: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const status = searchParams.get('status') || 'all';

  const handleFilterClick = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'all') {
      params.delete('status');
    } else {
      params.set('status', value);
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className='flex gap-2'>
      <Button
        variant={status === 'all' ? 'filled' : 'outlined'}
        className='text-sm rounded-[17px] px-3 py-1'
        onClick={() => handleFilterClick('all')}
      >
        전체
      </Button>
      <Button
        variant={status === 'in-progress' ? 'filled' : 'outlined'}
        className='text-sm rounded-[17px] px-3 py-1'
        onClick={() => handleFilterClick('in-progress')}
      >
        진행중
      </Button>
      <Button
        variant={status === 'completed' ? 'filled' : 'outlined'}
        className='text-sm rounded-[17px] px-3 py-1'
        onClick={() => handleFilterClick('completed')}
      >
        완료
      </Button>
    </div>
  );
};

export default Filters;
