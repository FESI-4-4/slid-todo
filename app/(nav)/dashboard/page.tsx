import PageContainer from '@/components/common/pageLayout/PageContainer';
import PageHeader from '@/components/common/pageLayout/PageHeader';
import GoalTodo from '@/components/dashboard/GoalTodo';
import Progress from '@/components/dashboard/Progress';
import RecentTodo from '@/components/dashboard/RecentTodo';

export default function DashboardPage() {
  return (
    <PageContainer className={'max-w-[1200px] gap-4 flex flex-col'}>
      <div className='hidden sm:block lg:block'>
        <PageHeader title='대시보드' />
      </div>
      {/*TODO: flex flex-col 이 반복되는데 이런 경우엔 tailwind에 stack 이라는 클래스를 만들면 편합니다. */}
      <div className='w-full flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6'>
        <RecentTodo />
        <Progress />
      </div>
      <GoalTodo />
    </PageContainer>
  );
}
