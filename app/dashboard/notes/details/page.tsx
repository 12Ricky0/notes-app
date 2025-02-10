import Note_Container from "@/components/ui/note_container";
import { getAllNotes } from "@/libs/data";

export default async function Details() {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <div className="flex flex-col w-full">
      <Note_Container data={res} />
    </div>
  );
}
