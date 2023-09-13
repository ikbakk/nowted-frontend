export type Note = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  folderId: string;
};

export type Folder = {
  id: string;
  title: string;
  notes: Note[];
};
