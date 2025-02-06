import Sidebar_Menu from "@/components/ui/sidebar_menu";
// import Note_Container from "@/components/ui/note_container";
import Note_Form from "@/components/forms/note_form";
import Header_Control from "@/components/ui/header_control";
import { getAllNotes } from "@/libs/data";

export default async function Note() {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <>
      <div className="hidden lg:block">
        <Sidebar_Menu data={res} />
      </div>
      <div className=" lg:hidden">
        <Header_Control />
      </div>

      <Note_Form />
    </>
  );
}
