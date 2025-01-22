"use client";
import Image from "next/image";
import data from "../../data.json";
import { useContext } from "react";
import { NotesContext } from "../../context";

export default function Sidebar_Nav() {
  // Use a Set to store unique tags
  const uniqueTags = new Set();

  // Loop through each note and add its tags to the Set
  data.notes.forEach((note) => {
    note.tags.forEach((tag) => {
      uniqueTags.add(tag);
    });
  });

  // Convert the Set back to an array
  const tagsArray = Array.from(uniqueTags).sort();

  const { tag, setTag, setMenu, menu } = useContext(NotesContext);

  return (
    <section className="lg:border-r lg:h-screen lg:w-[272px]">
      <Image
        src="/assets/images/logo.svg"
        width={24}
        height={24}
        alt="logo"
        className="w-auto h-auto mx-4 pt-6 pb-3 hidden lg:block"
      />

      <>
        <nav className="mx-4 mt-4 hidden  lg:block">
          <div
            onClick={() => setTag("")}
            className={`flex text-[14px] cursor-pointer ${
              tag.length == 0 && "bg-neutral-200 "
            }  rounded-lg p-3 justify-between items-center`}
          >
            <div className="inline-flex items-center ">
              <Image
                src="/assets/images/icon-home.svg"
                width={24}
                height={24}
                alt="home"
                className="w-auto h-auto mr-2"
              />
              <span>All Notes</span>
            </div>

            <Image
              src="/assets/images/icon-chevron-right.svg"
              width={24}
              height={24}
              alt="arrow-right"
              className={`w-auto ${
                tag.length == 0 ? "block" : "hidden"
              } h-auto right-2`}
            />
          </div>
          <div className="flex text-[14px] p-3 cursor-pointer items-center">
            <Image
              src="/assets/images/icon-archive.svg"
              width={24}
              height={24}
              alt="archieve"
              className="w-auto  mr-2 h-auto"
            />
            <span>Archived Notes</span>
          </div>

          <div className="border-t mt-2">
            <h1 className="mt-2 ml-3 mb-6 font-medium text-neutral-500 text-[14px]">
              Tags
            </h1>

            {tagsArray?.map((tagName, index) => (
              <div
                onClick={() => setTag(tagName as string)}
                key={index}
                className={`justify-between cursor-pointer flex p-3 ${
                  tag == tagName && "bg-neutral-200 rounded-lg "
                }`}
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
                      stroke={`${tag == tagName ? "#335CFF" : "#0E121B"} `}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                      clipRule="evenodd"
                    />
                    <path
                      stroke={`${tag == tagName ? "#335CFF" : "#0E121B"} `}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className=" text-[14px] text-neutral-700">
                    {tagName as string}
                  </span>
                </div>

                <Image
                  src="/assets/images/icon-chevron-right.svg"
                  width={24}
                  height={24}
                  alt="arrow-right"
                  className={`w-auto ${
                    tag == tagName ? "block" : "hidden"
                  } h-auto right-2`}
                />
              </div>
            ))}
          </div>
        </nav>
      </>

      <>
        <footer className=" bottom-0 border-t py-3 w-full justify-between bg-white md:px-8 px-4 fixed flex lg:hidden">
          <div
            onClick={() => setMenu("Home")}
            className={`flex flex-col justify-center items-center ${
              menu == "Home" && "bg-blue-50 rounded"
            }  px-[22px]  py-1`}
          >
            <Image
              src="/assets/images/icon-home.svg"
              width={24}
              height={24}
              alt="home"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Home
            </span>
          </div>
          <div
            onClick={() => setMenu("Search")}
            className={`flex flex-col justify-center px-[22px] items-center ${
              menu == "Search" && "bg-blue-50 rounded"
            }`}
          >
            <Image
              src="/assets/images/icon-search.svg"
              width={24}
              height={24}
              alt="search"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Search
            </span>
          </div>
          <div
            onClick={() => setMenu("Archieved")}
            className={`flex flex-col justify-center px-[22px] items-center ${
              menu == "Archieved" && "bg-blue-50 rounded"
            }`}
          >
            <Image
              src="/assets/images/icon-archive.svg"
              width={24}
              height={24}
              alt="archieve"
              className="w-auto h-auto"
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Archieved
            </span>
          </div>
          <div
            onClick={() => setMenu("Tag")}
            className={`flex flex-col justify-center px-[22px] items-center ${
              menu == "Tag" && "bg-blue-50 rounded"
            }`}
          >
            <Image
              src="/assets/images/icon-tag.svg"
              width={24}
              height={24}
              alt="tag"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Tag
            </span>
          </div>
          <div
            onClick={() => setMenu("Settings")}
            className={`flex flex-col justify-center px-[22px] items-center ${
              menu == "Settings" && "bg-blue-50 rounded"
            }`}
          >
            <Image
              src="/assets/images/icon-settings.svg"
              width={24}
              height={24}
              alt="settings"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Settings
            </span>
          </div>
        </footer>
      </>
    </section>
  );
}
