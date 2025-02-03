"use client";
import Image from "next/image";
import data from "../../data.json";
import { useContext } from "react";
import { NotesContext } from "../../context";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

  const { tag, setTag, setMenu, menu, darkMode } = useContext(NotesContext);
  const router = useRouter();

  return (
    <section className="lg:border-r dark:lg:border-neutral-800 lg:h-screen overflow-scroll lg:w-[272px]">
      <Image
        src="/assets/images/logo.svg"
        width={24}
        height={24}
        alt="logo"
        className="w-auto h-auto mx-4 pt-6 pb-3 hidden lg:block"
      />

      <>
        <nav className="mx-4 mt-4 hidden dark:text-neutral-200 lg:block">
          <div onClick={() => setTag("")}>
            <Link
              href="/dashboard/notes"
              className={`flex text-[14px] cursor-pointer ${
                tag.length == 0 && "bg-neutral-200 dark:bg-neutral-800"
              }  rounded-lg p-3 justify-between items-center`}
            >
              <div className="inline-flex items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-auto h-auto mr-2 "
                >
                  <path
                    fill={`${
                      tag.length == 0
                        ? "#335CFF"
                        : darkMode
                        ? "#E0E4EA"
                        : "#0E121B"
                    } `}
                    fillRule="evenodd"
                    d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill={`${
                      tag.length == 0
                        ? "#335CFF"
                        : darkMode
                        ? "#E0E4EA"
                        : "#0E121B"
                    } `}
                    fillRule="evenodd"
                    d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill={`${
                      tag.length == 0
                        ? "#335CFF"
                        : darkMode
                        ? "#E0E4EA"
                        : "#0E121B"
                    } `}
                    fillRule="evenodd"
                    d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>All Notes</span>
              </div>

              <Image
                src={`/assets/images/icon-chevron-right${
                  darkMode ? "-white" : ""
                }.svg`}
                width={24}
                height={24}
                alt="arrow-right"
                className={`w-auto ${
                  tag.length == 0 ? "block" : "hidden"
                } h-auto right-2`}
              />
            </Link>
          </div>
          <div onClick={() => setTag("Archieved")}>
            <Link
              href="/dashboard/notes"
              className={`flex justify-between cursor-pointer p-3 items-center ${
                tag == "Archieved" &&
                "bg-neutral-200 dark:bg-neutral-800 rounded-lg "
              }`}
            >
              <div className={`flex text-[14px]  `}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-auto h-auto mr-2"
                >
                  <path
                    stroke={`${
                      tag == "Archieved"
                        ? "#335CFF"
                        : darkMode
                        ? "#E0E4EA"
                        : "#0E121B"
                    } `}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
                  />
                  <path
                    stroke={`${
                      tag == "Archieved"
                        ? "#335CFF"
                        : darkMode
                        ? "#E0E4EA"
                        : "#0E121B"
                    } `}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
                  />
                </svg>
                <span>Archived Notes</span>
              </div>
              <Image
                src={`/assets/images/icon-chevron-right${
                  darkMode ? "-white" : ""
                }.svg`}
                width={24}
                height={24}
                alt="arrow-right"
                className={`w-auto ${
                  tag == "Archieved" ? "block" : "hidden"
                } h-auto right-2`}
              />
            </Link>
          </div>
          <div className="border-t dark:lg:border-neutral-800 mt-2">
            <h1 className="mt-2 ml-3 mb-2 font-medium text-neutral-500 text-[14px]">
              Tags
            </h1>

            {tagsArray?.map((tagName, index) => (
              <div onClick={() => setTag(tagName as string)} key={index}>
                <Link
                  href="/dashboard/notes"
                  className={`justify-between cursor-pointer flex p-3 ${
                    tag == tagName &&
                    "bg-neutral-200 dark:bg-neutral-800 rounded-lg "
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
                        stroke={`${
                          tag == tagName
                            ? "#335CFF"
                            : darkMode
                            ? "#E0E4EA"
                            : "#0E121B"
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
                            ? "#E0E4EA"
                            : "#0E121B"
                        } `}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className=" text-[14px] text-neutral-700 dark:text-neutral-200">
                      {tagName as string}
                    </span>
                  </div>

                  <Image
                    src={`/assets/images/icon-chevron-right${
                      darkMode ? "-white" : ""
                    }.svg`}
                    width={24}
                    height={24}
                    alt="arrow-right"
                    className={`w-auto ${
                      tag == tagName ? "block" : "hidden"
                    } h-auto right-2`}
                  />
                </Link>
              </div>
            ))}
          </div>
        </nav>
      </>

      <>
        <footer className=" bottom-0 border-t py-3 w-full justify-between bg-white dark:bg-neutral-950 dark:border-neutral-800 dark:shadow-lg md:px-8 px-4 fixed flex lg:hidden">
          <div
            onClick={() => {
              setMenu("Home");
              setTag("");
              router.push("/dashboard/notes");
            }}
            className={`flex flex-col justify-center items-center ${
              menu == "Home" && "bg-blue-50 rounded border-r-0"
            }  px-[22px]  md:px-7 py-1`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="w-auto h-auto "
            >
              <path
                fill={`${menu == "Home" ? "#335CFF" : "#525866"} `}
                fillRule="evenodd"
                d="M4.496 8.025a.75.75 0 0 1 .75.75v8.675a2.314 2.314 0 0 0 2.314 2.314h8.88a2.314 2.314 0 0 0 2.313-2.314V8.775a.75.75 0 0 1 1.5 0v8.675a3.814 3.814 0 0 1-3.814 3.814H7.56a3.814 3.814 0 0 1-3.814-3.814V8.775a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
              <path
                fill={`${menu == "Home" ? "#335CFF" : "#525866"} `}
                fillRule="evenodd"
                d="M10.06 3.41a3.127 3.127 0 0 1 3.88 0l7.525 5.958a.75.75 0 1 1-.93 1.176l-7.526-5.957a1.628 1.628 0 0 0-2.018 0l-7.525 5.957a.75.75 0 1 1-.931-1.176L10.06 3.41Z"
                clipRule="evenodd"
              />
              <path
                fill={`${menu == "Home" ? "#335CFF" : "#525866"} `}
                fillRule="evenodd"
                d="M17.668 4.193a.75.75 0 0 1 .75.75v2.354a.75.75 0 0 1-1.5 0V4.943a.75.75 0 0 1 .75-.75ZM11.974 13.688h.055c.377 0 .702 0 .97.02.283.022.565.071.838.203a2.25 2.25 0 0 1 1.05 1.05c.131.272.18.554.202.837.02.268.02.593.02.97v3.746a.75.75 0 0 1-1.5 0v-3.718c0-.412 0-.678-.015-.881-.016-.195-.041-.268-.059-.303a.75.75 0 0 0-.35-.35c-.035-.017-.108-.043-.302-.058a12.747 12.747 0 0 0-.881-.017c-.412 0-.679.001-.881.017-.195.015-.268.04-.303.058a.75.75 0 0 0-.35.35c-.017.035-.043.108-.058.303-.016.203-.016.469-.016.88v3.72a.75.75 0 0 1-1.5 0v-3.747c0-.377 0-.702.02-.97.022-.283.071-.565.203-.838a2.25 2.25 0 0 1 1.05-1.05c.273-.131.554-.18.837-.202.268-.02.593-.02.97-.02Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Home
            </span>
          </div>
          <div
            onClick={() => setMenu("Search")}
            className={`flex flex-col justify-center px-[22px] md:px-7 items-center ${
              menu == "Search" && "bg-blue-50 rounded border-r-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${menu == "Search" ? "#335CFF" : "#525866"} `}
                fillRule="evenodd"
                d="M11.248 3.5a7.289 7.289 0 1 0 0 14.577 7.289 7.289 0 0 0 0-14.577ZM2.46 10.79a8.789 8.789 0 1 1 17.577 0 8.789 8.789 0 0 1-17.577 0Z"
                clipRule="evenodd"
              />
              <path
                fill={`${menu == "Search" ? "#335CFF" : "#525866"} `}
                fillRule="evenodd"
                d="m16.736 15.648 5.616 5.6-1.06 1.063-5.615-5.601 1.06-1.062Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Search
            </span>
          </div>
          <div
            onClick={() => {
              setMenu("Archieved");
              setTag("Archieved");
              router.push("/dashboard/notes");
            }}
            className={`flex flex-col justify-center px-[22px] md:px-7 items-center ${
              menu == "Archieved" && "bg-blue-50 rounded border-r-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                stroke={`${menu == "Archieved" ? "#335CFF" : "#525866"} `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
              />
              <path
                stroke={`${menu == "Archieved" ? "#335CFF" : "#525866"} `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
              />
            </svg>

            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Archieved
            </span>
          </div>
          <div
            onClick={() => setMenu("Tag")}
            className={`flex flex-col justify-center px-[22px] md:px-7 items-center ${
              menu == "Tag" && "bg-blue-50 rounded border-r-0"
            }`}
          >
            <Link href="/dashboard/menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke={`${menu == "Tag" ? "#335CFF" : "#525866"} `}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M3.016 5.966c.003-1.411 1.07-2.677 2.456-2.916.284-.05 3.616-.042 4.995-.041 1.364 0 2.527.491 3.49 1.452 2.045 2.042 4.088 4.085 6.128 6.13 1.208 1.21 1.224 3.066.022 4.28a805.496 805.496 0 0 1-5.229 5.228c-1.212 1.201-3.069 1.186-4.279-.022-2.064-2.058-4.127-4.115-6.182-6.182-.795-.8-1.264-1.766-1.368-2.895-.084-.903-.035-4.26-.033-5.034Z"
                  clipRule="evenodd"
                />
                <path
                  stroke={`${menu == "Tag" ? "#335CFF" : "#525866"} `}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M9.907 8.315a1.607 1.607 0 0 1-1.61 1.583c-.872-.002-1.599-.73-1.594-1.596a1.604 1.604 0 0 1 1.633-1.607c.864.003 1.575.736 1.571 1.62Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
                Tag
              </span>
            </Link>
          </div>
          <div
            onClick={() => setMenu("Settings")}
            className={`flex flex-col justify-center px-[22px] md:mx-7 items-center ${
              menu == "Settings" && "bg-blue-50 rounded border-r-0"
            }`}
          >
            <Link
              href="/dashboard/settings"
              className="flex items-center justify-center flex-col"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill={`${menu == "Settings" ? "#335CFF" : "#525866"} `}
                  fillRule="evenodd"
                  d="M8.959 4.529A2.529 2.529 0 0 1 11.488 2h1.221a1.243 1.243 0 0 0 .035.001 2.542 2.542 0 0 1 2.458 2.602c.004.164.05.324.133.467l.003.005.002.003.003.005c.289.488.92.65 1.408.36l.01-.005a2.541 2.541 0 0 1 3.464.93v.001l.583 1.011c.015.025.028.05.039.077a2.54 2.54 0 0 1-.967 3.386l-.005.003c-.156.09-.286.22-.375.376l-.009.015-.001.002c-.28.49-.112 1.112.374 1.396l.002.002.015.008.038.023a2.528 2.528 0 0 1 .887 3.445l-.004.008-.614 1.025a2.54 2.54 0 0 1-3.46.926 1.079 1.079 0 0 0-.497-.14h-.01a1.029 1.029 0 0 0-1.019 1.034v.01a2.54 2.54 0 0 1-2.541 2.524h-1.17a2.54 2.54 0 0 1-2.54-2.536.966.966 0 0 0-.147-.498 1.023 1.023 0 0 0-1.4-.37l-.003.002a.626.626 0 0 1-.03.016 2.541 2.541 0 0 1-3.442-.993l-.578-.996a1.144 1.144 0 0 1-.018-.03 2.528 2.528 0 0 1 .938-3.447 1.041 1.041 0 0 0-.001-1.803h-.001a2.54 2.54 0 0 1-.93-3.466l.01-.015.622-1.024a2.54 2.54 0 0 1 3.46-.923l.009.005a.963.963 0 0 0 .479.135 1.04 1.04 0 0 0 1.04-1.022V4.53Zm6.386.557v.002-.002ZM11.488 3.5c-.569 0-1.029.46-1.029 1.029v.023a2.541 2.541 0 0 1-2.547 2.505h-.005a2.463 2.463 0 0 1-1.226-.34 1.04 1.04 0 0 0-1.416.382l-.009.014-.62 1.02a1.04 1.04 0 0 0 .385 1.413l-.376.65.375-.65a2.542 2.542 0 0 1 0 4.402h-.002a1.029 1.029 0 0 0-.377 1.411l.59 1.016.007.014a1.041 1.041 0 0 0 1.42.406 2.523 2.523 0 0 1 3.43.897l.003.003.013.021.002.005c.221.373.34.797.344 1.232v.007c0 .574.466 1.04 1.042 1.04h1.169a1.04 1.04 0 0 0 1.041-1.03 2.528 2.528 0 0 1 2.511-2.539h.049c.426.011.84.128 1.209.338l.003.002a1.04 1.04 0 0 0 1.419-.382l.005-.01.615-1.025a1.028 1.028 0 0 0-.382-1.41 2.528 2.528 0 0 1-.95-3.439l.022-.036a2.51 2.51 0 0 1 .925-.923 1.04 1.04 0 0 0 .38-1.413.71.71 0 0 1-.032-.06l-.55-.953a1.041 1.041 0 0 0-1.415-.383 2.527 2.527 0 0 1-3.457-.887l-.003-.005-.002-.003c0-.002-.002-.003-.003-.005a2.464 2.464 0 0 1-.343-1.262 1.042 1.042 0 0 0-1-1.074h-.032l-.01-.001h-1.173ZM6.623 16.815l.002-.001-.002.001Zm5.455-6.785a1.717 1.717 0 1 0 0 3.434 1.717 1.717 0 0 0 0-3.434Zm-3.217 1.718a3.217 3.217 0 1 1 6.434-.001 3.217 3.217 0 0 1-6.434.001Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
                Settings
              </span>
            </Link>
          </div>
        </footer>
      </>
    </section>
  );
}
