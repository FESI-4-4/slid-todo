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
  return <div></div>;
};

export default TodoItem;
