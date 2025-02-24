import { z } from "zod";

export type TagItem = string;

export type Notes = {
  _id: string;
  user: string;
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
  user: z.string(),
  title: z.string().min(1, { message: "Title can`t be empty" }),
  tags: z.array(z.string().min(1, { message: "Enter at least one tag" })),
  content: z.string().min(1, { message: "Content can`t be empty" }),
  lastEdited: z.string(),
  isArchived: z.boolean(),
});

export const credentials = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must contain at least 8 character(s)" }),
});

export const passwordForm = z
  .object({
    current_password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" }),
    new_password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });

export const resetPasswordForm = z
  .object({
    new_password: z
      .string()
      .min(8, { message: "Password must contain at least 8 character(s)" }),
    confirm_password: z.string(),
  })
  .refine((data) => data.new_password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirm_password"],
  });
