import Filters from '@/components/allTodos/Filters';
import HeaderAllTodos from '@/components/allTodos/HeaderAllTodos';

export default function alltodos() {
  return (
    <div className='bg-slate-100'>
      <main className='mx-20 my-6 '>
        <HeaderAllTodos length={3} />
        <div className='sm:p-6 p-4 bg-white rounded-xl flex-col gap-4'>
          <Filters />
        </div>
      </main>
    </div>
  );
}
