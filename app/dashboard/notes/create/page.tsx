import Sidebar_Menu from "@/components/ui/sidebar_menu";
import Note_Form from "@/components/forms/note_form";
import { getAllNotes } from "@/libs/data";

export default async function Note() {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <>
      <div className="hidden lg:block">
        <Sidebar_Menu data={res} />
      </div>
      <Note_Form />
    </>
  );
}
