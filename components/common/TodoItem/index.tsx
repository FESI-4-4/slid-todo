import IconInactive from '@/public/icons/IconInactive';
import TodoIcon from './TodoIcon';
import GoalTitle from './GoalTitle';

interface TodoItemProps {
  data: TodoItemData;
  viewGoal?: boolean;
}

export interface Goal {
  id: number;
  title: string;
}

interface TodoItemData {
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

const TodoItem: React.FC<TodoItemProps> = ({ data, viewGoal }) => {
  return (
    <div className='text-sm group'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-2'>
          <IconInactive />
          {data.title}
        </div>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <TodoIcon />
        </div>
      </div>
      {viewGoal && data.goal.id && <GoalTitle goal={data.goal} />}
    </div>
  );
};

export default TodoItem;
