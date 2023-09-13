import { Note } from "@/types/dbDatas";

import NoteCard from "./NoteCard";

type SubSidebarProps = {
  notes: Note[];
};

const SubSidebar = ({ notes }: SubSidebarProps) => {
  return (
    <div className="flex w-1/2 flex-col gap-4 p-2">
      <h3>Folder 1</h3>
      <div className="flex flex-col gap-1">
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            title={note.title}
            date={note.createdAt}
            content={note.content}
          />
        ))}
      </div>
    </div>
  );
};

export default SubSidebar;
