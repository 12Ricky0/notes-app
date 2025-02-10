"use client";

import Image from "next/image";
// import data from "../../data.json";
import { useContext, useActionState } from "react";
import { NotesContext } from "@/context";
import { usePathname } from "next/navigation";
import { Notes } from "@/libs/definitions";
import { Toast } from "./utilities";
import { updateNote } from "@/libs/actions";
import Header_Control from "./header_control";

export default function Note_Container({ data }: { data: Notes[] }) {
  const { id, darkMode, displayToast, toast, setDisplayToast, setToast } =
    useContext(NotesContext);
  const note = data.find((note) => note._id == id);
  const pathname = usePathname();

  const payload = updateNote.bind(null, id);
  const [state, formAction] = useActionState(payload, null);

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

  // function formatContent() {
  //   const sections = note?.content.trim().split(/\n\n+/);

  //   const parsedContent = sections?.map((section) => {
  //     const [title, ...details] = section.split(/\n/);
  //     return {
  //       title: title.trim(),
  //       details: details.map((detail) => detail.trim()).filter(Boolean),
  //     };
  //   });

  //   return parsedContent;
  // }

  return (
    <form
      action={formAction}
      className={`lg:w-[60%] lg:h-screen overflow-scroll  ${
        pathname == "/dashboard/notes/details" ? "block" : "hidden lg:block"
      }`}
    >
      <div className=" lg:hidden">
        <Header_Control />
      </div>
      <article className="mx-4 md:mx-8 lg:mx-6 border-b dark:border-neutral-800 pb-3">
        <input
          type="text"
          name="title"
          defaultValue={note?.title}
          className="font-bold text-[24px] text-black focus:outline-none w-full dark:text-white my-3"
        />
        {/* <h1 className="font-bold text-[24px] text-black dark:text-white my-3">
          {note?.title}
        </h1> */}
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
            <input
              type="text"
              name="tags"
              className="mb-1 focus:outline-none"
              defaultValue={note?.tags + " "}
            />
            {/* <p className="mb-1">{note?.tags + " "}</p> */}
            <p>{date(note?.lastEdited.split("T")[0])}</p>
          </div>
        </div>
      </article>
      <div className="h-[500px]">
        {/* {formatContent()?.map((content) => (
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
        ))} */}
        <textarea
          className={`text-neutral-800 mt-3 text-[14px] px-4 md:px-8 lg:px-4 w-full outline-none ${
            state?.errors.content
              ? "placeholder:text-red-500"
              : "placeholder:text-neutral-800"
          } bg-transparent h-[460px] dark:text-neutral-100  dark:placeholder:text-neutral-100`}
          placeholder={
            state?.errors.content
              ? `${state.errors.content}`
              : "Start typing your note here..."
          }
          name="content"
          defaultValue={note?.content}
        />
      </div>
      {displayToast && (
        <div className="lg:absolute lg:right-[100px] right-0 lg:translate-y-6 z-40 mx-4 lg:mx-0 bottom-[70px] lg:bottom-[62px] fixed">
          <Toast
            title={toast}
            link={toast == "Note archived." ? "Archieved Notes" : ""}
          />
        </div>
      )}{" "}
      <footer className=" border-t relative dark:border-neutral-800 mx-6 mb-[2px] hidden lg:block pt-4 mt-[46]">
        <button
          onSubmit={() => {
            setToast("Note saved successfully!");
            setDisplayToast(true);
          }}
          type="submit"
          className="bg-primary-blue px-4 py-2 text-white font-medium text-[14px] rounded-lg mr-4"
        >
          Save Note
        </button>
        <button className="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 px-4 py-2 text-neutral-700 font-medium text-[14px] rounded-lg">
          Cancel
        </button>
      </footer>
    </form>
  );
}
