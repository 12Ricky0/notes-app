import Image from "next/image";

export default function Header() {
  return (
    <header className=" lg:bg-none py-[13px] dark:bg-black lg:border-b">
      <Image
        src="/assets/images/logo.svg"
        width={24}
        height={24}
        alt="logo"
        className="w-auto h-auto mx-4 md:mx-8 lg:hidden"
      />
      <div className="lg:flex justify-between items-center mx-8 hidden ">
        <h1 className="font-bold text-black text-[24px]">All Notes</h1>

        <div className="flex gap-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search by title, content, or tags…"
              className="py-[13px] rounded-lg w-[300px] pl-10 text-[14px] bg-transparent text-neutral-500 focus:outline-none border"
            />
            <Image
              src="/assets/images/icon-search.svg"
              width={20}
              height={20}
              alt="settings"
              className=" absolute top-[14px] left-4"
            />
          </div>
          <Image
            src="/assets/images/icon-settings.svg"
            width={24}
            height={24}
            alt="settings"
            className="w-auto h-auto hidden lg:block"
          />
        </div>
      </div>
    </header>
  );
}
