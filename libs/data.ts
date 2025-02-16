import Note from "@/models/note";
import { dbConnect } from "./dbConnect";
import { notFound } from "next/navigation";
import { auth } from "@/auth";

export async function getAllNotes() {
  try {
    await dbConnect();
    const session = await auth();
    const req = await Note.find({ user: session?.user?.email });
    return Response.json(req);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}

export async function getOneNote(id: string) {
  try {
    await dbConnect();
    const req = await Note.findOne({ _id: id });
    return Response.json(req);
  } catch (error) {
    console.error(error);
    throw new Error(notFound());
  }
}
