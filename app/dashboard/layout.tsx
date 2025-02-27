import Sidebar_Nav from "@/components/ui/sidebar_navigation";
import Header from "@/components/ui/header";
import { getAllNotes } from "@/libs/data";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getAllNotes();
  const res = await data?.json();

  return (
    <main className="md:flex justify-between ">
      <div className="">
        <Sidebar_Nav data={res} />
      </div>
      <div className="md:w-full ">
        <Header />
        <div className="lg:flex">{children} </div>
      </div>
    </main>
  );
}
