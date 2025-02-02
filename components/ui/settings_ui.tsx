"use client";
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { NotesContext } from "../../context";
import ChangePassword_form from "../forms/change_pswd_form";
import { useRouter } from "next/navigation";

export function Settings_Nav() {
  const { settings, setSettings } = useContext(NotesContext);

  return (
    <section
      className={`${
        settings ? "hidden" : "block"
      } md:ml-8 mx-4 lg:block  h-screen overflow-scroll lg:border-r pr-4`}
    >
      <h1 className="font-bold text-[24px] text-black dark:text-white mb-4 lg:hidden">
        Settings
      </h1>
      <div className="flex flex-col  border-b pb-4 lg:mt-[20px] lg:w-[258px] cursor-pointer">
        <div
          onClick={() => setSettings("Color Theme")}
          className={`flex justify-between items-center py-[10px] ${
            settings == "Color Theme" && "bg-neutral-100"
          }   rounded-md`}
        >
          <div
            className="flex gap-2
         px-2 font-medium text-sm text-neutral-950"
          >
            <Image
              src="/assets/images/icon-sun.svg"
              width={20}
              height={20}
              alt="sun"
            />
            <span>Color Theme</span>
          </div>
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={15}
            height={15}
            alt="right"
            className={`rotate-180 mr-[9px] ${
              settings == "Color Theme" ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSettings("Font Theme")}
          className={`flex py-[10px] px-2 ${
            settings == "Font Theme" && "bg-neutral-100"
          }  rounded-md justify-between`}
        >
          <div className="flex gap-2 font-medium text-sm text-neutral-950">
            <Image
              src="/assets/images/icon-font.svg"
              width={20}
              height={20}
              alt="theme"
            />
            <span>Font Theme</span>
          </div>

          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={15}
            height={15}
            alt="right"
            className={`rotate-180 mr-[9x] ${
              settings == "Font Theme" ? "block" : "hidden"
            }`}
          />
        </div>
        <div
          onClick={() => setSettings("Change Password")}
          className={`flex py-[10px] px-2 ${
            settings == "Change Password" && "bg-neutral-100"
          }  rounded-md justify-between`}
        >
          <div className="flex gap-2 font-medium text-sm text-neutral-950">
            <Image
              src="/assets/images/icon-lock.svg"
              width={20}
              height={20}
              alt="lock"
            />
            <span>Change Password</span>
          </div>
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={15}
            height={15}
            alt="right"
            className={`rotate-180 mr-[9x] ${
              settings == "Change Password" ? "block" : "hidden"
            }`}
          />
        </div>
      </div>

      <div className="flex gap-2 pt-4 px-2 font-medium text-sm text-neutral-950">
        <Image
          src="/assets/images/icon-logout.svg"
          width={20}
          height={20}
          alt="lock"
        />
        <span>Logout</span>
      </div>
    </section>
  );
}

export function Color_Theme() {
  const { setSettings } = useContext(NotesContext);

  return (
    <>
      <div className={`mx-4 md:mx-8 lg:mx-4 mt-[25px] lg:w-[528px] `}>
        <div
          onClick={() => setSettings("")}
          className="font-medium text-sm text-neutral-600 flex lg:hidden"
        >
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 mb-[20px] lg:mt-0">
          <h1 className="font-semibold text-[16px] text-neutral-950">
            Color Theme
          </h1>
          <p className="text-sm text-neutral-700 mt-2">
            Choose your color theme:
          </p>
        </div>

        <div className="flex border py-[17px] rounded-xl bg-slate-100 justify-between items-center mb-4">
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white flex justify-center items-center border mx-4">
              <Image
                src="/assets/images/icon-sun.svg"
                width={24}
                height={24}
                alt="sun"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">
                Light Mode
              </h1>
              <p className="text-xs font-normal text-neutral-700">
                Pick a clean and classic light theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="custom-option" className="hidden peer" />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>

        <div className="flex border py-[17px] rounded-xl bg-slate-100 justify-between items-center mb-4">
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white flex justify-center items-center border mx-4">
              <Image
                src="/assets/images/icon-moon.svg"
                width={24}
                height={24}
                alt="moon"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">
                Dark Mode
              </h1>
              <p className="text-xs font-normal text-neutral-700">
                Select a sleek and modern dark theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="custom-option" className="hidden peer" />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>

        <div className="flex border py-[17px] rounded-xl bg-slate-100 justify-between items-center mb-4">
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white flex justify-center items-center border mx-4">
              <Image
                src="/assets/images/icon-system-theme.svg"
                width={24}
                height={24}
                alt="system"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">System</h1>
              <p className="text-xs font-normal text-neutral-700">
                Adapts to your device`s theme
              </p>
            </div>
          </div>
          <label className="inline-flex items-center mr-4">
            <input type="radio" name="custom-option" className="hidden peer" />
            <div className="size-4 rounded-full border-2 border-gray-300 peer-checked:border-primary-blue peer-checked:bg-white peer-checked:border-[4px]" />
          </label>{" "}
        </div>
        <div className="flex justify-end">
          <button className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition">
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}

export function Font_Theme() {
  const { setSettings } = useContext(NotesContext);
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
          className="font-medium text-sm text-neutral-600 flex lg:hidden"
        >
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 lg:mt-0 mb-[20px]">
          <h1 className="font-semibold text-[16px] text-neutral-950">
            Font Theme
          </h1>
          <p className="text-sm text-neutral-700 mt-2">
            Choose your font theme:
          </p>
        </div>
        {fonts.map((font, index) => (
          <div key={index}>
            <div className="flex border py-[17px] rounded-xl bg-slate-100 justify-between items-center mb-4">
              <div className="flex">
                <div className="size-[40px] rounded-xl bg-white flex justify-center items-center border mx-4">
                  <Image
                    src={`/assets/images/icon-font-${font.value}.svg`}
                    width={24}
                    height={24}
                    alt={font.name}
                  />
                </div>

                <div>
                  <h1 className="font-medium text-neutral-950 text-sm">
                    {font.name}
                  </h1>
                  <p className="text-xs font-normal text-neutral-700">
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
          <button className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition">
            Apply Changes
          </button>
        </div>
      </div>
    </>
  );
}

export function Settings_UI() {
  const { settings } = useContext(NotesContext);

  return (
    <>
      {settings == "Color Theme" && <Color_Theme />}
      {settings == "Font Theme" && <Font_Theme />}
      {settings == "Change Password" && <ChangePassword_form />}
    </>
  );
}
