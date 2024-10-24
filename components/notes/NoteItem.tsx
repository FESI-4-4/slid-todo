import { IconRectangle } from '@/public/icons/IconRectangle';
import DropdownMenu from '../common/DropdownMenu';
import { IconKebabWithCircle } from '@/public/icons/IconKebabWithCircle';
import { Note } from '@/app/(nav)/notes/[goalId]/page';

interface NoteItemProps {
  note: Note;
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  return (
    <div className='p-6 bg-white flex flex-col space-y-4 rounded-xl group'>
      <div className='flex justify-between items-center'>
        <IconRectangle />
        <DropdownMenu
          icon={IconKebabWithCircle}
          dropdownList={['수정하기', '삭제하기']}
          onItemClick={(item) => console.log(item)}
          className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer transition-all duration-200 w-0 group-hover:w-auto group-focus-within:w-auto'
        />
      </div>
      <div className='flex flex-col gap-y-3'>
        <h2 className='text-lg font-medium line-clamp-2'>{note.title}</h2>
        <hr />
        <div className='flex space-x-2 text-slate-700'>
          <div className='rounded-md bg-slate-100 p-1 text-xs font-medium shrink-0'>To do</div>
          <p className='line-clamp-1'>{note.todo.title}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
