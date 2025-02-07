"use client";

import Image from "next/image";
// import data from "../../data.json";
import { useContext } from "react";
import { NotesContext } from "@/context";
import { usePathname } from "next/navigation";
import { Notes } from "@/libs/definitions";

export default function Note_Container({ data }: { data: Notes[] }) {
  const { id, darkMode } = useContext(NotesContext);
  const note = data.find((note) => note._id == id);
  const pathname = usePathname();

  function date(date: string | undefined) {
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
    const d = new Date(date!);
    return d.getDate() + " " + months[d.getUTCMonth()] + " " + d.getFullYear();
  }

  function formatContent() {
    const sections = note?.content.trim().split(/\n\n+/);

    const parsedContent = sections?.map((section) => {
      const [title, ...details] = section.split(/\n/);
      return {
        title: title.trim(),
        details: details.map((detail) => detail.trim()).filter(Boolean),
      };
    });

    return parsedContent;
  }

  return (
    <section
      className={`lg:w-[60%] lg:h-screen overflow-scroll relative ${
        pathname == "/dashboard/notes/details" ? "block" : "hidden lg:block"
      }`}
    >
      <article className="mx-4 md:mx-8 lg:mx-6 border-b dark:border-neutral-800 pb-3">
        <h1 className="font-bold text-[24px] text-black dark:text-white my-3">
          {note?.title}
        </h1>
        <div className="flex gap-7 ">
          <div>
            <div className="flex text-[12px] text-neutral-700 dark:text-neutral-300 mb-1 items-center">
              <Image
                src={`/assets/images/icon-tag${darkMode ? "-white" : ""}.svg`}
                width={16}
                height={16}
                alt="tag"
                className="mr-[6px]"
              />
              <span>Tags</span>
            </div>
            <div className="flex text-[12px] text-neutral-700 dark:text-neutral-300 items-center">
              <Image
                src={`/assets/images/icon-clock${darkMode ? "-white" : ""}.svg`}
                width={16}
                height={16}
                alt="clock"
                className="mr-[6px]"
              />
              <span>Last Edited</span>
            </div>
          </div>
          <div className="text-[12px] text-neutral-700 dark:text-neutral-300">
            <p className="mb-1">{note?.tags + " "}</p>
            <p>{date(note?.lastEdited.split("T")[0])}</p>
          </div>
        </div>
      </article>
      <div className="h-[500px]">
        {formatContent()?.map((content) => (
          <article
            key={content.title}
            className="text-neutral-800 dark:text-neutral-100 mt-3 text-[14px] mx-4 md:mx-8 lg:mx-6"
          >
            <ol className=" my-4">
              <li>
                {content.title}
                <ul className="">
                  <li>{content.details.map((co) => co)}</li>
                </ul>
              </li>
            </ol>
          </article>
        ))}
      </div>
      <footer className=" fixed border-t dark:border-neutral-800 mx-6 w-[60%] mb-[20px] hidden lg:block  pt-4">
        <button className="bg-primary-blue px-4 py-2 text-white font-medium text-[14px] rounded-lg mr-4">
          Save Note
        </button>
        <button className="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 px-4 py-2 text-neutral-700 font-medium text-[14px] rounded-lg">
          Cancel
        </button>
      </footer>
    </section>
  );
}
