"use client";

import Image from "next/image";
import { useState, useContext } from "react";
import Link from "next/link";
import { NotesContext } from "../../context";

export default function Login_form() {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(NotesContext);
  return (
    <section className="mx-4 border rounded-lg text-center dark:border-neutral-800 bg-white dark:bg-primary-dark md:w-[540px] w-full">
      <article className="my-[40px] r">
        <Image
          src={`/assets/images/logo${darkMode ? "-dark" : ""}.svg`}
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto mx-auto"
        />
        <h1 className="mt-4 mb-2 text-[24px] text-primary-dark dark:text-white font-bold">
          Welcome to Note
        </h1>
        <p className="text-[14px] font-normal text-tetiary-semi-dark dark:text-secondary-light-gray">
          Please log in to continue
        </p>
      </article>

      <form
        action=""
        className="text-primary-dark dark:text-white mx-4 md:mx-12 text-[14px] pb-[40px]"
      >
        <fieldset>
          <label
            className="block text-left mb-[6px] font-medium"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="border cursor-pointer dark:bg-transparent dark:border-neutral-600 rounded-lg hover:bg-neutral-300 py-3 w-full px-3 mb-4 outline-neutral-300 focus:outline-neutral-500 dark:hover:bg-neutral-800 focus:outline-2 focus:border-primary-dark transition outline-offset-4 "
            type="email"
            placeholder="email@example.com"
          />
        </fieldset>
        <fieldset className="flex justify-between">
          <label className=" mb-[6px] font-medium" htmlFor="password">
            Password
          </label>
          <Link
            href="/forgot"
            className="font-normal text-tetiary-semi-dark dark:text-secondary-light-gray underline cursor-pointer hover:text-primary-blue"
          >
            Forgot
          </Link>
        </fieldset>
        <div className="relative">
          <input
            className="border cursor-pointer rounded-lg py-3 w-full dark:bg-transparent dark:hover:bg-neutral-800 dark:border-neutral-600 px-3 mb-4 hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
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

        <button
          type="submit"
          className=" w-full py-3 text-white font-bold rounded-lg bg-primary-blue"
        >
          Login
        </button>
      </form>

      <div className="mx-4 border-y dark:border-neutral-800 md:mx-12 pb-4">
        <p className="text-[14px] mt-6 font-normal mb-6 text-tetiary-semi-dark dark:text-secondary-light-gray">
          Or log in with:
        </p>
        <div className="border dark:border-neutral-800 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-lg inline-flex w-full gap-4 py-3 items-center justify-center">
          <Image
            src={`/assets/images/icon-google${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="google"
            className="w-auto h-auto "
          />
          <h1 className="font-medium text-primary-dark dark:text-white leading-[0.5px]">
            Google
          </h1>
        </div>
      </div>

      <div className="pt-4 pb-10 ">
        <span className="text-[14px] mt-6 font-normal mb-6 text-tetiary-semi-dark dark:text-secondary-light-gray">
          No account yet?
        </span>
        <Link
          href="/register"
          className="cursor-pointer text-tetiary-semi-dark font-medium dark:text-secondary-light-gray text-[14px] hover:text-primary-blue"
        >
          {" "}
          Sign Up
        </Link>
      </div>
    </section>
  );
}
