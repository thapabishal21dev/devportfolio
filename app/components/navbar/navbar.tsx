"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { ApiDataContext } from "@/app/context/context";
import MobileNav from "@/app/mblnav";
import { FiMoon, FiSun } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { MdOutlineRocketLaunch } from "react-icons/md";

interface INavbarElement {
  classList: {
    toggle: (className: string, force?: boolean) => void;
  };
}

const Navbar = () => {
  const pathname = usePathname();
  const { setUpdateTheme } = useContext(ApiDataContext);
  const [isClickedThemeIcon, setIsClickedThemeIcon] = useState(true);

  const toggleThemeIcon = () => {
    setIsClickedThemeIcon(!isClickedThemeIcon);
    setUpdateTheme((prevTheme: any) => ({
      colorScheme: prevTheme.colorScheme === "dark" ? "light" : "dark",
    }));
  };

  const [ismblNavIcon, setIsmblNavIcon] = useState<boolean>(false);
  const handleClickNav = () => {
    setIsmblNavIcon(!ismblNavIcon);
  };

  const getLinkStyle = (path: string): string => {
    return pathname === path
      ? "dark:text-gray-200 px-2 py-1.5 dark:bg-gray-800 bg-[#cfd9eb] text-slate-800  "
      : "";
  };
  useEffect(() => {
    if (isClickedThemeIcon === true) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = (): void => {
      const navbar: INavbarElement | null = document.getElementById("navbar");

      if (navbar) {
        const isScrolled: boolean = window.scrollY > 500;
        navbar.classList.toggle("translate-y-[-100%]", isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isClickedThemeIcon]);

  useEffect(() => {
    if (ismblNavIcon) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [ismblNavIcon]);
  return (
    <>
      <div id="navbar" className="z-50 w-full dark:text-white lg:hidden">
        <div
          className={` ${
            ismblNavIcon
              ? "mobile-nav mx-0 mt-0 flex flex-col border-2 border-slate-200 px-3 py-2 backdrop-blur-[6px] transition-all delay-0 duration-500 ease-out hover:border-slate-300 dark:border-gray-700 dark:bg-opacity-70 dark:backdrop-blur-[6px]"
              : "mx-2 mt-4 flex flex-col rounded-xl border-2 border-slate-200 bg-opacity-50 px-3 py-2 transition-all delay-0 duration-500 ease-out dark:border-gray-700 dark:bg-[#0b0d11] dark:bg-opacity-70"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link href="/">
              <div className="delay-25 flex flex-row items-center gap-1 rounded-lg p-2 px-3 py-2 transition ease-in-out hover:cursor-pointer hover:rounded-lg hover:bg-slate-400">
                <MdOutlineRocketLaunch className="" size={28} />
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="">
                <button
                  className="w-30 hover:bg-gray-00 rounded-lg bg-slate-200 px-3 py-2 transition duration-200 ease-in-out hover:bg-slate-300 focus:outline-none focus:ring-[2px] focus:ring-slate-300 dark:bg-slate-800 dark:hover:bg-gray-800 dark:focus:ring-slate-700 md:mx-4 md:ml-0"
                  onClick={toggleThemeIcon}
                >
                  {isClickedThemeIcon ? (
                    <div className="flex flex-row items-center gap-2 text-[18px] text-white">
                      <FiSun />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center gap-2 text-[14px] text-black">
                      <FiMoon />
                    </div>
                  )}
                </button>
              </div>
              <div className="cursor-pointer">
                {ismblNavIcon ? (
                  <div
                    className="duration-900 cursor-pointer text-3xl transition ease-in-out"
                    onClick={handleClickNav}
                  >
                    <RxCross2 />
                  </div>
                ) : (
                  <div
                    className="duration-900 cursor-pointer text-3xl transition ease-in-out"
                    onClick={handleClickNav}
                  >
                    <HiOutlineBars3 size={34} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            {ismblNavIcon ? (
              <div className="overflow-y-hidden">
                <MobileNav setIsmblNavIcon={setIsmblNavIcon} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="sm:hidden md:hidden">
        <div id="navbar" className="flex justify-center">
          <nav className="z-50 my-2 mt-4 w-[780px] cursor-pointer rounded-xl border-2 border-slate-200 bg-[#e3edfe] bg-opacity-50 backdrop-blur-[6px] transition-all delay-0 duration-500 ease-out hover:border-slate-300 hover:drop-shadow-[0_0_8px_#c7dbfc] dark:border-gray-700 dark:bg-[#0b0d11] dark:hover:drop-shadow-[0_0_6px_#4a5871] md:w-fit">
            <ul className="flex flex-row items-center gap-8 p-1 px-12 py-[6px] text-base font-medium md:bg-cyan-500">
              <Link href="/">
                <li className="rounded-md px-2 py-1.5 text-slate-800 transition duration-200 ease-in-out hover:bg-[#cfd9eb] dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={`rounded-md px-2 py-1.5 text-slate-800 transition duration-200 ease-in-out hover:bg-[#cfd9eb] dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${getLinkStyle(
                    "/about",
                  )}`}
                >
                  About
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className={`rounded-md px-2 py-1.5 text-slate-800 transition duration-200 ease-in-out hover:bg-[#cfd9eb] dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${getLinkStyle(
                    "/projects",
                  )}`}
                >
                  Projects
                </li>
              </Link>
              <Link href="/technology">
                <li
                  className={`rounded-md px-2 py-1.5 text-slate-800 transition duration-200 ease-in-out hover:bg-[#cfd9eb] dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${getLinkStyle(
                    "/technology",
                  )}`}
                >
                  Technology
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={`rounded-md px-2 py-1.5 text-slate-800 transition duration-200 ease-in-out hover:bg-[#cfd9eb] dark:text-slate-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${getLinkStyle(
                    "/blog",
                  )}`}
                >
                  Blog
                </li>
              </Link>
              <button
                className="w-30 hover:bg-gray-00 rounded-lg bg-slate-200 px-[10px] py-[4px] transition duration-200 ease-in-out hover:bg-slate-300 focus:outline-none focus:ring-[2px] focus:ring-slate-300 dark:bg-slate-800 dark:hover:bg-gray-900 dark:focus:ring-slate-700 md:mx-4 md:ml-0"
                onClick={toggleThemeIcon}
              >
                {isClickedThemeIcon ? (
                  <div className="flex flex-row items-center gap-2 text-[18px] text-white">
                    <FiSun />
                    <span className="flex flex-row items-center gap-4 text-[14px] text-white">
                      Light Mode
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center gap-2 text-[14px] text-black">
                    <FiMoon />
                    <span>Dark Mode</span>
                  </div>
                )}
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
