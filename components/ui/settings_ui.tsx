import Image from "next/image";

export function Settings_UI() {
  return (
    <section className="mx-4">
      <h1 className="font-bold text-[24px] text-black dark:text-white mt-6 mb-4">
        Settings
      </h1>
      <div className="flex flex-col gap-4 border-b pb-4">
        <div className="flex gap-2 font-medium text-sm text-neutral-950">
          <Image
            src="/assets/images/icon-sun.svg"
            width={20}
            height={20}
            alt="sun"
          />
          <span>Color Theme</span>
        </div>
        <div className="flex justify-between">
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
            className="rotate-180 hidden md:block"
          />
        </div>
        <div className="flex gap-2 font-medium text-sm text-neutral-950">
          <Image
            src="/assets/images/icon-lock.svg"
            width={20}
            height={20}
            alt="lock"
          />
          <span>Change Password</span>
        </div>
      </div>

      <div className="flex gap-2 pt-4 font-medium text-sm text-neutral-950">
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
  return (
    <>
      <div className="mx-4 mt-[25px]">
        <div className="font-medium text-sm text-neutral-600 flex">
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 mb-[20px]">
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
  return (
    <>
      <div className="mx-4 mt-[25px]">
        <div className="font-medium text-sm text-neutral-600 flex">
          <Image
            src="/assets/images/icon-arrow-left.svg"
            width={20}
            height={20}
            alt="left"
            className="mr-2"
          />

          <span>Settings</span>
        </div>
        <div className="mt-3 mb-[20px]">
          <h1 className="font-semibold text-[16px] text-neutral-950">
            Font Theme
          </h1>
          <p className="text-sm text-neutral-700 mt-2">
            Choose your font theme:
          </p>
        </div>

        <div className="flex border py-[17px] rounded-xl bg-slate-100 justify-between items-center mb-4">
          <div className="flex">
            <div className="size-[40px] rounded-xl bg-white flex justify-center items-center border mx-4">
              <Image
                src="/assets/images/icon-font-sans-serif.svg"
                width={24}
                height={24}
                alt="sanSerif"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">
                Sans-serif
              </h1>
              <p className="text-xs font-normal text-neutral-700">
                Clean and modern, easy to read.
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
                src="/assets/images/icon-font-serif.svg"
                width={24}
                height={24}
                alt="serif"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">Serif</h1>
              <p className="text-xs font-normal text-neutral-700">
                Classic and elegant for a timeless feel.
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
                src="/assets/images/icon-font-monospace.svg"
                width={24}
                height={24}
                alt="monospace"
              />
            </div>

            <div>
              <h1 className="font-medium text-neutral-950 text-sm">
                Monospace
              </h1>
              <p className="text-xs font-normal text-neutral-700">
                Code-like, great for a technical vibe.
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
