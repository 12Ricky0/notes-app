"use client";
import Image from "next/image";
import { Overlay } from "../ui/utilities";
import { useContext } from "react";
import { NotesContext } from "../../context";
import { deleteNote } from "@/libs/actions";

export default function Delete() {
  const { setDisplayDelete, id, setDisplayToast, setToast } =
    useContext(NotesContext);

  return (
    <Overlay>
      <div className="bg-white dark:bg-neutral-700 w-full mx-4 rounded-lg md:w-[440px]">
        <article className="p-[20px] border-b flex justify-between items-start gap-4">
          <div className="size-10 bg-neutral-200 dark:bg-neutral-600 rounded-md flex shrink-0 justify-center items-center">
            <Image
              src="/assets/images/icon-delete.svg"
              width={24}
              height={24}
              alt="trash"
              className="w-auto h-auto"
            />
          </div>
          <div>
            <h1 className="font-semibold text-[16px] text-black dark:text-white">
              Delete Note
            </h1>
            <p className="text-[14px] text-neutral-700 dark:text-neutral-200">
              Are you sure you want to permanently delete this note? This action
              cannot be undone.
            </p>
          </div>
        </article>

        <div className="flex gap-4 justify-end mx-[20px] py-4">
          <button
            onClick={() => setDisplayDelete(false)}
            className="bg-neutral-200 px-4 py-3 hover:bg-slate-100 dark:hover:bg-neutral-700 text-neutral-700 font-medium text-[14px] rounded-lg"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteNote(id);
              setDisplayDelete(false);
              setToast("Note permanently deleted.");
              setDisplayToast(true);
            }}
            className="bg-red-500 hover:bg-red-400 px-4 py-3 text-white font-medium text-[14px] rounded-lg"
          >
            Delete Note
          </button>
        </div>
      </div>
    </Overlay>
  );
}
