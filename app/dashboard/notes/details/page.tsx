import Note_Container from "@/components/ui/note_container";
import Header_Control from "@/components/ui/header_control";
import { getAllNotes } from "@/libs/data";

export default async function Details() {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <div className="flex flex-col w-full">
      {/* <Header_Control /> */}
      <Note_Container data={res} />
    </div>
  );
}
