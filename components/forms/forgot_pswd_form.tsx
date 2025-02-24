"use client";
import Image from "next/image";
import { useContext, useState, ChangeEvent } from "react";
import { NotesContext } from "../../context";
import { encrypt } from "@/encryption";

export default function Forgot_form() {
  const { darkMode } = useContext(NotesContext);
  const [formData, setFormData] = useState("");
  const [error, setError] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(e.target.value);
  };

  function sendMail(email: string) {
    const encrypted = encrypt(email);
    fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: email,
        subject: "Reset Password Link",
        text: `Hi there, Please click on the link below to reset your password\n https://notes-app-smoky-iota.vercel.app/reset/${encrypted.encryptedData}/${encrypted.iv}/${encrypted.key}`,
      }),
    })
      .then((response) => response.json())
      .then((d) => {
        setError(d.success);
      });
  }

  return (
    <section className="mx-4 border rounded-lg text-center bg-white dark:border-neutral-800 dark:bg-primary-dark  md:w-[540px]">
      <article className="my-[40px] ">
        <Image
          src={`/assets/images/logo${darkMode ? "-dark" : ""}.svg`}
          width={24}
          height={24}
          alt="logo"
          className="w-auto h-auto mx-auto"
        />
        <h1 className="mt-4 mb-2 text-[24px] text-primary-dark dark:text-white font-bold">
          Forgotten your password?
        </h1>
        <p className="text-[14px] font-normal text-tetiary-semi-dark dark:text-secondary-light-gray">
          Enter your email below, and we’ll send you a link to reset it.
        </p>
      </article>

      <form
        action=""
        className="text-primary-dark dark:text-white mx-4 md:mx-12 text-[14px] pb-[40px]"
      >
        {error ? (
          <h1 className="mt-4 mb-2 text-[24px] text-primary-dark dark:text-white font-bold">
            Check your inbox or spam and follow the instructions.
          </h1>
        ) : (
          <fieldset>
            <label
              className="block text-left mb-[6px] font-medium"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="border cursor-pointer rounded-lg dark:bg-transparent dark:hover:bg-neutral-800 hover:bg-neutral-300 py-3 w-full px-3 mb-4 outline-neutral-300 focus:outline-neutral-500 focus:outline-2 focus:border-primary-dark transition outline-offset-4 "
              type="email"
              placeholder="email@example.com"
              name="email"
              value={formData}
              onChange={handleChange}
            />
          </fieldset>
        )}
        <button
          type="submit"
          disabled={!!error || formData.length === 0}
          onClick={(e) => {
            e.preventDefault();
            sendMail(formData);
            setFormData("");
          }}
          className={`disabled:bg-blue-400 w-full py-3 text-white font-bold rounded-lg bg-primary-blue hover:bg-blue-500`}
        >
          {error ? "Reset Link Sent" : "Send Reset Link"}
        </button>
      </form>
    </section>
  );
}
