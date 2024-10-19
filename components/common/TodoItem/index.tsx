import IconInactive from '@/public/icons/IconInactive';
import TodoIcon from './TodoIcon';

interface TodoItemProps {
  data: TodoItemData;
}

interface TodoItemData {
  noteId: number;
  done: boolean;
  linkUrl: string;
  fileUrl: string;
  title: string;
  id: number;
  goal: {
    id: number;
    title: string;
  };
  userId: number;
  teamId: string;
  updatedAt: string;
  createdAt: string;
}

const TodoItem: React.FC<TodoItemProps> = ({ data }) => {
  return (
    <div className='flex justify-between items-center text-sm group'>
      <div className='flex items-center gap-x-2'>
        <IconInactive />
        {data.title}
      </div>
      <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
        <TodoIcon />
      </div>
    </div>
  );
};

export default TodoItem;
