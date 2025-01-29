"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotesContext } from "@/context";
import Archive from "../modals/Archive_modal";
import Delete from "../modals/Delete_modal";
import { useRouter, usePathname } from "next/navigation";

export default function Header_Control() {
  const { setDisplayArchive, displayArchive, displayDelete, setDisplayDelete } =
    useContext(NotesContext);

  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="lg:hidden">
      <div className="mx-4 md:mx-8 flex justify-between items-center border-b py-3 ">
        <div className="flex " onClick={() => router.back()}>
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={18}
            height={18}
            alt="back"
            className="text-neutral-600"
          />
          <span className="text-neutral-600 text-[14px] ml-1">Go Back</span>
        </div>
        <div className="flex justify-evenly gap-4">
          <Image
            src="/assets/images/icon-delete.svg"
            width={18}
            height={18}
            alt="trash"
            className={`${pathname == "/dashboard/notes/create" && "hidden"}`}
            onClick={() => setDisplayDelete(true)}
          />
          <Image
            src="/assets/images/icon-archive.svg"
            width={18}
            height={18}
            alt="archive"
            className={`${pathname == "/dashboard/notes/create" && "hidden"}`}
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
