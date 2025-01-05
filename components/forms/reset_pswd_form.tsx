"use client";

import Image from "next/image";
import { useState } from "react";

export default function Reset_form() {
  const [showPassword, setShowPassword] = useState(false);
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
        action=""
        className="text-primary-dark dark:text-white mx-4 md:mx-12 text-[14px] pb-[40px]"
      >
        <fieldset className="flex justify-between">
          <label className=" mb-[6px] font-medium" htmlFor="password">
            New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className="border cursor-pointer rounded-lg py-3 w-full px-3  hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
            type={showPassword ? "text" : "password"}
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

          <div className="flex mb-4 mt-[6px] items-center gap-2 text-[12px] text-tetiary-semi-dark dark:text-secondary-light-gray">
            <Image
              src="/assets/images/icon-info.svg"
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
            className="border cursor-pointer rounded-lg py-3 w-full px-3 mb-4 hover:bg-neutral-300 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4"
            type={showPassword ? "text" : "password"}
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
        </div>

        <button
          type="submit"
          className=" w-full py-3 text-white font-bold rounded-lg bg-primary-blue"
        >
          Reset Password
        </button>
      </form>
    </section>
  );
}
