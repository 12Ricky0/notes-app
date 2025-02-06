export type TagItem = string;

export type Notes = {
  _id?: string;
  title: string;
  tags: [string];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

export type NoteUser = {
  _id?: string;
  email: string;
  password: string;
};
