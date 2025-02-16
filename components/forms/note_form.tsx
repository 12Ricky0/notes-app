"use client";
import Image from "next/image";
import { useContext, useActionState, useEffect } from "react";
import { NotesContext } from "../../context";
import { createNote } from "@/libs/actions";
import Header_Control from "../ui/header_control";

export default function Note_Form() {
  const { darkMode, setToast, setDisplayToast } = useContext(NotesContext);
  const [state, formAction] = useActionState(createNote, null);

  useEffect(() => {
    if (!state?.errors) {
      setToast("Note saved successfully!");
      setDisplayToast(true);
      // setFormData({
      //   old_password: "",
      //   new_password: "",
      //   confirm_password: "",
      // });
    }
  }, [state, setDisplayToast, setToast]);
  return (
    <section className="lg:w-[55%] lg:border-r dark:border-neutral-800 relative">
      <form action={formAction}>
        <div className=" lg:hidden">
          <Header_Control />
        </div>

        <div className="mx-4 md:mx-8 lg:mx-4 border-b dark:border-neutral-800 pb-3">
          <input
            className={`font-bold text-[20px] md:text-2xl text-black dark:text-white my-3 bg-transparent ${
              state?.errors.title
                ? "placeholder:text-red-500"
                : "placeholder:text-black"
            }  dark:placeholder:text-white outline-none`}
            placeholder={
              state?.errors.title
                ? `${state.errors.title}`
                : "Enter a title... "
            }
            type="text"
            name="title"
          />
          <div className="flex md:gap-7">
            <div className="w-[30%] md:w-auto">
              <div className="flex text-[12px] md:text-[14px] text-neutral-700 dark:text-neutral-300 mb-1 items-center">
                <Image
                  src={`/assets/images/icon-tag${darkMode ? "-white" : ""}.svg`}
                  width={16}
                  height={16}
                  alt="tag"
                  className="mr-[6px]"
                />
                <label htmlFor="tag">Tags</label>
              </div>
              <div className="flex md:text-[14px] text-[12px] text-neutral-700 dark:text-neutral-300 items-center">
                <Image
                  src={`/assets/images/icon-clock${
                    darkMode ? "-white" : ""
                  }.svg`}
                  width={16}
                  height={16}
                  alt="clock"
                  className="mr-[6px]"
                />
                <span>Last Edited</span>
              </div>
            </div>
            <div className="md:text-[14px] text-[12px] text-neutral-700 dark:text-neutral-100">
              <input
                type="text"
                className={`mb-1 bg-transparent outline-1 whitespace-pre-line ${
                  state?.errors.tags
                    ? "outline-red-500 placeholder:text-red-500"
                    : "outline-neutral-400"
                }  dark:outline-neutral-600 pl-1 w-full`}
                name="tags"
                placeholder={
                  state?.errors.tags
                    ? `${state.errors.tags}`
                    : "Add tags separated by commas (e.g. Work, Planning)"
                }
              />
              <input
                readOnly
                defaultValue="Not yet saved"
                name="lastSaved"
                className="outline-none bg-transparent text-neutral-400 pl-1"
              />
            </div>
          </div>
        </div>

        <textarea
          className={`text-neutral-800 mt-3 text-[14px] px-4 md:px-8 lg:px-4 w-full outline-none ${
            state?.errors.content
              ? "placeholder:text-red-500"
              : "placeholder:text-neutral-800"
          } bg-transparent h-[460px] dark:text-neutral-100  dark:placeholder:text-neutral-100`}
          placeholder={
            state?.errors.content
              ? `${state.errors.content}`
              : "Start typing your note here..."
          }
          name="content"
        />

        <footer className="absolute bottom-0 px-4 mb-[20px] lg:w-full hidden lg:block border-t pt-4 ">
          <button className="bg-primary-blue px-4 py-2 text-white font-medium text-[14px] rounded-lg mr-4">
            Save Note
          </button>
          <button className="bg-neutral-200 px-4 py-2 text-neutral-700 font-medium text-[14px] rounded-lg">
            Cancel
          </button>
        </footer>
      </form>
    </section>
  );
}
