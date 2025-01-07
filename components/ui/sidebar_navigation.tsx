import Image from "next/image";

export default function Sidebar_Nav() {
  return (
    <section className="lg:border-r lg:h-screen lg:w-[272px]">
      <Image
        src="/assets/images/logo.svg"
        width={24}
        height={24}
        alt="logo"
        className="w-auto h-auto mx-4 pt-6"
      />

      <>
        <nav className="mx-4 mt-4 hidden  lg:block">
          <div className="flex text-[14px] mb-4 bg-neutral-200 rounded-lg p-3 justify-between items-center">
            <div className="inline-flex items-center">
              {" "}
              <Image
                src="/assets/images/icon-home.svg"
                width={24}
                height={24}
                alt="home"
                className="w-auto h-auto mr-2"
              />
              <span>All Notes</span>
            </div>

            <Image
              src="/assets/images/icon-chevron-right.svg"
              width={24}
              height={24}
              alt="arrow-right"
              className="w-auto h-auto right-2"
            />
          </div>
          <div className="flex text-[14px] px-3 items-center">
            <Image
              src="/assets/images/icon-archive.svg"
              width={24}
              height={24}
              alt="archieve"
              className="w-auto  mr-2 h-auto"
            />
            <span>Archived Notes</span>
          </div>

          <div className="border-t mt-2">
            <h1 className="my-2 font-medium text-neutral-500 text-[14px]">
              Tags
            </h1>

            <div className="flex items-center justify-start px-3">
              <Image
                src="/assets/images/icon-tag.svg"
                width={24}
                height={24}
                alt="tag"
                className="w-auto mr-2 h-auto "
              />
              <span className=" text-[14px] text-neutral-700">Cooking</span>
            </div>
          </div>
        </nav>
      </>

      <>
        <footer className="absolute bottom-0 border-t py-3 w-full justify-between px-10 flex lg:hidden">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/icon-home.svg"
              width={24}
              height={24}
              alt="home"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Home
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/icon-search.svg"
              width={24}
              height={24}
              alt="search"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Search
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/icon-archive.svg"
              width={24}
              height={24}
              alt="archieve"
              className="w-auto h-auto"
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Archieved
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/icon-tag.svg"
              width={24}
              height={24}
              alt="tag"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Tag
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/assets/images/icon-settings.svg"
              width={24}
              height={24}
              alt="settings"
              className="w-auto h-auto "
            />
            <span className="hidden md:block text-[12px] text-tetiary-semi-dark">
              Settings
            </span>
          </div>
        </footer>
      </>
    </section>
  );
}
