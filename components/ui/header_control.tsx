"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { NotesContext } from "@/context";
import Archive from "../modals/Archive_modal";
import Delete from "../modals/Delete_modal";

export default function Header_Control() {
  const { setDisplayArchive, displayArchive, displayDelete, setDisplayDelete } =
    useContext(NotesContext);

  return (
    <section className="lg:hidden">
      <div className="mx-4 md:mx-8 flex justify-between items-center border-b py-3 ">
        <Link className="flex " href="/dashboard/notes">
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={18}
            height={18}
            alt="back"
            className="text-neutral-600"
          />
          <span className="text-neutral-600 text-[14px] ml-1">Go Back</span>
        </Link>
        <div className="flex justify-evenly gap-4">
          <Image
            src="/assets/images/icon-delete.svg"
            width={18}
            height={18}
            alt="trash"
            className=""
            onClick={() => setDisplayDelete(true)}
          />
          <Image
            src="/assets/images/icon-archive.svg"
            width={18}
            height={18}
            alt="archive"
            className=""
            onClick={() => setDisplayArchive(true)}
          />

          <span className="text-neutral-600 text-[14px] ml-1">Cancel</span>
          <span className="text-primary-blue text-[14px] ml-1">Save Note</span>
        </div>
      </div>
      {displayArchive && <Archive />}
      {displayDelete && <Delete />}
    </section>
  );
}
