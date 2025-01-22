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
  tag: string;
  setTag: Dispatch<SetStateAction<string>>;
  menu: string;
  setMenu: Dispatch<SetStateAction<string>>;
};

// Create the context with an initial value of `undefined`
export const NotesContext = createContext<NotesContextType>(
  {} as NotesContextType
);

// Create the provider component
export default function NotesProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("React Performance Optimization");
  const [tag, setTag] = useState<string>("Dev");
  const [menu, setMenu] = useState<string>("Home");

  return (
    <NotesContext.Provider
      value={{ title, setTitle, tag, setTag, menu, setMenu }}
    >
      {children}
    </NotesContext.Provider>
  );
}
