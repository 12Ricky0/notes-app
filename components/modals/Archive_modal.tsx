"use client";
import Image from "next/image";
import { Overlay } from "../ui/utilities";
import { useContext } from "react";
import { NotesContext } from "../../context";

export default function Archive() {
  const { setDisplayArchive } = useContext(NotesContext);
  return (
    <Overlay>
      <div className="bg-white dark:bg-neutral-700 border dark:border-neutral-800 w-full mx-4 rounded-lg md:w-[440px]">
        <article className="p-[20px] border-b flex justify-between items-start gap-4">
          <div className="size-10 bg-neutral-200 dark:bg-neutral-600 rounded-md flex shrink-0 justify-center items-center">
            <Image
              src="/assets/images/icon-archive.svg"
              width={24}
              height={24}
              alt="archive"
              className="w-auto h-auto"
            />
          </div>
          <div>
            <h1 className="font-semibold text-[16px] text-black dark:text-white">
              Archive Note
            </h1>
            <p className="text-[14px] text-neutral-700 dark:text-neutral-200">
              Are you sure you want to archive this note? You can find it in the
              Archived Notes section and restore it anytime.
            </p>
          </div>
        </article>

        <div className="flex gap-4 justify-end mx-[20px] py-4">
          <button
            onClick={() => setDisplayArchive(false)}
            className="bg-neutral-200 px-4 py-3 text-neutral-700 font-medium text-[14px] rounded-lg"
          >
            Cancel
          </button>
          <button className="bg-primary-blue px-4 py-3 text-white font-medium text-[14px] rounded-lg">
            Archive Note
          </button>
        </div>
      </div>
    </Overlay>
  );
}
