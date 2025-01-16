"use client";

import { createContext, useState, useEffect } from "react";
export const NotesContext = createContext({});

export default function NotesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  //   useEffect(() => {

  //     if (localStorage.getItem("theme") === "dark") {
  //       setDarkMode(true);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (
  //       darkMode ||
  //       (!("theme" in localStorage) &&
  //         window.matchMedia("(prefers-color-scheme: dark)").matches)
  //     ) {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("theme", "light");
  //     }
  //   }, [darkMode]);
  return (
    <NotesContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
