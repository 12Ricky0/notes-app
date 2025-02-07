import { z } from "zod";

export type TagItem = string;

export type Notes = {
  _id: string;
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

export const noteSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  content: z.string(),
  lastEdited: z.string().optional(),
  isArchived: z.boolean(),
});

export const credentials = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password must contain at least 6 character(s)" }),
});
