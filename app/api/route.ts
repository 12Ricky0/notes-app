import { dbConnect } from "@/libs/dbConnect";
import Note from "@/models/note";

// export async function POST(request: Request) {
//   const res = await request.json();
//   await dbConnect();
//   await Note.create(res.notes);
//   //   console.log(res);

//   return Response.json(
//     { message: "Data Inserted Sucessfully" },
//     { status: 200 }
//   );
// }

export async function GET() {
  await dbConnect();
  const notes = await Note.find({});
  return Response.json(notes);
}
