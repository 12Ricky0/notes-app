/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import { dbConnect } from "./dbConnect";
import { noteSchema } from "./definitions";
import Note from "@/models/note";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNote(prev: any, formData: FormData) {
  const title = formData.get("title");
  const tags = formData.get("tags");
  const content = formData.get("content");

  const validateNoteSchema = noteSchema.safeParse({
    title: title,
    tags: tags?.toString().split(","),
    content: content,
    lastEdited: new Date().toISOString(),
    isArchived: false,
  });
  if (!validateNoteSchema.success) {
    return {
      errors: validateNoteSchema.error.flatten().fieldErrors,
    };
  }
  console.log(validateNoteSchema.error);
  try {
    await dbConnect();
    await Note.create(validateNoteSchema.data);
  } catch (error) {
    throw new Error(notFound());
  }
  revalidatePath("/dashboard/notes");
  redirect("/dashboard/notes");
}
