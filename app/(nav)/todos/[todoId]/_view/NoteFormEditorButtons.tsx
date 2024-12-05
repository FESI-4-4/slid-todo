'use client';

import { useCurrentEditor } from '@tiptap/react';
import { ChangeEventHandler } from 'react';
import IconTextAlignLeft from '@/public/icons/IconTextAlignLeft';
import IconTextAlignMiddle from '@/public/icons/IconTextAlignMiddle';
import IconTextAlignRight from '@/public/icons/IconTextAlignRight';
import IconTextBold from '@/public/icons/IconTextBold';
import IconTextBulletPoint from '@/public/icons/IconTextBulletPoint';
import IconTextColor from '@/public/icons/IconTextColor';
import IconTextItalics from '@/public/icons/IconTextItalics';
import IconTextNumberPoint from '@/public/icons/IconTextNumberPoint';
import IconTextUnderline from '@/public/icons/IconTextUnderline';
import IconTextHighlight from '@/public/icons/IconTextHighlight';

const NoteFormEditorButtons = () => {
  const { editor } = useCurrentEditor();

  // TODO: 코드가 반복되는데 좀 더 깔끔하게 리팩토링할 수 있는 방법이 있을까요?
  const handleBold = () => editor?.chain().focus().toggleBold().run();
  const handleItalics = () => editor?.chain().focus().toggleItalic().run();
  const handleUnderline = () => editor?.chain().focus().toggleUnderline().run();
  const handleAlignLeft = () => editor?.chain().focus().setTextAlign('left').run();
  const handleAlignCenter = () => editor?.chain().focus().setTextAlign('center').run();
  const handleAlignRight = () => editor?.chain().focus().setTextAlign('right').run();
  const handleBulletList = () => editor?.chain().focus().toggleBulletList().run();
  const handleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();
  const handleChangeHighlight: ChangeEventHandler<HTMLInputElement> = (e) =>
    editor?.chain().focus().toggleHighlight({ color: e.target.value }).run();
  const handleChangeColor: ChangeEventHandler<HTMLInputElement> = (e) =>
    editor?.chain().focus().setColor(e.target.value).run();

  return (
    <>
      <div className='flex md:gap-1'>
        <button type='button' onClick={handleBold} aria-label='bold'>
          <IconTextBold className='cursor-pointer hover:bg-slate-100' />
        </button>
        <button type='button' onClick={handleItalics} aria-label='italics'>
          <IconTextItalics className='cursor-pointer hover:bg-slate-100' />
        </button>
        <button type='button' onClick={handleUnderline} aria-label='underline'>
          <IconTextUnderline className='cursor- hover:bg-slate-100' />
        </button>
      </div>
      <div className='flex md:gap-1'>
        <button type='button' onClick={handleAlignLeft} aria-label='align left'>
          <IconTextAlignLeft className='cursor-pointer hover:bg-slate-100' />
        </button>
        <button type='button' onClick={handleAlignCenter} aria-label='align center'>
          <IconTextAlignMiddle className='cursor-pointer hover:bg-slate-100' />
        </button>
        <button type='button' onClick={handleAlignRight} aria-label='align right'>
          <IconTextAlignRight className='cursor-pointer hover:bg-slate-100' />
        </button>
      </div>
      <div className='flex md:gap-1'>
        <button type='button' onClick={handleBulletList} aria-label='unordered list'>
          <IconTextBulletPoint className='cursor-pointer hover:bg-slate-100' />
        </button>
        <button type='button' onClick={handleOrderedList} aria-label='ordered list'>
          <IconTextNumberPoint className='cursor-pointer hover:bg-slate-100' />
        </button>
        <label
          htmlFor='textHighlight'
          className='relative focus-within:outline focus-within:outline-2 -outline-offset-1'
          aria-label='text highlight'
        >
          <input id='textHighlight' type='color' className='w-0 h-0 absolute' onChange={handleChangeHighlight} />
          <IconTextHighlight className='cursor-pointer hover:bg-slate-100' />
        </label>
        <label
          htmlFor='textColor'
          className='relative focus-within:outline focus-within:outline-2 -outline-offset-1'
          aria-label='text color'
        >
          <input id='textColor' type='color' className='w-0 h-0 absolute' onChange={handleChangeColor} />
          <IconTextColor className='cursor-pointer hover:bg-slate-100' />
        </label>
      </div>
    </>
  );
};
export default NoteFormEditorButtons;
