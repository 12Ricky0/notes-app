"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotesContext } from "@/context";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  const { tag, darkMode } = useContext(NotesContext);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  const searchInput = searchParams.get("query")?.toString();

  return (
    <header className=" lg:bg-none py-[13px] dark:bg-neutral-950 dark:border-neutral-800 lg:border-b static bg-neutral-100 lg:bg-transparent">
      <Link href="/">
        <Image
          src={`/assets/images/logo${darkMode ? "-dark" : ""}.svg`}
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto cursor-pointer mx-4 md:mx-8 pt-[23p] lg:hidden"
        />
      </Link>
      <div className="lg:flex justify-between items-center mx-8 hidden ">
        {pathname == "/dashboard/settings" ? (
          <h1 className={`font-bold text-black dark:text-white text-[24px]`}>
            Settings
          </h1>
        ) : searchInput ? (
          <h1 className={`font-bold text-black dark:text-white text-[24px] `}>
            Showing results for: {searchInput}
          </h1>
        ) : (
          <>
            <h1
              className={`font-bold text-black dark:text-white text-[24px] ${
                tag == "" ? "hidden" : "block"
              }`}
            >
              {tag == "Archieved" ? "" : "Notes Tagged:"}
              {tag}
            </h1>
            <h1
              className={`font-bold text-black dark:text-white text-[24px] ${
                tag == "" ? "block" : "hidden"
              }`}
            >
              All Notes
            </h1>
          </>
        )}
        <div className="flex gap-4">
          <div className="relative">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="search"
              placeholder="Search by title, content, or tags…"
              className="py-[13px] rounded-lg w-[300px] pl-10 text-[14px] bg-transparent text-neutral-500 focus:outline-none dark:border-neutral-600 border"
              defaultValue={searchParams.get("query")?.toString()}
            />
            <Image
              src={`/assets/images/icon-search.svg`}
              width={20}
              height={20}
              alt="settings"
              className=" absolute top-[14px] left-4"
            />
          </div>
          <Link
            href="/dashboard/settings"
            className="flex justify-center items-center"
          >
            <Image
              src={`/assets/images/icon-settings${
                darkMode ? "-white" : ""
              }.svg`}
              width={24}
              height={24}
              alt="settings"
              className="w-auto h-auto hidden lg:block"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
