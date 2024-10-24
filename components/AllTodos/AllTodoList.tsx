import { TodoItemData } from '@/lib/api/getTodos';
import TodoItem from '../common/TodoItem';

interface AllTodoListProps {
  todos: TodoItemData[];
}

const AllTodoList: React.FC<AllTodoListProps> = ({ todos }) => {
  if (!todos.length) {
    return <div className='flex justify-center items-center text-sm text-slate-500'>등록한 일이 없어요</div>;
  }

  return (
    <div>
      <ul className='flex flex-col gap-y-2'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem data={todo} viewGoal />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodoList;
