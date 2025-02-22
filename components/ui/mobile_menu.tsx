"use client";
import Image from "next/image";
import { useContext } from "react";
import { NotesContext } from "../../context";
import { useRouter } from "next/navigation";
import { Notes } from "@/libs/definitions";

export function Tags({ data }: { data: Notes[] }) {
  const uniqueTags = new Set();

  data.forEach((note) => {
    note.tags.forEach((tag) => {
      uniqueTags.add(tag.trim());
    });
  });

  const tagsArray = Array.from(uniqueTags).sort();

  const { tag, setTag, menu, darkMode } = useContext(NotesContext);
  const router = useRouter();

  return (
    <div>
      <section className={` lg:hidden ${menu == "Tag" ? "block" : "hidden"}`}>
        <Image
          src="/assets/images/logo.svg"
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto mx-4 pt-6 hidden lg:block"
        />

        <>
          <nav className="mx-4 md:mx-8 mt-4">
            <div className=" ">
              <h1 className="mt-2 mb- font-bold text-black dark:text-white text-[24px]">
                Tags
              </h1>

              {tagsArray?.map((tagName, index) => (
                <div
                  onClick={() => {
                    setTag(tagName as string);
                    router.push("/dashboard/notes");
                  }}
                  key={index}
                  className={`justify-between cursor-pointer flex py-3 border-b dark:border-neutral-800`}
                >
                  <div className={`flex items-center  justify-start  `}>
                    <svg
                      className="mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke={`${
                          tag == tagName
                            ? "#335CFF"
                            : darkMode
                            ? "#CACFD8"
                            : "#2B303B"
                        } `}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                        clipRule="evenodd"
                      />
                      <path
                        stroke={`${
                          tag == tagName
                            ? "#335CFF"
                            : darkMode
                            ? "#CACFD8"
                            : "#2B303B"
                        } `}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className=" text-[14px] text-neutral-700 dark:text-neutral-300">
                      {tagName as string}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </>
      </section>
    </div>
  );
}
