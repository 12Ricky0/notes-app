"use client";
import Link from "next/link";

export default function Sidebar_Menu() {
  return (
    <section className="md:w-[290px] border-r dark:bg-black h-screen">
      <div className="md:pl-8 md:mr-4 mx-4 md:mx-0 pt-[20px] ">
        <Link
          className="bg-primary-blue hidden md:block text-white py-3 rounded-lg font-medium text-[14px] px-[58px]"
          href=""
        >
          + Create New Note
        </Link>

        <article className=" mt-4 flex bg-neutral-300 p-2 rounded-lg flex-col gap-3 border-b pb-3">
          <h1 className="font-semibold text-[16px] dark:text-white text-primary-dark">
            React Performance Optimization
          </h1>
          <div>
            <span className="bg-neutral-200 dark:bg-neutral-700 dark:text-white px-[6px] text-[12px] font-normal text-primary-dark rounded-sm mr-1">
              Dev
            </span>
            <span className="bg-neutral-200 px-[6px] text-[12px] font-normal text-primary-dark rounded-[4px]">
              React
            </span>
          </div>
          <p className=" text-[12px] dark:text-white font-normal text-neutral-700">
            29 Oct 2024
          </p>
        </article>
        <article className=" mt-4 flex  p-2 rounded-lg flex-col gap-3 border-b pb-3">
          <h1 className="font-semibold text-[16px] dark:text-white text-primary-dark">
            React Performance Optimization
          </h1>
          <div>
            <span className="bg-neutral-200 dark:bg-neutral-700 dark:text-white px-[6px] text-[12px] font-normal text-primary-dark rounded-sm mr-1">
              Dev
            </span>
            <span className="bg-neutral-200 px-[6px] text-[12px] font-normal text-primary-dark rounded-[4px]">
              React
            </span>
          </div>
          <p className=" text-[12px] dark:text-white font-normal text-neutral-700">
            29 Oct 2024
          </p>
        </article>
      </div>
    </section>
  );
}
