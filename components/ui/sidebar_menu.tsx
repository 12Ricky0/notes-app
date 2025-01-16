"use client";
import Link from "next/link";
import data from "../../data.json";

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
  return (
    <section className="md:w-[290px] border-r dark:bg-black h-screen">
      <div className="md:pl-8 md:mr-4 mx-4 md:mx-0 md:pt-[20px]">
        <Link
          className="bg-primary-blue hidden md:block text-white py-3 rounded-lg font-medium text-[14px] px-[58px]"
          href=""
        >
          + Create New Note
        </Link>
        {data.notes.map((note, index) => (
          <div key={index}>
            <article className=" mt-4 flex flex-col gap-3 border-b pb-3">
              <h1 className="font-semibold text-[16px] dark:text-white text-primary-dark">
                {note.title}
              </h1>
              <div>
                {note.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-neutral-200 dark:bg-neutral-700 dark:text-white px-[6px] text-[12px] font-normal text-primary-dark rounded-[4px] mr-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className=" text-[12px] dark:text-white font-normal text-neutral-700">
                {date(note.lastEdited.split("T")[0])}
              </p>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
