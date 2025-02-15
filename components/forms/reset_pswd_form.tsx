"use client";

import { resetPassword } from "@/libs/actions";
import Image from "next/image";
import { useState, useActionState, ChangeEvent, useContext } from "react";
import { NotesContext } from "../../context";

export default function Reset_form({ email }: { email: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(NotesContext);
  const payload = resetPassword.bind(null, email);
  const [state, formAction] = useActionState(payload, null);

  const [formData, setFormData] = useState({
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="mx-4 border rounded-lg text-center bg-white dark:bg-primary-dark md:w-[540px] w-full">
      <article className="my-[40px] r">
        <Image
          src="/assets/images/logo.svg"
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto mx-auto"
        />
        <h1 className="mt-4 mb-2 text-[24px] text-primary-dark dark:text-white font-bold">
          Reset Your Password
        </h1>
        <p className="text-[14px] font-normal text-tetiary-semi-dark dark:text-secondary-light-gray">
          Choose a new password to secure your account.
        </p>
      </article>

      <form
        action={formAction}
        className="text-primary-dark dark:text-white mx-4 md:mx-12 text-[14px] pb-[40px]"
      >
        <fieldset className="flex justify-between">
          <label className=" mb-[6px] font-medium" htmlFor="password">
            New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer dark:text-white rounded-lg py-3 w-full px-3 dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.new_password
                ? "outline-red-500 border-red-500 focus:outline-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
          />
          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />

          <div
            className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
              state?.errors?.new_password
                ? "text-red-500"
                : "text-tetiary-semi-dark dark:text-secondary-light-gray"
            } `}
          >
            <Image
              src={`/assets/images/icon-info${
                darkMode ? "-white" : state?.errors?.new_password ? "-red" : ""
              }.svg`}
              width={14}
              height={14}
              alt="info"
              className="w-aut h-aut "
            />
            <p>At least 8 characters</p>
          </div>
        </div>

        <fieldset className="flex justify-between">
          <label className=" mb-[6px] font-medium" htmlFor="password">
            Confirm New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer dark:text-white rounded-lg py-3 w-full px-3 dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.confirm_password
                ? "outline-red-500 border-red-500 focus:outline-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {state?.errors?.confirm_password && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.errors.confirm_password
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode && !state
                    ? "-white"
                    : state.errors.confirm_password
                    ? "-red"
                    : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.errors.confirm_password}</p>
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
                  darkMode && !state ? "-white" : state.message ? "-red" : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.message}</p>
            </div>
          )}

          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <button
          type="submit"
          className=" w-full py-3 mt-4 text-white font-bold rounded-lg bg-primary-blue"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
}
