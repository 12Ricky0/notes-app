/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NotesProvider from "@/context";

const serif = localFont({
  src: "../public/assets/fonts/inter/Inter-Italic-VariableFont_opsz,wght.ttf",
});

const sanSerif = localFont({
  src: "../public/assets/fonts/noto-serif/NotoSerif-VariableFont_wdth,wght.ttf",
});
const monospace = localFont({
  src: "../public/assets/fonts/source-code-pro/SourceCodePro-VariableFont_wght.ttf",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${serif.className} bg-white antialiased`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
