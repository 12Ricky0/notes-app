"use client";
import { ReactNode } from "react";
import Image from "next/image";

export function Overlay({ children }: { children: ReactNode }) {
  return (
    <div
      className={`overlay min-w-full z-20 flex items-center justify-center `}
    >
      {children}
    </div>
  );
}

export function Toast({ title, link }: { title: string; link?: string }) {
  return (
    <div className="border flex w-[390px] rounded-lg p-2 items-center justify-between">
      <div className="text-xs font-normal text-neutral-950 dark:text-white flex gap-2 items-center">
        <Image
          src="/assets/images/icon-checkmark.svg"
          width={20}
          height={20}
          alt="checkmark"
          className="w-auto h-auto"
        />

        <h1>{title}</h1>
      </div>

      <div className="flex items-center gap-2 underline">
        <h1 className="text-xs font-normal text-neutral-950 dark:text-white">
          {link}
        </h1>
        <Image
          src="/assets/images/icon-cross.svg"
          width={16}
          height={16}
          alt="cross"
          className=" cursor-pointer "
        />
      </div>
    </div>
  );
}

export function Right_Menu() {
  return (
    <div className="w-[290px] mt-[20px] pl-4 border-l h-screen hidden lg:block mr-8">
      <div className="py-3 px-2 rounded-lg border w-[242px] mb-3">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              className="dark:stroke-white"
              stroke="#0E121B"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M21 7.782v8.435C21 19.165 18.919 21 15.974 21H8.026C5.081 21 3 19.165 3 16.216V7.782C3 4.834 5.081 3 8.026 3h7.948C18.919 3 21 4.843 21 7.782Z"
            />
            <path
              stroke="#0E121B"
              className="dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m15 14-3.002 3L9 14M11.998 17v-7M20.934 7H3.059"
            />
          </svg>

          <span className="font-medium text-sm text-neutral-950 dark:text-white">
            Archive Note
          </span>
        </div>
      </div>
      <div className="py-3 px-2 rounded-lg border w-[242px] mb-3">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              stroke="#0E121B"
              className="dark:stroke-white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m14.852 3.879.818 1.785h2.64c.811 0 1.47.658 1.47 1.47V8.22c0 .555-.45 1.005-1.006 1.005H5.005C4.45 9.226 4 8.776 4 8.221V7.133c0-.811.658-1.47 1.47-1.47h2.639l.818-1.784c.246-.536.78-.879 1.37-.879h3.185c.59 0 1.125.343 1.37.879ZM18.24 9.3v8.686c0 1.665-1.333 3.014-2.977 3.014H8.517c-1.644 0-2.977-1.349-2.977-3.014V9.301M10.2 12.816v4.509m3.38-4.509v4.509"
            />
          </svg>
          <span className="font-medium text-sm text-neutral-950 dark:text-white">
            Delete Note
          </span>
        </div>
      </div>
    </div>
  );
}
