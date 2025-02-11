/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import { dbConnect } from "./dbConnect";
import { noteSchema, credentials } from "./definitions";
import Note from "@/models/note";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "@/models/user";
import bcryptjs from "bcryptjs";

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
  try {
    await dbConnect();
    await Note.create(validateNoteSchema.data);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
  revalidatePath("/dashboard/notes");
  redirect("/dashboard/notes");
}

export async function updateArchive(id: string) {
  try {
    await dbConnect();
    const doc = await Note.findById(id);
    if (!doc) {
      throw new Error("Note not found");
    }

    doc.isArchived = true;
    await doc.save();
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}

export async function updateNote(id: string, prev: any, formData: FormData) {
  await dbConnect();
  const doc = await Note.findById(id);

  const title = formData.get("title");
  const tags = formData.get("tags");
  const content = formData.get("content");

  const validateNoteSchema = noteSchema.safeParse({
    title: title,
    tags: tags?.toString().split(","),
    content: content,
    lastEdited: new Date().toISOString(),
    isArchived: doc.isArchived,
  });

  if (!validateNoteSchema.success) {
    return {
      errors: validateNoteSchema.error.flatten().fieldErrors,
    };
  }

  try {
    const { title, tags, content, lastEdited, isArchived } =
      validateNoteSchema.data;
    doc.title = title;
    doc.tags = tags;
    doc.content = content;
    doc.lastEdited = lastEdited;
    doc.isArchived = isArchived;
    await doc.save();
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
  revalidatePath("/dashboard/notes");
}

export async function deleteNote(id: string) {
  try {
    await dbConnect();

    await Note.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
  revalidatePath("/dashboard/notes");
  redirect("/dashboard/notes");
}

export async function registerUser(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const validateCredentials = credentials.safeParse({
    email: email,
    password: password,
  });

  const user = await getUser(email!.toString());
  if (user) {
    return { message: "Email already in use" };
  }

  if (!validateCredentials.success) {
    return {
      errors: validateCredentials.error.flatten().fieldErrors,
    };
  }
  try {
    const salt = bcryptjs.genSaltSync(10);

    const { email, password } = validateCredentials.data;
    const hashedPassword = await bcryptjs.hash(password, salt);
    const data = { email: email, password: hashedPassword };
    await dbConnect();

    await User.create(data);

    // const userData = {
    //   user: email,
    //   name: "Welcome",
    //   columns: [],
    // };
    // await Kanban.create(userData);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }

  redirect("/");
}

export async function getUser(email: string) {
  await dbConnect();

  return await User.findOne({ email: email });
}
