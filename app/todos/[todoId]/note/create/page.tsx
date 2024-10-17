import IconFlag from '@/public/icons/IconFlag';
import NoteForm from './_view/NoteForm';

export default function Page() {
  return (
    <main className='flex w-full'>
      <section className='w-10 h-screen'></section> {/* 링크 임베드 */}
      <section className='max-w-[800px] w-full py-6 px-10 flex flex-col'>
        <div className='flex w-full items-center mb-4'>
          <h1 className='grow text-slate-900 font-semibold text-lg'>노트 작성</h1>
          <button className='py-3 px-5 text-blue-500 font-semibold text-sm mr-2'>임시저장</button>
          <button className='py-3 px-5 bg-blue-500 rounded-xl text-white font-semibold'>작성 완료</button>
        </div>
        <div className='flex w-full gap-1.5 mb-3'>
          <div className='flex justify-center items-center rounded-md bg-slate-800 w-6 h-6'>
            <IconFlag />
          </div>
          <p className='font-medium text-base text-slate-800'>목표</p>
        </div>
        <div className='flex w-full gap-2 mb-6'>
          <p className='rounded-md bg-slate-100 p-1 text-slate-700 text-xs'>To do</p>
          <p className='text-sm font-normal text-slate-700'>할일</p>
        </div>
        <NoteForm />
      </section>
    </main>
  );
}
