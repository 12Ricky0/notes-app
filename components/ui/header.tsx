"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotesContext } from "@/context";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const { tag } = useContext(NotesContext);
  const pathname = usePathname();

  return (
    <header className=" lg:bg-none py-[13px] dark:bg-black lg:border-b static">
      <Image
        src="/assets/images/logo.svg"
        width={24}
        height={24}
        alt="logo"
        className="w-auto h-auto mx-4 md:mx-8 pt-[23p] lg:hidden"
      />
      <div className="lg:flex justify-between items-center mx-8 hidden ">
        {pathname == "/dashboard/settings" ? (
          <h1 className={`font-bold text-black text-[24px] `}>Settings</h1>
        ) : (
          <>
            <h1
              className={`font-bold text-black text-[24px] ${
                tag == "" ? "hidden" : "block"
              }`}
            >
              {tag == "Archieved" ? "" : "Notes Tagged:"}
              {tag}
            </h1>
            <h1
              className={`font-bold text-black text-[24px] ${
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
              type="search"
              placeholder="Search by title, content, or tags…"
              className="py-[13px] rounded-lg w-[300px] pl-10 text-[14px] bg-transparent text-neutral-500 focus:outline-none border"
            />
            <Image
              src="/assets/images/icon-search.svg"
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
              src="/assets/images/icon-settings.svg"
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
