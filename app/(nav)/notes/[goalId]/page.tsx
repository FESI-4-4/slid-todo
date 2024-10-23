import PageContainer from '@/components/common/PageLayout/PageContainer';
import PageHeader from '@/components/common/PageLayout/PageHeader';

export default function Notes({ params }: { params: { goalId: string } }) {
  return (
    <PageContainer>
      <PageHeader title='노트 모아보기' />
    </PageContainer>
  );
}
