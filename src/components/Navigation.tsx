import Sidebar from "./sidebar";
import SubSidebar from "./subSidebar";

type NavigationProps = {};

const Navigation = ({}: NavigationProps) => {
  const notes = [
    {
      id: "1",
      title: "Note 1asdasdas dasdasdasdasd ",
      content: "Content 1",
      createdAt: "2023-09-10T04:46:55.853Z",
      folderId: "1",
    },
    {
      id: "2",
      title: "Note 1",
      content: "Content 1",
      createdAt: "2023-09-10T04:47:02.672Z",
      folderId: "1",
    },
    {
      id: "3",
      title: "Note 1",
      content: "Content 1",
      createdAt: "2023-09-10T04:47:05.185Z",
      folderId: "1",
    },
  ];

  const folders = [
    {
      id: "1",
      title: "Folder 1",
      notes: notes,
    },
  ];

  return (
    <section className="flex w-2/6 p-2">
      <Sidebar notes={notes} folders={folders} />
      <SubSidebar notes={notes} />
    </section>
  );
};

export default Navigation;
