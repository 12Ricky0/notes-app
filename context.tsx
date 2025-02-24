"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

type NotesContextType = {
  id: string;
  setID: Dispatch<SetStateAction<string>>;
  settings: string;
  setSettings: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
  toast: string;
  setToast: Dispatch<SetStateAction<string>>;
  displayToast: boolean;
  setDisplayToast: Dispatch<SetStateAction<boolean>>;
  displayArchive: boolean;
  setDisplayArchive: Dispatch<SetStateAction<boolean>>;
  displayDelete: boolean;
  setDisplayDelete: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

export const NotesContext = createContext<NotesContextType>(
  {} as NotesContextType
);

export default function NotesProvider({ children }: { children: ReactNode }) {
  const [id, setID] = useState<string>("");
  const [tag, setTag] = useState<string>("Dev");
  const [settings, setSettings] = useState<string>("Color Theme");
  const [menu, setMenu] = useState<string>("Home");
  const [toast, setToast] = useState<string>("");
  const [displayToast, setDisplayToast] = useState<boolean>(false);
  const [displayArchive, setDisplayArchive] = useState<boolean>(false);
  const [displayDelete, setDisplayDelete] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setID(data[0]?._id);
        return data;
      });

    const savedFont = localStorage.getItem("fontTheme");
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
    if (savedFont) {
      document.body.classList.add("font-" + savedFont);
    } else {
      document.body.classList.add("font-serif");
    }
  }, []);

  useEffect(() => {
    if (
      darkMode ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <NotesContext.Provider
      value={{
        id,
        setID,
        tag,
        setTag,
        menu,
        setMenu,
        displayArchive,
        setDisplayArchive,
        displayDelete,
        setDisplayDelete,
        settings,
        setSettings,
        darkMode,
        setDarkMode,
        toast,
        setToast,
        displayToast,
        setDisplayToast,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
