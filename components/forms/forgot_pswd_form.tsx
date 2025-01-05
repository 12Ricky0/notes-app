"use client";

import Image from "next/image";

export default function Forgot_form() {
  return (
    <section className="mx-4 border rounded-lg text-center bg-white dark:bg-primary-dark  md:w-[540px]">
      <article className="my-[40px] ">
        <Image
          src="/assets/images/logo.svg"
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto mx-auto"
        />
        <h1 className="mt-4 mb-2 text-[24px] text-primary-dark dark:text-white font-bold">
          Forgotten your password
        </h1>
        <p className="text-[14px] font-normal text-tetiary-semi-dark dark:text-secondary-light-gray">
          Enter your email below, and we’ll send you a link to reset it.
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
            className="border cursor-pointer rounded-lg hover:bg-neutral-300 py-3 w-full px-3 mb-4 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4 "
            type="email"
            placeholder="email@example.com"
          />
        </fieldset>

        <button
          type="submit"
          className=" w-full py-3 text-white font-bold rounded-lg bg-primary-blue"
        >
          Send Reset Link
        </button>
      </form>
    </section>
  );
}
