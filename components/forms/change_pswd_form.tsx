"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import { NotesContext } from "../../context";

export default function ChangePassword_form() {
  const [showPassword, setShowPassword] = useState(false);
  const { setSettings, darkMode } = useContext(NotesContext);
  return (
    <div className={`mx-4 md:mx-8 lg:mx-4 mt-[16px] lg:w-[528px] `}>
      <div
        onClick={() => setSettings("")}
        className="font-medium text-sm text-neutral-600 dark:text-neutral-300 flex lg:hidden"
      >
        <Image
          src={`/assets/images/icon-arrow-left${darkMode ? "-white" : ""}.svg`}
          width={20}
          height={20}
          alt="left"
          className="mr-2"
        />

        <span>Settings</span>
      </div>
      <div className="mt-3 mb-[20px] lg:mt-0">
        <h1 className="font-semibold text-[16px] text-neutral-950 dark:text-white">
          Change Password
        </h1>
      </div>
      <form action="">
        <fieldset className="flex justify-between">
          <label
            className=" mb-[6px] font-medium dark:text-white text-[14px]"
            htmlFor="password"
          >
            Old Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className="border cursor-pointer rounded-lg py-3 w-full px-3 mb-4 dark:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
            type={showPassword ? "text" : "password"}
          />
          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <fieldset className="flex justify-between">
          <label
            className=" mb-[6px] font-medium dark:text-white text-[14px]"
            htmlFor="password"
          >
            New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className="border cursor-pointer rounded-lg py-3 w-full px-3 dark:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-800  hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
            type={showPassword ? "text" : "password"}
          />
          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />

          <div className="flex mb-4 mt-[6px] items-center gap-2 text-[12px] text-tetiary-semi-dark dark:text-secondary-light-gray">
            <Image
              src={`/assets/images/icon-info${darkMode ? "-white" : ""}.svg`}
              width={14}
              height={14}
              alt="info"
              className="w-aut h-aut "
            />
            <p>At least 8 characters</p>
          </div>
        </div>

        <fieldset className="flex justify-between">
          <label
            className=" mb-[6px] font-medium text-[14px] dark:text-white"
            htmlFor="password"
          >
            Confirm New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className="border cursor-pointer rounded-lg py-3 w-full px-3 mb-4 dark:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
            type={showPassword ? "text" : "password"}
          />
          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition">
          Save Password
        </button>
      </div>
    </div>
  );
}
