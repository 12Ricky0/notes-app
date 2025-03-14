"use client";
import Image from "next/image";
import {
  useContext,
  useActionState,
  ChangeEvent,
  useState,
  useEffect,
} from "react";
import { NotesContext } from "@/context";
import { usePathname } from "next/navigation";
import { Notes } from "@/libs/definitions";
import { Toast } from "./utilities";
import { updateNote } from "@/libs/actions";
import Header_Control from "./header_control";
import { Suspense } from "react";
import Loading from "@/app/loading";

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

  const [formData, setFormData] = useState({
    title: note?.title || "",
    tags: note?.tags || "",
    content: note?.content || "",
  });

  const initialState = {
    title: note?.title || "",
    tags: note?.tags || "",
    content: note?.content || "",
  };

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  useEffect(() => {
    setFormData({
      title: note?.title || "",
      tags: note?.tags || "",
      content: note?.content || "",
    });
  }, [note]);

  return (
    <form
      action={formAction}
      className={`lg:w-[60%] lg:h-screen overflow-scroll  ${
        pathname == "/dashboard/notes/details"
          ? "block"
          : !note
          ? "hidden"
          : "hidden lg:block"
      } `}
    >
      <div className=" lg:hidden">
        <Header_Control archived={note?.isArchived} />
      </div>
      <Suspense fallback={<Loading />}>
        <article className="mx-4 md:mx-8 lg:mx-6 border-b dark:border-neutral-800 pb-3">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="font-bold text-[24px] text-black focus:outline-none w-full dark:text-white my-3 dark:bg-transparent"
          />
          <div className="flex gap-7">
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
              {note?.isArchived && (
                <div className="flex text-[12px] text-neutral-700 dark:text-neutral-300 mb-1 items-center">
                  <Image
                    src={`/assets/images/icon-status${
                      darkMode ? "-white" : ""
                    }.svg`}
                    width={16}
                    height={16}
                    alt="tag"
                    className="mr-[6px]"
                  />
                  <span>Status</span>
                </div>
              )}{" "}
              <div className="flex text-[12px] text-neutral-700 dark:text-neutral-300 items-center">
                <Image
                  src={`/assets/images/icon-clock${
                    darkMode ? "-white" : ""
                  }.svg`}
                  width={16}
                  height={16}
                  alt="clock"
                  className="mr-[6px]"
                />
                <span>Last Edited</span>
              </div>
            </div>
            <div className="text-[12px] text-neutral-700 dark:text-neutral-300 ">
              <input
                type="text"
                name="tags"
                className="mb-1 focus:outline-none dark:bg-transparent"
                value={formData.tags}
                onChange={handleChange}
              />
              {note?.isArchived && <p className="mb-1">Archived</p>}
              <p>{date(note?.lastEdited.split("T")[0])}</p>
            </div>
          </div>
        </article>
        <div className="h-[500px]">
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
            value={formData.content}
            onChange={handleChange}
          />
        </div>
      </Suspense>
      {displayToast && (
        <div className="lg:hidden  right-0 z-40 mx-4 bottom-[70px] fixed">
          <Toast
            title={toast}
            link={
              toast == "Note archived."
                ? "Archieved Notes"
                : toast == "Note restored to active notes."
                ? "All Notes"
                : ""
            }
          />
        </div>
      )}{" "}
      <footer className=" border-t relative dark:border-neutral-800 mx-6 mb-[2px] hidden lg:block pt-4 mt-[46]">
        {displayToast && (
          <div className="absolute right-[0px] lg:translate-y-7 z-40 mx-4 lg:mx-0 bottom-[70px] lg:bottom-[62px]">
            <Toast
              title={toast}
              link={
                toast == "Note archived."
                  ? "Archieved Notes"
                  : toast == "Note restored to active notes."
                  ? "All Notes"
                  : ""
              }
            />
          </div>
        )}
        <button
          onClick={() => {
            setToast("Note saved successfully!");
            setDisplayToast(true);
          }}
          type="submit"
          className="bg-primary-blue hover:bg-blue-500 px-4 py-2 text-white font-medium text-[14px] rounded-lg mr-4"
        >
          Save Note
        </button>
        <span
          onClick={() => setFormData(initialState)}
          className="bg-neutral-200 cursor-pointer hover:bg-slate-100 dark:hover:bg-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 px-4 py-2 text-neutral-700 font-medium text-[14px] rounded-lg"
        >
          Cancel
        </span>
      </footer>
    </form>
  );
}
