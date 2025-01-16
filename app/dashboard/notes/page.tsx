import Sidebar_Menu from "@/components/ui/sidebar_menu";
import Note_Container from "@/components/ui/note_container";
import { Right_Menu } from "@/components/ui/utilities";

export default function Note() {
  return (
    <>
      <Sidebar_Menu />
      <Note_Container />
      <Right_Menu />
    </>
  );
}
