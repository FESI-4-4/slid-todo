'use client';

import IconAddLink from '@/public/icons/IconAddLink';
import IconCheck from '@/public/icons/IconCheck';
import IconClose from '@/public/icons/IconClose';
import IconEmbed from '@/public/icons/IconEmbed';
import IconTextAlignLeft from '@/public/icons/IconTextAlignLeft';
import IconTextAlignMiddle from '@/public/icons/IconTextAlignMiddle';
import IconTextAlignRight from '@/public/icons/IconTextAlignRight';
import IconTextBold from '@/public/icons/IconTextBold';
import IconTextBulletPoint from '@/public/icons/IconTextBulletPoint';
import IconTextColor from '@/public/icons/IconTextColor';
import IconTextItalics from '@/public/icons/IconTextItalics';
import IconTextNumberPoint from '@/public/icons/IconTextNumberPoint';
import IconTextUnderline from '@/public/icons/IconTextUnderline';
import { useParams } from 'next/navigation';
import { ChangeEventHandler, useEffect, useRef, useState } from 'react';

type NoteFormProps = {
  title?: string;
  content?: string;
};

const NoteForm = ({ title: initTitle = '', content: initContent = '' }: NoteFormProps) => {
  const { todoId } = useParams();

  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => setTitle(e.target.value);
  const handleChangeContent: ChangeEventHandler<HTMLTextAreaElement> = (e) => setContent(e.target.value);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // if (window.localStorage.getItem('savedNote')) ;
    const id = setInterval(() => {
      window.localStorage.setItem(
        'savedNote' + todoId,
        JSON.stringify({ todoId, title: titleRef.current?.value, content: contentRef.current?.value })
      );
    }, 1000 * 60 * 5);

    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className='w-full bg-blue-50 text-blue-500 rounded-full py-2.5 px-3 flex gap-4 items-center mb-6'>
        <IconClose circleFill='fill-blue-500' className='cursor-pointer' />
        <p className='font-semibold text-sm grow'>임시 저장된 노트가 있어요. 저장된 노트를 불러오시겠어요?</p>
        <button className='rounded-full bg-white border border-blue-500 text-blue-500 text-sm font-semibold py-2 px-4'>
          불러오기
        </button>
      </div>
      <hr />
      <form className='grow w-full h-fit relative flex flex-col'>
        <div className='w-full relative h-7 my-3'>
          <input
            className='w-full text-lg font-medium focus-visible:outline-none'
            placeholder='노트의 제목을 입력해주세요'
            value={title}
            onChange={handleChangeTitle}
            ref={titleRef}
          />
          <p className='absolute right-0 top-0 text-slate-800 font-medium text-xs'>
            {22}/<span className='text-blue-500'>30</span>
          </p>
        </div>
        <hr />
        <div className='w-full my-3'>
          <p className='text-slate-800 text-xs font-medium'>
            공백포함 : 총 {0}자 | 공백제외 : 총 {0}자
          </p>
        </div>
        <div className='w-full rounded-full bg-slate-200 p-1 flex items-center gap-2 mb-4'>
          <div className='w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center'>
            <IconEmbed />
          </div>
          <p className='grow text-base font-normal text-slate-800'>link</p>
          <div className='w-6 h-6 rounded-full flex justify-center items-center'>
            <IconClose />
          </div>
        </div>
        <div className='grow'>
          <textarea
            ref={contentRef}
            placeholder='이 곳을 클릭해 노트 작성을 시작해주세요'
            className='resize-none w-full h-full focus-visible:outline-none text-slate-700'
            value={content}
            onChange={handleChangeContent}
          />
        </div>
        <div className='w-full border border-slate-200 rounded-full py-2.5 px-4 absolute bottom-0 bg-white flex gap-4'>
          <div className='flex gap-1'>
            <IconTextBold className='cursor-pointer hover:bg-slate-100' />
            <IconTextItalics className='cursor-pointer hover:bg-slate-100' />
            <IconTextUnderline className='cursor-pointer hover:bg-slate-100' />
          </div>
          <div className='flex gap-1'>
            <IconTextAlignLeft className='cursor-pointer hover:bg-slate-100' />
            <IconTextAlignMiddle className='cursor-pointer hover:bg-slate-100' />
            <IconTextAlignRight className='cursor-pointer hover:bg-slate-100' />
          </div>
          <div className='flex gap-1'>
            <IconTextBulletPoint className='cursor-pointer hover:bg-slate-100' />
            <IconTextNumberPoint className='cursor-pointer hover:bg-slate-100' />
            <IconTextColor className='cursor-pointer hover:bg-slate-100' />
          </div>
          <div className='grow flex justify-end'>
            <IconAddLink className='cursor-pointer hover:bg-slate-100' />
          </div>
          <div className='absolute top-0 -translate-y-full w-full bg-blue-50 text-blue-500 rounded-full py-2.5 px-6 -ml-4 -mt-4 flex gap-2 items-center'>
            <IconCheck />
            <p className='font-semibold text-sm'>
              임시 저장이 완료되었습니다 <span className='text-xs font-medium'>ㆍ {}초전</span>
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteForm;
