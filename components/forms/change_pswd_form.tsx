"use client";

import Image from "next/image";
import {
  useState,
  useContext,
  useActionState,
  useEffect,
  ChangeEvent,
} from "react";
import { NotesContext } from "../../context";
import { changePassword } from "@/libs/actions";

export default function ChangePassword_form() {
  const [showPassword, setShowPassword] = useState(false);
  const { setSettings, darkMode, setToast, setDisplayToast } =
    useContext(NotesContext);

  const [state, formAction] = useActionState(changePassword, null);

  const [formData, setFormData] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (state?.success) {
      setToast(state.success);
      setDisplayToast(true);
      setFormData({
        old_password: "",
        new_password: "",
        confirm_password: "",
      });
    }
  }, [state, setDisplayToast, setToast]);

  return (
    <form
      action={formAction}
      className={`mx-4 md:mx-8 lg:mx-4 mt-[16px] lg:w-[528px] `}
    >
      <div
        onClick={() => setSettings("")}
        className="font-medium text-sm text-neutral-600 dark:text-neutral-300 flex lg:hidden"
      >
        <Image
          src={`/assets/images/icon-arrow-left${darkMode ? "-white" : ""}.svg`}
          width={20}
          height={20}
          alt="left"
          className="mr-2"
        />

        <span>Settings</span>
      </div>
      <div className="mt-3 mb-[20px] lg:mt-0">
        <h1 className="font-semibold text-[16px] text-neutral-950 dark:text-white">
          Change Password
        </h1>
      </div>
      <div>
        <fieldset className="flex justify-between">
          <label
            className=" mb-[6px] font-medium dark:text-white text-[14px]"
            htmlFor="old_password"
          >
            Old Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer dark:text-white rounded-lg py-3 w-full px-3 dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.current_password
                ? "outline-red-500 border-red-500 focus:outline-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="old_password"
            value={formData.old_password}
            onChange={handleChange}
          />
          {state?.errors?.current_password && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.errors.current_password
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode && !state
                    ? "-white"
                    : state.errors.current_password
                    ? "-red"
                    : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.errors.current_password}</p>
            </div>
          )}

          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <fieldset className="flex justify-between mt-4">
          <label
            className=" mb-[6px] font-medium dark:text-white text-[14px]"
            htmlFor="new_password"
          >
            New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer dark:text-white rounded-lg py-3 w-full px-3 dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.new_password
                ? "outline-red-500 border-red-500 focus:outline-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="new_password"
            value={formData.new_password}
            onChange={handleChange}
          />
          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
          <div
            className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
              state?.errors?.new_password
                ? "text-red-500"
                : "text-tetiary-semi-dark dark:text-secondary-light-gray"
            } `}
          >
            <Image
              src={`/assets/images/icon-info${
                darkMode ? "-white" : state?.errors?.new_password ? "-red" : ""
              }.svg`}
              width={14}
              height={14}
              alt="info"
              className="w-aut h-aut "
            />
            <p>At least 8 characters</p>
          </div>{" "}
        </div>

        <fieldset className="flex justify-between">
          <label
            className=" mb-[6px] font-medium text-[14px] dark:text-white"
            htmlFor="confirm_password"
          >
            Confirm New Password
          </label>
        </fieldset>
        <div className="relative">
          <input
            className={`border cursor-pointer dark:text-white rounded-lg py-3 w-full px-3 dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 ${
              state?.errors?.confirm_password
                ? "outline-red-500 border-red-500 focus:outline-red-500"
                : "outline-neutral-300 focus:outline-neutral-500 focus:border-primary-dark"
            }   focus:outline-2  transition outline-offset-4`}
            type={showPassword ? "text" : "password"}
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {state?.errors?.confirm_password && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.errors.confirm_password
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode && !state
                    ? "-white"
                    : state.errors.confirm_password
                    ? "-red"
                    : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.errors.confirm_password}</p>
            </div>
          )}
          {state?.message && (
            <div
              className={`flex mb-4 mt-[6px] items-center gap-2 text-[12px] ${
                state?.message
                  ? "text-red-500"
                  : "text-tetiary-semi-dark dark:text-secondary-light-gray"
              } `}
            >
              <Image
                src={`/assets/images/icon-info${
                  darkMode && !state ? "-white" : state.message ? "-red" : ""
                }.svg`}
                width={14}
                height={14}
                alt="info"
                className="w-aut h-aut "
              />
              <p>{state.message}</p>
            </div>
          )}
          {/* {state?.success && <p>{state.success}</p>} */}

          <Image
            src={`/assets/images/icon-${
              showPassword ? "hide" : "show"
            }-password${darkMode ? "-white" : ""}.svg`}
            width={24}
            height={24}
            alt="pss"
            className="w-auto h-auto absolute cursor-pointer top-[12px] right-[12px]"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          // onClick={() => {
          //   setTimeout(() => {
          //     if (state?.success) {
          //       setToast("Password Changed Successfully!");
          //       setDisplayToast(true);
          //     }
          //   }, 3000); // Waits 5 seconds before executing
          // }}
          type="submit"
          className="px-4  py-3 bg-primary-blue text-white rounded-lg font-medium text-smtransition"
        >
          Save Password
        </button>
      </div>
    </form>
  );
}
