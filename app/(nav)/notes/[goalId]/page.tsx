'use client';

import PageContainer from '@/components/common/PageLayout/PageContainer';
import PageHeader from '@/components/common/PageLayout/PageHeader';
import NoteGoalTitle from '@/components/notes/NoteGoalTitle';
import NotesList from '@/components/notes/NotesList';

const notes = [
  {
    todo: {
      done: true,
      title: 'Complete project documentationdddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 1,
    },
    updatedAt: '2024-10-23T05:06:11.986Z',
    createdAt: '2024-10-21T12:45:30.123Z',
    title:
      'Finish the remaining taskㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴs',
    id: 101,
    goal: {
      title: 'Project Completionㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 10,
    },
    userId: 42,
    teamId: 'team_abc123',
  },
  {
    todo: {
      done: true,
      title: 'Complete project documentationdddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 1,
    },
    updatedAt: '2024-10-23T05:06:11.986Z',
    createdAt: '2024-10-21T12:45:30.123Z',
    title:
      'Finish the remaining taskㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴs',
    id: 101,
    goal: {
      title: 'Project Completionㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 10,
    },
    userId: 42,
    teamId: 'team_abc123',
  },
  {
    todo: {
      done: true,
      title: 'Complete project documentationdddddddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 1,
    },
    updatedAt: '2024-10-23T05:06:11.986Z',
    createdAt: '2024-10-21T12:45:30.123Z',
    title:
      'Finish the remaining taskㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴs',
    id: 101,
    goal: {
      title: 'Project Completionㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
      id: 10,
    },
    userId: 42,
    teamId: 'team_abc123',
  },
];
export interface Note {
  todo: {
    done: boolean;
    title: string;
    id: number;
  };
  updatedAt: string;
  createdAt: string;
  title: string;
  id: number;
  goal: {
    title: string;
    id: number;
  };
  userId: number;
  teamId: string;
}

export interface data {
  nextCursor: number;
  totalCount: number;
  notes: Note[];
}

export default function Notes({ params }: { params: { goalId: string } }) {
  return (
    <PageContainer>
      <PageHeader title='노트 모아보기' />
      <NoteGoalTitle goal={notes[0].goal} />
      <NotesList notes={notes} />
    </PageContainer>
  );
}
