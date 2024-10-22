import NoteForm from '../_view/NoteForm';

export default function Page() {
  return (
    <main className='flex w-full'>
      <section className='w-10 h-screen'></section> {/* 링크 임베드 */}
      <section className='max-w-[800px] w-full py-6 px-10 flex flex-col'>
        <NoteForm />
      </section>
    </main>
  );
}
