"use client";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../../context";
import ChangePassword_form from "../forms/change_pswd_form";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { Toast } from "./utilities";

export function Settings_Nav() {
  const { settings, setSettings, darkMode } = useContext(NotesContext);

  return (
    <section
      className={`${
        settings ? "hidden" : "block"
      } md:ml-8 mx-4 lg:block  h-screen overflow-scroll lg:border-r dark:border-neutral-800 pr-4`}
    >
      <h1 className="font-bold text-[24px] text-black dark:text-white mb-4 lg:hidden">
        Settings
      </h1>
      <div className="flex flex-col  border-b dark:border-neutral-800 pb-4 lg:mt-[20px] lg:w-[258px] cursor-pointer">
        <div
          onClick={() => setSettings("Color Theme")}
          className={`flex justify-between items-center py-[10px] ${
            settings == "Color Theme" && "bg-neutral-100 dark:bg-neutral-800"
          }   rounded-md`}
        >
          <div
            className="flex gap-2
         px-2 font-medium text-sm text-neutral-950 dark:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke={`${
                  settings == "Color Theme"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
              />
              <path
                stroke={`${
                  settings == "Color Theme"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Color Theme</span>
          </div>
          <Image
            src={`/assets/images/icon-chevron-right${
              darkMode ? "-white" : ""
            }.svg`}
            width={15}
            height={15}
            alt="right"
            className={` mr-[9px] h-auto w-auto ${
              settings == "Color Theme" ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSettings("Font Theme")}
          className={`flex py-[10px] px-2 ${
            settings == "Font Theme" && "bg-neutral-100 dark:bg-neutral-800"
          }  rounded-md justify-between`}
        >
          <div className="flex gap-2 font-medium text-sm text-neutral-950 dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill={`${
                  settings == "Font Theme"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                fillRule="evenodd"
                d="M20.999 10.979H14.63a1 1 0 0 0-1 1v1.13a1 1 0 1 0 2 0v-.13h1.154v4.409h-.39a1 1 0 1 0 0 2h2.84a1 1 0 1 0 0-2h-.45v-4.41h1.214v.13a1 1 0 1 0 2 0v-1.13a1 1 0 0 0-1-1Z"
                clipRule="evenodd"
              />
              <path
                fill={`${
                  settings == "Font Theme"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                fillRule="evenodd"
                d="M12.185 17.388H10.29V6.61h4.415v1.25a1 1 0 0 0 2 0V5.61a1 1 0 0 0-1-1H2.999a1 1 0 0 0-1 1v2.25a1 1 0 0 0 2 0V6.61H8.29v10.78H6.517a1 1 0 1 0 0 2h5.668a1 1 0 1 0 0-2Z"
                clipRule="evenodd"
              />
            </svg>
            <span>Font Theme</span>
          </div>

          <Image
            src={`/assets/images/icon-chevron-right${
              darkMode ? "-white" : ""
            }.svg`}
            width={15}
            height={15}
            alt="right"
            className={` w-auto h-auto mr-[9x] ${
              settings == "Font Theme" ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSettings("Change Password")}
          className={`flex py-[10px] px-2 ${
            settings == "Change Password" &&
            "bg-neutral-100 dark:bg-neutral-800"
          }  rounded-md justify-between`}
        >
          <div className="flex gap-2 font-medium text-sm text-neutral-950 dark:text-white">
            {/* <Image
              src="/assets/images/icon-lock.svg"
              width={20}
              height={20}
              alt="lock"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke={`${
                  settings == "Change Password"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M16.424 9.448V7.3a4.552 4.552 0 0 0-4.551-4.551 4.55 4.55 0 0 0-4.57 4.53v2.168"
              />
              <path
                stroke={`${
                  settings == "Change Password"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M15.683 21.25H8.042a3.792 3.792 0 0 1-3.792-3.792v-4.29a3.792 3.792 0 0 1 3.792-3.791h7.641a3.792 3.792 0 0 1 3.792 3.792v4.289a3.792 3.792 0 0 1-3.792 3.792Z"
                clipRule="evenodd"
              />
              <path
                stroke={`${
                  settings == "Change Password"
                    ? "#335CFF"
                    : darkMode
                    ? "#E0E4EA"
                    : "#0E121B"
                } `}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                d="M11.862 14.203v2.22"
              />
            </svg>
            <span>Change Password</span>
          </div>
          <Image
            src={`/assets/images/icon-chevron-right${
              darkMode ? "-white" : ""
            }.svg`}
            width={15}
            height={15}
            alt="right"
            className={`w-auto h-auto mr-[9x] ${
              settings == "Change Password" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-4 px-2 font-medium text-sm hover:text-blue-700 text-neutral-950 dark:text-white cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke={` ${darkMode ? "#E0E4EA" : "#0E121B "} `}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M21 11.998H8.945m12.055 0-2.932-2.934M21 11.998l-2.932 2.936M14.556 8.266V7.251c0-1.56-1.121-2.891-2.651-3.15L6.702 3.046C4.765 2.718 3 4.219 3 6.195v11.61c0 1.976 1.765 3.477 3.702 3.15l5.203-1.057a3.188 3.188 0 0 0 2.65-3.149v-1.014"
          />
        </svg>
        <button onClick={() => signOut({ redirectTo: "/" })}>Logout</button>
      </div>
    </section>
  );
}

export function Color_Theme() {
  const { setSettings, setDarkMode, darkMode, setDisplayToast, setToast } =
    useContext(NotesContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  // Apply the theme to <body> when the user selects an option
  const applyTheme = (mode: string) => {
    localStorage.setItem("theme", mode);
    setTheme(mode);

    if (mode === "dark") {
      // document.body.classList.add("dark-mode");
      setDarkMode(true);
    } else if (mode === "light") {
      // document.body.classList.remove("dark-mode");
      setDarkMode(false);
    } else {
      // System theme - detect user's preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        // document.body.classList.add("dark-mode");
        setDarkMode(true);
      } else {
        // document.body.classList.remove("dark-mode");
        setDarkMode(false);
      }
    }
  };

  return (
    <>
      <div className={`mx-4 md:mx-8 lg:mx-4 mt-[25px] lg:w-[528px] `}>
        <div
          onClick={() => setSettings("")}
          className="font-medium text-sm text-neutral-600 dark:text-neutral-300 flex lg:hidden"
        >
          <Image
            src={`/assets/images/icon-arrow-left${
              darkMode ? "-white" : ""
            }.svg`}
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 mb-[20px] lg:mt-0">
          <h1 className="font-semibold text-[16px] text-neutral-950 dark:text-white">
            Color Theme
          </h1>
          <p className="text-sm text-neutral-700 mt-2 dark:text-neutral-300">
            Choose your color theme:
          </p>
        </div>

        <div
          className={`flex ${
            theme == "light" ? "bg-neutral-100 dark:bg-neutral-800" : "bg-white"
          } border py-[17px] rounded-xl dark:border-neutral-700 dark:bg-transparent justify-between items-center mb-4`}
        >
          <div className="flex">
            <div
              className={`size-[40px]  rounded-xl bg-white dark:bg-transparent dark:border-neutral-800 flex justify-center items-center border mx-4`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke={`${darkMode ? "white" : "#0E121B"} `}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.055 3v1.372m0 15.256V21m9-9h-1.372M4.427 12H3.055m15.364-6.364-.97.97M6.66 17.394l-.97.97m12.728 0-.97-.97M6.66 6.606l-.97-.97"
                />
                <path
                  stroke={`${darkMode ? "white" : "#0E121B"} `}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12.055 7.805a4.195 4.195 0 1 1 0 8.39 4.195 4.195 0 0 1 0-8.39Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm dark:text-white">
                Light Mode
              </h1>
              <p className="text-xs font-normal text-neutral-700 dark:text-neutral-300">
                Pick a clean and classic light theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input
              checked={theme === "light"}
              onChange={() => applyTheme("light")}
              type="radio"
              name="custom-option"
              className="hidden peer"
            />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>

        <div
          className={`flex ${
            theme == "dark" ? "bg-neutral-800" : "bg-white"
          } border dark:border-neutral-800 py-[17px] rounded-xl justify-between items-center mb-4`}
        >
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white dark:bg-transparent dark:border-neutral-700 flex justify-center items-center border mx-4">
              <Image
                src={`/assets/images/icon-moon${darkMode ? "-light" : ""}.svg`}
                width={24}
                height={24}
                alt="moon"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm dark:text-white">
                Dark Mode
              </h1>
              <p className="text-xs font-normal text-neutral-700 dark:text-neutral-300">
                Select a sleek and modern dark theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input
              checked={theme === "dark"}
              onChange={() => applyTheme("dark")}
              type="radio"
              name="custom-option"
              className="hidden peer"
            />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>

        <div
          className={`flex ${
            theme == "system"
              ? "bg-neutral-100 dark:bg-neutral-800"
              : "bg-white"
          } border dark:border-neutral-700 py-[17px] rounded-xl dark:bg-transparent justify-between items-center mb-4`}
        >
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white dark:bg-transparent dark:border-neutral-800 flex justify-center items-center border mx-4">
              <Image
                src={`/assets/images/icon-system-theme${
                  darkMode ? "-white" : ""
                }.svg`}
                width={24}
                height={24}
                alt="system"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm dark:text-white">
                System
              </h1>
              <p className="text-xs font-normal text-neutral-700 dark:text-neutral-300">
                Adapts to your device`s theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input
              checked={theme === "system"}
              onChange={() => applyTheme("system")}
              type="radio"
              name="custom-option"
              className="hidden peer"
            />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>
        <div className="flex justify-end">
          <button
            onSubmit={() => {
              setToast("Settings updated successfully!");
              setDisplayToast(true);
            }}
            className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}

export function Font_Theme() {
  const { setSettings, darkMode, setToast, setDisplayToast } =
    useContext(NotesContext);
  const router = useRouter();
  const fonts = [
    {
      name: "Sans-serif",
      value: "sans",
    },
    { name: "Serif", value: "serif" },
    { name: "Monospace", value: "monospace" },
  ];
  const [selectedFont, setSelectedFont] = useState("serif");

  useEffect(() => {
    const savedFont = localStorage.getItem("fontTheme");
    if (savedFont) {
      setSelectedFont(savedFont);
    } else {
      localStorage.setItem("fontTheme", "serif");
    }
  }, []);

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
  };

  const applyFontClass = (font: string) => {
    document.body.classList.remove("font-sans", "font-serif", "font-monospace");
    document.body.classList.add("font-" + font);
  };

  const applyChanges = () => {
    // Save to local storage
    localStorage.setItem("fontTheme", selectedFont);
    const savedFont = localStorage.getItem("fontTheme");
    if (savedFont) {
      applyFontClass(savedFont);
    }
    router.refresh();
  };

  return (
    <>
      <div className={`mx-4 md:mx-8 lg:mx-4 mt-[25px] lg:w-[528px]`}>
        <div
          onClick={() => setSettings("")}
          className="font-medium text-sm text-neutral-600 dark:text-neutral-300 flex lg:hidden"
        >
          <Image
            src={`/assets/images/icon-arrow-left${
              darkMode ? "-white" : ""
            }.svg`}
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 lg:mt-0 mb-[20px]">
          <h1 className="font-semibold text-[16px] text-neutral-950 dark:text-white">
            Font Theme
          </h1>
          <p className="text-sm text-neutral-700 mt-2 dark:text-neutral-300">
            Choose your font theme:
          </p>
        </div>
        {fonts.map((font, index) => (
          <div key={index}>
            <div
              className={`flex ${
                font.value == selectedFont
                  ? "bg-neutral-100 dark:bg-neutral-800"
                  : "bg-white dark:bg-neutral-950"
              } border py-[17px] rounded-xl dark:border-neutral-700 justify-between items-center mb-4`}
            >
              <div className="flex">
                <div className="size-[40px] rounded-xl bg-white dark:bg-transparent dark:border-neutral-700 flex justify-center items-center border mx-4">
                  <Image
                    src={`/assets/images/icon-font-${font.value}${
                      darkMode ? "-white" : ""
                    }.svg`}
                    width={24}
                    height={24}
                    alt={font.name}
                  />
                </div>

                <div>
                  <h1 className="font-medium text-neutral-950 dark:text-white text-sm">
                    {font.name}
                  </h1>
                  <p className="text-xs font-normal text-neutral-700 dark:text-neutral-300">
                    {font.value === "sans-serif"
                      ? "Clean and modern, easy to read."
                      : font.value === "serif"
                      ? "Classic and elegant for a timeless feel."
                      : "Code-like, great for a technical vibe."}
                  </p>
                </div>
              </div>
              <label className="inline-flex items-center mr-4 cursor-pointer">
                <input
                  type="radio"
                  name={font.name}
                  checked={selectedFont === font.value}
                  onChange={() => handleFontChange(font.value)}
                  className="hidden peer"
                />
                <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
              </label>{" "}
            </div>
          </div>
        ))}
        <div onClick={applyChanges} className="flex justify-end">
          <button
            onSubmit={() => {
              setToast("Settings updated successfully!");
              setDisplayToast(true);
            }}
            className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition"
          >
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}

export function Settings_UI() {
  const { settings, toast, displayToast } = useContext(NotesContext);

  return (
    <>
      {settings == "Color Theme" && <Color_Theme />}
      {settings == "Font Theme" && <Font_Theme />}
      {settings == "Change Password" && <ChangePassword_form />}
      {displayToast && (
        <div className="lg:absolute lg:right-[100px] right-0 lg:translate-y-6 z-40 mx-4 lg:mx-0 bottom-[70px] lg:bottom-[62px] fixed">
          <Toast
            title={toast}
            link={toast == "Note archived." ? "Archieved Notes" : ""}
          />
        </div>
      )}{" "}
    </>
  );
}
