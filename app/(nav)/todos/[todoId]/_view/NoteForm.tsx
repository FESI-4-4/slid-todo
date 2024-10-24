'use client';

import Button from '@/components/common/ButtonSlid';
import InputSlid from '@/components/common/InputSlid';
import { ModalClose, ModalContent, ModalProvider, ModalTrigger } from '@/components/common/Modal';
import useNoteMutation from '@/lib/hooks/useNoteMutation';
import useTodosQuery from '@/lib/hooks/useTodosQuery';
import IconAddLink from '@/public/icons/IconAddLink';
import IconCheck from '@/public/icons/IconCheck';
import IconClose from '@/public/icons/IconClose';
import IconEmbed from '@/public/icons/IconEmbed';
import IconFlag from '@/public/icons/IconFlag';
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
import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type NoteFormProps = {
  title?: string;
  content?: string;
  linkUrl?: string;
  method?: 'POST' | 'PATCH';
  noteId?: string;
};

const NoteForm = ({
  title: initTitle = '',
  content: initContent = '',
  linkUrl: initLinkUrl = '',
  method = 'POST',
  noteId,
}: NoteFormProps) => {
  const { todoId } = useParams();

  const { data } = useTodosQuery(todoId as string);
  const todo = data?.todos.find((todo) => todo.id === Number(todoId));
  const { mutate } = useNoteMutation(todoId as string);

  const [title, setTitle] = useState(initTitle);
  const [content, setContent] = useState(initContent);
  const [linkUrl, setLinkUrl] = useState(initLinkUrl);
  const [linkUrlValue, setLinkUrlValue] = useState(linkUrl);

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value.length > 30 ? e.target.value.slice(0, 30) : e.target.value);
  };
  const handleChangeContent: ChangeEventHandler<HTMLInputElement> = (e) => {
    contentValueRef.current = e.target.innerHTML;
  };
  const handleChangeLinkUrlValue: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) =>
    setLinkUrlValue(e.target.value);
  const handleSaveLinkUrl: MouseEventHandler<HTMLButtonElement> = () => setLinkUrl(linkUrlValue);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentValueRef = useRef<string>(initContent);

  const [savedToast, setSavedToast] = useState(false);
  const [openSavedToast, setOpenSavedToast] = useState(false);

  const handleSave = useCallback(() => {
    window.localStorage.setItem(
      'savedNote' + todoId,
      JSON.stringify({ todoId, title: titleRef.current?.value, content: contentValueRef.current, linkUrl })
    );
    setSavedToast(true);
    setTimeout(() => {
      setSavedToast(false);
    }, 1000 * 5);
  }, [todoId, linkUrl]);

  const savedNote = useMemo(() => {
    if (!globalThis.window) return;
    const item = window.localStorage.getItem('savedNote' + todoId);
    return item && JSON.parse(item);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todoId, savedToast]);

  const handleOpenSaved = () => {
    setTitle(savedNote.title.length ? savedNote.title : '제목없음');
    setContent(savedNote.content);
    setLinkUrl(savedNote.linkUrl);
    setLinkUrlValue(savedNote.linkUrl);
    setOpenSavedToast(false);
  };

  const handleCloseOpenSavedToast = () => setOpenSavedToast(false);

  useEffect(() => {
    const id = setInterval(() => {
      handleSave();
    }, 1000 * 60 * 5);

    return () => clearInterval(id);
  }, [handleSave, todoId]);

  useEffect(() => {
    if (savedNote) setOpenSavedToast(true);
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const handleClickSubmit: MouseEventHandler<HTMLButtonElement> = async () => {
    const note: {
      title: string;
      content: string;
      todoId: number;
      linkUrl?: string;
    } = {
      title,
      content: contentValueRef.current,
      todoId: +todoId,
      linkUrl,
    };

    if (!note.linkUrl) {
      delete note.linkUrl;
    }

    mutate({
      noteId,
      options: { method, body: JSON.stringify(note) },
    });
  };

  return (
    <>
      <div className='flex w-full items-center mb-4'>
        <h1 className='grow text-slate-900 font-semibold text-lg'>노트 작성</h1>
        <button className='py-3 px-5 text-blue-500 font-semibold text-sm mr-2' onClick={handleSave}>
          임시저장
        </button>
        <Button disabled={!title.length || !content.length} onClick={handleClickSubmit}>
          작성 완료
        </Button>
      </div>
      <div className='flex w-full gap-1.5 mb-3'>
        <div className='flex justify-center items-center rounded-md bg-slate-800 w-6 h-6'>
          <IconFlag />
        </div>
        <p className='font-medium text-base text-slate-800'>{todo?.goal.title}</p>
      </div>
      <div className='flex w-full gap-2 mb-6'>
        <p className='rounded-md bg-slate-100 p-1 text-slate-700 text-xs'>To do</p>
        <p className='text-sm font-normal text-slate-700'>{todo?.title}</p>
      </div>

      {openSavedToast && (
        <div className='w-full bg-blue-50 text-blue-500 rounded-full py-2.5 px-3 flex gap-4 items-center mb-6'>
          <button onClick={handleCloseOpenSavedToast}>
            <IconClose circleFill='fill-blue-500' className='cursor-pointer' />
          </button>
          <p className='font-semibold text-sm grow'>임시 저장된 노트가 있어요. 저장된 노트를 불러오시겠어요?</p>
          <ModalProvider>
            <ModalTrigger className='rounded-full bg-white border border-blue-500 text-blue-500 text-sm font-semibold py-2 px-4'>
              불러오기
            </ModalTrigger>
            <ModalContent className='max-w-[450px] flex flex-col items-center w-full'>
              <p className='font-medium mt-2'>&apos;{savedNote.title.length ? savedNote.title : '제목없음'}&apos;</p>
              <p className='font-medium mb-8'>제목의 노트를 불러오시겠어요?</p>
              <div className='flex gap-2'>
                <ModalClose asChild>
                  <Button variant='outlined' className='w-[120px]'>
                    취소
                  </Button>
                </ModalClose>
                <ModalClose asChild>
                  <Button onClick={handleOpenSaved} className='w-[120px]'>
                    불러오기
                  </Button>
                </ModalClose>
              </div>
            </ModalContent>
          </ModalProvider>
        </div>
      )}
      <hr />
      <form className='grow w-full h-fit relative flex flex-col' onSubmit={handleSubmit}>
        <div className='w-full relative h-7 my-3'>
          <input
            className='w-full text-lg font-medium focus-visible:outline-none'
            placeholder='노트의 제목을 입력해주세요'
            value={title}
            onChange={handleChangeTitle}
            ref={titleRef}
          />
          <p className='absolute right-0 top-0 text-slate-800 font-medium text-xs'>
            {title.length}/<span className='text-blue-500'>30</span>
          </p>
        </div>
        <hr />
        <div className='w-full my-3'>
          <p className='text-slate-800 text-xs font-medium'>
            공백포함 : 총 {content.length}자 | 공백제외 : 총 {content.replaceAll(/\s+/g, '').length}자
          </p>
        </div>
        {linkUrl && (
          <div className='w-full rounded-full bg-slate-200 p-1 flex items-center gap-2 mb-4'>
            <div className='w-6 h-6 rounded-full bg-blue-500 flex justify-center items-center'>
              <IconEmbed />
            </div>
            <p className='grow text-base font-normal text-slate-800'>{linkUrl}</p>
            <div className='w-6 h-6 rounded-full flex justify-center items-center'>
              <IconClose />
            </div>
          </div>
        )}
        <div className='grow'>
          <div
            contentEditable
            className='resize-none w-full h-full focus-visible:outline-none text-slate-700 whitespace-break-spaces'
            onInput={handleChangeContent}
            dangerouslySetInnerHTML={{ __html: contentValueRef.current }}
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
            <ModalProvider>
              <ModalTrigger type='button'>
                <IconAddLink className='cursor-pointer hover:bg-slate-100' />
              </ModalTrigger>
              <ModalContent className='w-full max-w-[520px] flex flex-col'>
                <div className='flex justify-between mb-6'>
                  <h1 className='text-lg font-bold'>링크 업로드</h1>
                  <ModalClose />
                </div>
                <InputSlid
                  label='링크'
                  type='text'
                  placeholder='영상이나 글, 파일의 링크를 넣어주세요'
                  className='mb-10'
                  value={linkUrlValue}
                  onChange={handleChangeLinkUrlValue}
                />
                <ModalClose asChild>
                  <Button className='w-full' onClick={handleSaveLinkUrl}>
                    확인
                  </Button>
                </ModalClose>
              </ModalContent>
            </ModalProvider>
          </div>
          {savedToast && (
            <div className='absolute top-0 -translate-y-full w-full bg-blue-50 text-blue-500 rounded-full py-2.5 px-6 -ml-4 -mt-4 flex gap-2 items-center'>
              <IconCheck />
              <p className='font-semibold text-sm'>
                임시 저장이 완료되었습니다 <span className='text-xs font-medium'>ㆍ {}초전</span>
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default NoteForm;
