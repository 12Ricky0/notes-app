import Image from "next/image";
import data from "../../data.json";

export default function Note_Container() {
  return (
    <section className="">
      <article className="mx-4 border-b pb-3">
        <h1 className="font-bold text-[24px] text-black dark:text-white my-3">
          React Performance Optimization
        </h1>
        <div className="flex gap-7 ">
          <div>
            <div className="flex text-[12px] text-neutral-700 mb-1 items-center">
              <Image
                src="/assets/images/icon-tag.svg"
                width={16}
                height={16}
                alt="tag"
                className="mr-[6px]"
              />
              <span>Tags</span>
            </div>
            <div className="flex text-[12px] text-neutral-700 items-center">
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
          <div className="text-[12px] text-neutral-700">
            <p className="mb-1">Dev, React</p>
            <p>29 Oct 2024</p>
          </div>
        </div>
      </article>

      <article className="text-neutral-800 mt-3 text-[14px] mx-4">
        <h3>Key performance optimization techniques:</h3>

        <ol className="list-decimal list-inside my-4">
          <li>
            Code Splitting
            <ul className="list-inside list-[square]">
              <li>Use React.lazy() for route-based splitting</li>
              <li>Implement dynamic imports for heavy components</li>
            </ul>
          </li>
        </ol>

        <p>TODO: Benchmark current application and identify bottlenecks</p>
      </article>

      <footer className="absolute bottom-0 mx-4 mb-[20px] hidden lg:block border-t pt-4 ">
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
