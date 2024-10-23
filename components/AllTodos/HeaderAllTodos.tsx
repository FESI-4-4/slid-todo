import Button from '../common/ButtonSlid';
import { IconPlusSmall } from '@/public/icons/IconPlusSmall';

interface HeaderAllTodosProps {
  length: number;
}

const HeaderAllTodos: React.FC<HeaderAllTodosProps> = ({ length }) => {
  return (
    <div className='mb-4 flex items-center justify-between'>
      <h1 className='text-slate-900 sm:text-lg font-semibold'>모든 할 일 ({length})</h1>
      <Button className='border-none gap-1' variant='outlined'>
        <IconPlusSmall stroke='#3B82F6' />
        할일 추가
      </Button>
    </div>
  );
};

export default HeaderAllTodos;
