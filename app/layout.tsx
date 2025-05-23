import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NotesProvider from "@/context";

const serif = localFont({
  src: "../public/assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--serif",
});

const sanSerif = localFont({
  src: "../public/assets/fonts/noto-serif/NotoSerif-VariableFont_wdth,wght.ttf",
  variable: "--sans-serif",
});
const monospace = localFont({
  src: "../public/assets/fonts/source-code-pro/SourceCodePro-VariableFont_wght.ttf",
  variable: "--monospace",
});

export const metadata: Metadata = {
  title: "Notes App",
  description: "Create a note on the go!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.variable} ${sanSerif.variable} ${monospace.variable} bg-white dark:bg-neutral-950 overflow-scroll antialiased`}
      >
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
