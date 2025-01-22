import Sidebar_Nav from "@/components/ui/sidebar_navigation";
import Header from "@/components/ui/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="md:flex justify-between ">
      <div className="">
        <Sidebar_Nav />
      </div>
      <div className="md:w-full ">
        <Header />
        <div className="lg:flex">{children} </div>
      </div>
    </main>
  );
}
