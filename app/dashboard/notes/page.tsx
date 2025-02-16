import Sidebar_Menu from "@/components/ui/sidebar_menu";
import Note_Container from "@/components/ui/note_container";
import { Right_Menu } from "@/components/ui/utilities";
import { getAllNotes } from "@/libs/data";

export default async function Note() {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <>
      <Sidebar_Menu data={res} />
      <Note_Container data={res} />
      <Right_Menu data={res} />
    </>
  );
}
