import { TodoItemData } from '@/lib/api/getTodos';
import TodoItem from '../common/TodoItem';

interface AllTodoListProps {
  todos: TodoItemData[];
}

const AllTodoList: React.FC<AllTodoListProps> = ({ todos }) => {
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
