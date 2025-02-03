"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

// Define the type of your context
type NotesContextType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  settings: string;
  setSettings: Dispatch<SetStateAction<string>>;
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
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

// Create the provider component
export default function NotesProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("React Performance Optimization");
  const [tag, setTag] = useState<string>("Dev");
  const [settings, setSettings] = useState<string>("Color Theme");
  const [menu, setMenu] = useState<string>("Home");
  const [displayArchive, setDisplayArchive] = useState<boolean>(false);
  const [displayDelete, setDisplayDelete] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedFont = localStorage.getItem("fontTheme");
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
    if (savedFont) {
      // applyFontClass(savedFont);
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
        title,
        setTitle,
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
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
