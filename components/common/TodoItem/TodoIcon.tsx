'use client';

import IconFile from '@/public/icons/IconFile';
import IconLink from '@/public/icons/IconLink';
import IconNoteView from '@/public/icons/IconNoteView';
import IconNoteWrite from '@/public/icons/IconNoteWrite';
import DropdownMenu from '../DropdownMenu';
import { IconKebab } from '@/public/icons/IconKebab';

const TodoIcon = () => {
  return (
    <div className='flex items-center gap-x-2'>
      <IconFile />
      <IconLink />
      <IconNoteWrite />
      <IconNoteView />
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
