import Image from "next/image";

export default function Note_Form() {
  return (
    <section className="lg:w-[55%] lg:border-r relative">
      <form className="mx-4 md:mx-8 lg:mx-4 border-b pb-3">
        <input
          className="font-bold text-[20px] md:text-2xl text-black dark:text-white my-3 bg-transparent placeholder:text-black outline-none"
          placeholder="Enter a title... "
        />
        <div className="flex md:gap-7">
          <div className="w-[30%] md:w-auto">
            <div className="flex text-[12px] md:text-[14px] text-neutral-700 mb-1 items-center">
              <Image
                src="/assets/images/icon-tag.svg"
                width={16}
                height={16}
                alt="tag"
                className="mr-[6px]"
              />
              <label htmlFor="tag">Tags</label>
            </div>
            <div className="flex md:text-[14px] text-[12px] text-neutral-700 items-center">
              <Image
                src="/assets/images/icon-clock.svg"
                width={16}
                height={16}
                alt="clock"
                className="mr-[6px]"
              />
              <span>Last Edited</span>
            </div>
          </div>
          <div className="md:text-[14px] text-[12px] text-neutral-700">
            <input
              type="text"
              className="mb-1 bg-transparent outline-1 whitespace-pre-line outline-neutral-400 pl-1 w-full"
              name="tag"
              placeholder="Add tags separated by
               commas (e.g. Work, Planning)"
            />
            <input
              readOnly
              defaultValue="Not yet saved"
              className="outline-none bg-transparent text-neutral-400 pl-1"
            />
          </div>
        </div>
      </form>

      <textarea
        className="text-neutral-800 mt-3 text-[14px] px-4 md:px-8 lg:px-4 w-full outline-none bg-transparent h-[460px] placeholder:text-neutral-800"
        placeholder="Start typing your note here..."
      />

      <footer className="absolute bottom-0 px-4 mb-[20px] lg:w-full hidden lg:block border-t pt-4 ">
        <button className="bg-primary-blue px-4 py-2 text-white font-medium text-[14px] rounded-lg mr-4">
          Save Note
        </button>
        <button className="bg-neutral-200 px-4 py-2 text-neutral-700 font-medium text-[14px] rounded-lg">
          Cancel
        </button>
      </footer>
    </section>
  );
}
