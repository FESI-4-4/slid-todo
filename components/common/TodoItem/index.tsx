import IconInactive from '@/public/icons/IconInactive';
import TodoIcon from './TodoIcon';
import GoalTitle from './GoalTitle';
import IconStateActive from '@/public/icons/IconStateActive';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useUpdateTodoMutation } from '@/lib/hooks/useUpdateTodoMutation';

interface TodoItemProps {
  data: TodoItemData;
  viewGoal?: boolean;
}

export interface Goal {
  id: number;
  title: string;
}

export interface TodoItemData {
  noteId: number | null;
  done: boolean;
  linkUrl: string | null;
  fileUrl: string | null;
  title: string;
  id: number;
  goal: Goal | null;
  userId: number;
  teamId: string;
  updatedAt: string;
  createdAt: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ data, viewGoal }) => {
  const updateTodoMutation = useUpdateTodoMutation();
  const handleToggle = () => {
    updateTodoMutation.mutate({
      id: data.id,
      updates: { done: !data.done },
    });
  };
  return (
    <div className='text-sm group'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-2 min-w-0 flex-1'>
          <div onClick={handleToggle}>
            {data.done ? (
              <IconStateActive className='cursor-pointer shrink-0' />
            ) : (
              <IconInactive className='cursor-pointer shrink-0' />
            )}
          </div>
          <div className={twMerge(clsx('truncate hover:underline cursor-pointer', data.done && 'line-through'))}>
            {data.title}
          </div>
        </div>
        <div className='transition-all duration-200 w-0 group-hover:w-auto group-focus-within:w-auto'>
          <TodoIcon data={data} />
        </div>
      </div>
      {viewGoal && data.goal?.id && <GoalTitle goal={data.goal} />}
    </div>
  );
};

export default TodoItem;
