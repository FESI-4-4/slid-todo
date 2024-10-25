import IconFile from '@/public/icons/IconFile';
import IconLink from '@/public/icons/IconLink';
import IconNoteView from '@/public/icons/IconNoteView';
import IconNoteWrite from '@/public/icons/IconNoteWrite';
import DropdownMenu from '../DropdownMenu';
import { IconKebabWithCircle } from '@/public/icons/IconKebabWithCircle';
import { TodoItemData } from '.';
import { useDeleteTodoMutation } from '@/lib/hooks/useDeleteTodoMutation';

interface TodoIconProps {
  data: TodoItemData;
}

const TodoIcon: React.FC<TodoIconProps> = ({ data }) => {
  const deleteTodo = useDeleteTodoMutation();

  const handleDelete = () => {
    // 삭제할지 모달을 띄워주면 좋겠음
    deleteTodo.mutate({ todoId: data.id });
  };

  const handleDropdaownMenuClick = (item: string) => {
    if (item === '수정하기') {
      // 수정하기페이지로 이동
    } else if (item === '삭제하기') {
      handleDelete();
    }
  };

  const handleDownloadFile = (fileUrl: string | null) => {
    if (!fileUrl) return;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const handleOpenLink = (linkUrl: string | null) => {
    if (!linkUrl) return;
    window.open(linkUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className='flex items-center gap-x-2'>
      {data.fileUrl && (
        <IconFile
          className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer'
          onClick={() => handleDownloadFile(data.fileUrl)}
        />
      )}
      {data.linkUrl && (
        <IconLink
          className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer'
          onClick={() => handleOpenLink(data?.linkUrl)}
        />
      )}
      {data.noteId && <IconNoteView className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />}
      <IconNoteWrite className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />
      <div className='flex justify-center items-center'>
        <DropdownMenu
          icon={IconKebabWithCircle}
          dropdownList={['수정하기', '삭제하기']}
          onItemClick={handleDropdaownMenuClick}
          className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer transition-all duration-200 w-0 group-hover:w-auto group-focus-within:w-auto'
        />
      </div>
    </div>
  );
};

export default TodoIcon;
