import { Folder } from "@/types/dbDatas";

import { AiOutlineFolder } from "react-icons/ai";
import GroupItem from "./GroupItem";

type FoldersProps = {
  folders: Folder[];
};

const Folders = ({ folders }: FoldersProps) => {
  return (
    <ul className="flex flex-grow-0 flex-col gap-1">
      {folders.map((folder) => (
        <GroupItem
          key={folder.id}
          title={folder.title}
          icon={<AiOutlineFolder />}
        />
      ))}
    </ul>
  );
};

export default Folders;
