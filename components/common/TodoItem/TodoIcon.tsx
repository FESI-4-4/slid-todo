'use client';

import IconFile from '@/public/icons/IconFile';
import IconLink from '@/public/icons/IconLink';
import IconNoteView from '@/public/icons/IconNoteView';
import IconNoteWrite from '@/public/icons/IconNoteWrite';
import DropdownMenu from '../DropdownMenu';
import { IconKebab } from '@/public/icons/IconKebab';
import { TodoItemData } from '.';

interface TodoIconProps {
  data: TodoItemData;
}

const TodoIcon: React.FC<TodoIconProps> = ({ data }) => {
  return (
    <div className='flex items-center gap-x-2'>
      {data.fileUrl && <IconFile className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />}
      {data.linkUrl && <IconLink className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />}
      {data.noteId && <IconNoteView className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />}
      <IconNoteWrite className='hover:stroke-slate-100 hover:fill-slate-200 cursor-pointer' />
      <div>
        <DropdownMenu
          icon={IconKebab}
          dropdownList={['수정하기', '삭제하기']}
          onItemClick={(item) => console.log(item)}
        />
      </div>
    </div>
  );
};

export default TodoIcon;
