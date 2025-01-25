"use client";

import React, {
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
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
};

// Create the context with an initial value of `undefined`
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
      }}
    >
      {children}
    </NotesContext.Provider>
  );
}
