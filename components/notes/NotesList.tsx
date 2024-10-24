import { Note } from '@/app/(nav)/notes/[goalId]/page';
import NoteItem from './NoteItem';

interface NotesListProps {
  notes: Note[];
}

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className='flex flex-col space-y-4'>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
