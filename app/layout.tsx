"use client";
import type { Metadata } from "next";
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
    "nepaldeveloper",
    "kathmandu developer",
    "react portfolio",
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
      <body className=" dark:bg-[#0c121e] ">
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
