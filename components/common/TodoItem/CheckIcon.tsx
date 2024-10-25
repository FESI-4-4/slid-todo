import { useUpdateTodoMutation } from '@/lib/hooks/useUpdateTodoMutation';
import IconInactive from '@/public/icons/IconInactive';
import IconStateActive from '@/public/icons/IconStateActive';

interface CheckIconProps {
  done: boolean;
  id: number;
}

const CheckIcon: React.FC<CheckIconProps> = ({ done, id }) => {
  const updateTodo = useUpdateTodoMutation();

  const handleToggle = () => {
    updateTodo.mutate({
      id: id,
      updates: { done: !done },
    });
  };
  return (
    <div onClick={handleToggle}>
      {done ? (
        <IconStateActive className='cursor-pointer shrink-0' />
      ) : (
        <IconInactive className='cursor-pointer shrink-0' />
      )}
    </div>
  );
};

export default CheckIcon;
