"use client";

import Image from "next/image";
import { useState, useContext, useActionState, ChangeEvent } from "react";
import Link from "next/link";
import { NotesContext } from "../../context";
import { registerUser } from "@/libs/actions";
import { signIn } from "next-auth/react";

export default function Signup_form() {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(NotesContext);
  const [state, formAction] = useActionState(registerUser, null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
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
          Create Your Account
        </h1>
        <p className="text-[14px] font-normal text-tetiary-semi-dark dark:text-secondary-light-gray">
          Sign up to start organizing your notes and boost your productivity.
        </p>
      </article>

      <form
        action={formAction}
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
            className={`border cursor-pointer rounded-lg py-3 w-full px-3 dark:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.email
                ? "outline-red-500 border-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type="text"
            name="email"
            id="email"
            placeholder="email@example.com"
            onChange={handleChange}
            value={formData.email}
          />
          {state?.errors?.email && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.errors.email
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode ? "-white" : state.errors.email ? "-red" : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.errors.email}</p>
            </div>
          )}
          {state?.message && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.message
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode ? "-white" : state.message ? "-red" : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.message}</p>
            </div>
          )}
        </fieldset>
        <fieldset className="flex justify-between  mt-4">
          <label className=" mb-[6px] font-medium" htmlFor="password">
            Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer rounded-lg py-3 w-full px-3 dark:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.password
                ? "outline-red-500 border-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
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

          <div
            className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
              state?.errors?.password
                ? "text-red-500"
                : "text-tetiary-semi-dark dark:text-secondary-light-gray"
            } `}
          >
            <Image
              src={`/assets/images/icon-info${
                darkMode ? "-white" : state?.errors?.password ? "-red" : ""
              }.svg`}
              width={14}
              height={14}
              alt="info"
              className="w-aut h-aut "
            />
            <p>At least 8 characters</p>
          </div>
        </div>

        <button
          type="submit"
          className=" w-full py-3 text-white font-bold rounded-lg bg-primary-blue hover:bg-blue-500"
        >
          Sign up
        </button>
      </form>

      <div className="mx-4 border-y dark:border-neutral-800 md:mx-12 pb-4">
        <p className="text-[14px] mt-6 font-normal mb-6 text-tetiary-semi-dark dark:text-secondary-light-gray">
          Or log in with:
        </p>
        <button
          onClick={() => signIn("google")}
          className="border cursor-pointer dark:border-neutral-800 dark:hover:bg-neutral-800 hover:bg-neutral-300 rounded-lg inline-flex w-full gap-4 py-3 items-center justify-center"
        >
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
        </button>
      </div>

      <div className="pt-4 pb-10 ">
        <span className="text-[14px] mt-6 font-normal mb-6 text-tetiary-semi-dark dark:text-secondary-light-gray">
          Already have an account?
        </span>
        <Link
          href="/"
          className="cursor-pointer text-tetiary-semi-dark font-medium dark:text-secondary-light-gray text-[14px] hover:text-primary-blue"
        >
          {" "}
          Login
        </Link>
      </div>
    </section>
  );
}
