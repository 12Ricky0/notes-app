/* eslint-disable @typescript-eslint/no-explicit-any*/
"use server";
import { dbConnect } from "./dbConnect";
import {
  noteSchema,
  credentials,
  passwordForm,
  resetPasswordForm,
} from "./definitions";
import Note from "@/models/note";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import User from "@/models/user";
import bcryptjs from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { auth } from "@/auth";

export async function createNote(prev: any, formData: FormData) {
  const title = formData.get("title");
  const tags = formData.get("tags");
  const content = formData.get("content");
  const session = await auth();
  const id = session?.user?.email;

  const validateNoteSchema = noteSchema.safeParse({
    user: id,
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

    doc.isArchived = !doc.isArchived;
    await doc.save();
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
  revalidatePath("/dashboard/notes");
}

export async function updateNote(id: string, prev: any, formData: FormData) {
  await dbConnect();
  const doc = await Note.findById(id);
  const session = await auth();
  const user = session?.user?.email;
  const title = formData.get("title");
  const tags = formData.get("tags");
  const content = formData.get("content");

  const validateNoteSchema = noteSchema.safeParse({
    user: user,
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
    doc.user = user;
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
    await dbConnect();
    const salt = bcryptjs.genSaltSync(10);

    const { email, password } = validateCredentials.data;
    const hashedPassword = await bcryptjs.hash(password, salt);
    const data = { email: email, password: hashedPassword };
    await dbConnect();

    await User.create(data);
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

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
  redirect("/");
}

export async function changePassword(prev: any, formData: FormData) {
  const old_password = formData.get("old_password");
  const new_password = formData.get("new_password");
  const confirmed_password = formData.get("confirm_password");
  await dbConnect();
  const session = await auth();
  const id = session?.user?.email;

  const parsedCredentials = passwordForm.safeParse({
    current_password: old_password,
    new_password: new_password,
    confirm_password: confirmed_password,
  });
  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }
  const user = await getUser(id!);
  if (!user) {
    return { message: "Oops! Cannot Change Password for Current User" };
  }
  try {
    const salt = bcryptjs.genSaltSync(10);
    const { current_password, new_password } = parsedCredentials.data;
    const new_hashedPassword = await bcryptjs.hash(new_password, salt);
    if (!(await bcryptjs.compare(current_password, user.password))) {
      return { message: "Old Password is Incorrect" };
    }
    user.password = new_hashedPassword;
    await user.save();
  } catch (error) {
    console.error(error);
  }
  return { success: "Password Changed Successfully!" };
}

export async function resetPassword(
  email: string,
  prev: any,
  formData: FormData
) {
  const new_password = formData.get("new_password");
  const confirmed_password = formData.get("confirm_password");
  const user = await getUser(email!);
  await dbConnect();

  if (!user) {
    return { message: "Email does not exist!" };
  }

  const parsedCredentials = resetPasswordForm.safeParse({
    new_password: new_password,
    confirm_password: confirmed_password,
  });

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  }

  try {
    const salt = bcryptjs.genSaltSync(10);

    const { new_password } = parsedCredentials.data;
    const hashedPassword = await bcryptjs.hash(new_password, salt);
    user.password = hashedPassword;
    await user.save();
  } catch (error) {
    console.error(error);
  }
  redirect("/");
}
