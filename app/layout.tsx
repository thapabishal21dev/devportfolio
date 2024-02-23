"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import { ApiDataContext } from "./context/context";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Provider } from "react-redux";
import store from "./store/store";
interface IThemeType {
  colorScheme: "light" | "dark";
}

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "bishalthapa",
  description: "developed by thapabishal",
  keywords: [
    "developer",
    "portfolio",
    "developer Portfolio",
    "bishal thapa",
    "bishal",
    "thapa bishal",
    "devportfolio",
    " bishal thapa portfolio",
    "bishalthapa",
    "thapabishal",
    "devportfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [updateTheme, setUpdateTheme] = useState<IThemeType>({
    colorScheme: "dark",
  });
  const [userApiData, setUserApiData] = useState<string | undefined>();

  const [blogId, setBlogId] = useState<string | undefined>();
  return (
    <html lang="en" className="dark scroll-smooth ">
      <body className={`${inter.className} dark:bg-slate-950 `}>
        <div className="">
          <Provider store={store}>
            <ApiDataContext.Provider
              value={{
                userApiData,
                updateTheme,
                setUserApiData,
                setUpdateTheme,
                setBlogId,
                blogId,
              }}
            >
              <Navbar />
              {children}
              <Footer />
            </ApiDataContext.Provider>
          </Provider>
        </div>
      </body>
    </html>
  );
}
