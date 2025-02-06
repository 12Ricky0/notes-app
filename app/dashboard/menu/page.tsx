import { Tags } from "@/components/ui/mobile_menu";
import { getAllNotes } from "@/libs/data";

export default async function Menu() {
  const data = await getAllNotes();
  const res = await data?.json();

  return <Tags data={res} />;
}
