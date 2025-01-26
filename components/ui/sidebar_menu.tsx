"use client";
import Link from "next/link";
import data from "../../data.json";
import { useContext } from "react";
import { NotesContext } from "../../context";
import Image from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Sidebar_Menu() {
  function date(date: string) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(date);
    return d.getDate() + " " + months[d.getUTCMonth()] + " " + d.getFullYear();
  }

  const { title, setTitle, tag, menu } = useContext(NotesContext);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const searchInput = searchParams.get("query")?.toString();

  let notes = data.notes;

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    router.replace(`${pathname}?${params.toString()}`);
  }

  if (tag === "Archieved") {
    notes = notes.filter((note) => note.isArchived === true);
  }

  if (tag && tag !== "Archieved") {
    notes = notes.filter((note) => note.tags.includes(tag));
  }

  if (searchInput) {
    notes = notes.filter((note) =>
      note.tags.some((tag) =>
        tag.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }

  return (
    <section className="lg:w-[290px] md:w-full lg:border-r dark:bg-black h-screen overflow-scroll ">
      <div className="lg:pl-8 lg:mr-4 mx-4 md:mx-8 lg:mx-0 md:pt-[20px] lg:last:pb-0 pb-[100px]">
        <Link
          className="bg-primary-blue hidden lg:flex text-white py-3 rounded-lg font-medium text-[14px] justify-center"
          href=""
        >
          + Create New Note
        </Link>
        <h1
          className={`font-bold text-black text-[24px] mt-[20px] mb-2 lg:hidden ${
            tag == "" ? "hidden" : "block"
          }`}
        >
          {tag == "Archieved" ? "" : "Notes Tagged:"}
          {tag}
        </h1>
        <h1
          className={`font-bold text-black text-[24px] mt-[20px] mb-2 lg:hidden ${
            tag == "" ? "block" : "hidden"
          }`}
        >
          All Notes
        </h1>
        {/* <h1
          className={`font-bold text-black text-[24px] mt-[20px] mb-2 lg:hidden ${
            menu == "Search" ? "block" : "hidden"
          }`}
        >
          Search
        </h1> */}
        {menu == "Search" && (
          <div className="relative lg:hidden">
            <input
              type="search"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search by title, content, or tags…"
              className="py-[13px] rounded-lg w-full pl-10 text-[14px] bg-transparent text-neutral-500 focus:outline-none border"
              defaultValue={searchInput}
            />
            <Image
              src="/assets/images/icon-search.svg"
              width={20}
              height={20}
              alt="settings"
              className=" absolute top-[14px] left-4"
            />
          </div>
        )}
        {tag == "Archieved" && (
          <p className={`text-neutral-700 font-normal text-[14px] my-4 `}>
            All your archived notes are stored here. You can restore or delete
            them anytime.
          </p>
        )}{" "}
        {menu == "Search" && searchInput && (
          <p
            className={`text-neutral-700 font-normal text-[14px] my-4 lg:hidden`}
          >
            All notes matching `{searchInput}` are displayed below.{" "}
          </p>
        )}{" "}
        {notes?.map((note, index) => (
          <div onClick={() => setTitle(note.title)} key={index}>
            <article
              className={`${
                title == note.title
                  ? "lg:bg-[#F3F5F8] lg:rounded-md lg:px-2 lg:pt-2"
                  : "border-b "
              } mt-4 lg:flex flex-col gap-3 pb-3 cursor-pointer hidden `}
            >
              <h1 className="font-semibold text-[16px] dark:text-white text-primary-dark">
                {note.title}
              </h1>
              <div>
                {note.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 dark:bg-neutral-700 dark:text-white px-[6px] text-[12px] py-[2px] font-normal text-primary-dark rounded-[4px] mr-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className=" text-[12px] dark:text-white font-normal text-neutral-700">
                {date(note.lastEdited.split("T")[0])}
              </p>
            </article>
            <Link className="lg:hidden" href="/dashboard/notes/details">
              <article
                className={`${
                  title == note.title
                    ? "lg:bg-[#F3F5F8] lg:rounded-md lg:px-2 lg:pt-2"
                    : "border-b "
                } mt-4 flex flex-col gap-3 pb-3 cursor-pointer `}
              >
                <h1 className="font-semibold text-[16px] dark:text-white text-primary-dark">
                  {note.title}
                </h1>
                <div>
                  {note.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-neutral-200 dark:bg-neutral-700 dark:text-white px-[6px] text-[12px] py-[2px] font-normal text-primary-dark rounded-[4px] mr-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className=" text-[12px] dark:text-white font-normal text-neutral-700">
                  {date(note.lastEdited.split("T")[0])}
                </p>
              </article>
            </Link>
          </div>
        ))}
      </div>
      <div className="size-12 lg:hidden fixed  rounded-full bg-primary-blue bottom-[72px] md:bottom-[100px] right-4 md:right-8 flex items-center justify-center">
        <Image
          src="/assets/images/icon-plus.svg"
          width={24}
          height={24}
          alt="plus"
          className="w-auto h-auto "
        />
      </div>
    </section>
  );
}
