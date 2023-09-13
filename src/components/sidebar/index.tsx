import { Folder, Note } from "@/types/dbDatas";
import Folders from "./Folders";
import Group from "./Group";
import SidebarHeader from "./Header";
import RecentNotes from "./RecentNotes";

type SidebarProps = {
  notes: Note[];
  folders: Folder[];
};

const Sidebar = ({ folders, notes }: SidebarProps) => {
  return (
    <div className="flex w-1/2 flex-col gap-4">
      <SidebarHeader />
      <Group title="Recent">
        <RecentNotes notes={notes} />
      </Group>
      <Group title="Folders">
        <Folders folders={folders} />
      </Group>
    </div>
  );
};

export default Sidebar;
