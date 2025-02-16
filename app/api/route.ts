import { dbConnect } from "@/libs/dbConnect";
import Note from "@/models/note";
import { auth } from "@/auth";

export async function POST(request: Request) {
  const res = await request.json();
  await dbConnect();
  await Note.create(res.notes);

  return Response.json(
    { message: "Data Inserted Sucessfully" },
    { status: 200 }
  );
}

export async function GET() {
  await dbConnect();
  const session = await auth();
  const notes = await Note.find({ user: session?.user?.email });
  return Response.json(notes);
}
