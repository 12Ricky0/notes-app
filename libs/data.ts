import Note from "@/models/note";
import { dbConnect } from "./dbConnect";
import { notFound } from "next/navigation";

export async function getAllNotes() {
  try {
    await dbConnect();
    const req = await Note.find();
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
