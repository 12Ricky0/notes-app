import Sidebar_Menu from "@/components/ui/sidebar_menu";
// import Note_Container from "@/components/ui/note_container";
import Note_Form from "@/components/forms/note_form";
import Header_Control from "@/components/ui/header_control";

export default function Note() {
  return (
    <>
      <div className="hidden lg:block">
        <Sidebar_Menu />
      </div>
      <div className=" lg:hidden">
        <Header_Control />
      </div>

      <Note_Form />
    </>
  );
}
