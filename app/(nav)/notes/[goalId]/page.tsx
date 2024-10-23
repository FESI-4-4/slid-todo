import PageContainer from '@/components/common/PageLayout/PageContainer';
import PageHeader from '@/components/common/PageLayout/PageHeader';
import NoteGoalTitle from '@/components/notes/NoteGoalTitle';

const notes = [
  {
    todo: {
      done: true,
      title: 'Complete project documentation',
      id: 1,
    },
    updatedAt: '2024-10-23T05:06:11.986Z',
    createdAt: '2024-10-21T12:45:30.123Z',
    title: 'Finish the remaining tasks',
    id: 101,
    goal: {
      title: 'Project Completion',
      id: 10,
    },
    userId: 42,
    teamId: 'team_abc123',
  },
];

export default function Notes({ params }: { params: { goalId: string } }) {
  return (
    <PageContainer>
      <PageHeader title='노트 모아보기' />
      <NoteGoalTitle goal={notes[0].goal} />
    </PageContainer>
  );
}
