import Note_Container from "@/components/ui/note_container";
import Header_Control from "@/components/ui/header_control";

export default function Details() {
  return (
    <div className="flex flex-col w-full">
      <Header_Control />
      <Note_Container />
    </div>
  );
}
