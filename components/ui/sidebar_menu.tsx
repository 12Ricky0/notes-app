"use client";
import Link from "next/link";
import data from "../../data.json";
import { useContext } from "react";
import { NotesContext } from "../../context";
import Image from "next/image";

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

  const { title, setTitle, tag } = useContext(NotesContext);

  let notes;

  if (tag) {
    notes = data.notes.filter((note) => note.tags.includes(tag));
  } else {
    notes = data.notes;
  }

  return (
    <section className="lg:w-[290px] md:w-full lg:border-r dark:bg-black h-screen ">
      <div className="lg:pl-8 lg:mr-4 mx-4 md:mx-8 lg:mx-0 md:pt-[20px] lg:last:pb-0 pb-[100px]">
        <Link
          className="bg-primary-blue hidden lg:flex text-white py-3 rounded-lg font-medium text-[14px] justify-center"
          href=""
        >
          + Create New Note
        </Link>
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
