import { Note } from "@/types/dbDatas";
import { IoDocumentText } from "react-icons/io5";
import GroupItem from "./GroupItem";

type RecentNotesProps = {
  notes: Note[];
};

const RecentNotes = ({ notes }: RecentNotesProps) => {
  return (
    <ul className="flex flex-grow-0 flex-col gap-1">
      {notes.map((note) => (
        <GroupItem key={note.id} title={note.title} icon={<IoDocumentText />} />
      ))}
    </ul>
  );
};

export default RecentNotes;
