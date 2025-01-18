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
};

// Create the context with an initial value of `undefined`
export const NotesContext = createContext<NotesContextType>(
  {} as NotesContextType
);

// Create the provider component
export default function NotesProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState<string>("React Performance Optimization");

  return (
    <NotesContext.Provider value={{ title, setTitle }}>
      {children}
    </NotesContext.Provider>
  );
}
