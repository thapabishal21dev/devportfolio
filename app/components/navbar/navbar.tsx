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
      <div id="navbar" className="z-50 dark:text-white w-full lg:hidden  ">
        <div
          className={` ${
            ismblNavIcon
              ? "mobile-nav mt-0 mx-0 flex flex-col px-3 py-2 border-2 border-slate-200 dark:border-gray-700 hover:border-slate-300 backdrop-blur-[6px] dark:backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 dark:bg-opacity-70 "
              : "mt-4 mx-2 flex flex-col px-3 py-2  dark:bg-[#0c121e]  transition-all duration-500 ease-out delay-0 bg-opacity-50 dark:bg-opacity-70 border-2 border-slate-200 dark:border-gray-700 rounded-xl "
          }`}
        >
          <div className=" flex justify-between items-center  ">
            <Link href="/">
              <div className=" flex p-2 flex-row gap-1 items-center  px-3 py-2 hover:rounded-lg hover:cursor-pointer hover:bg-slate-400 transition rounded-lg delay-25 ease-in-out">
                <MdOutlineRocketLaunch className="" size={28} />
              </div>
            </Link>
            <div className=" flex gap-4 items-center">
              <div className="">
                <button
                  className=" bg-slate-200 md:ml-0 md:mx-4 w-30  rounded-lg px-3 py-2 hover:bg-gray-00 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-gray-800 transition duration-200 ease-in-out dark:focus:ring-slate-700 focus:ring-slate-300 focus:ring-[2px] focus:outline-none  "
                  onClick={toggleThemeIcon}
                >
                  {isClickedThemeIcon ? (
                    <div className="text-white gap-2 items-center flex flex-row text-[18px]">
                      <FiSun />
                    </div>
                  ) : (
                    <div className="text-black text-[14px] gap-2 items-center flex flex-row  ">
                      <FiMoon />
                    </div>
                  )}
                </button>
              </div>
              <div className="cursor-pointer ">
                {ismblNavIcon ? (
                  <div
                    className="text-3xl transition duration-900 ease-in-out cursor-pointer"
                    onClick={handleClickNav}
                  >
                    <RxCross2 />
                  </div>
                ) : (
                  <div
                    className="text-3xl transition duration-900 ease-in-out cursor-pointer"
                    onClick={handleClickNav}
                  >
                    <HiOutlineBars3 size={34} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=" flex justify-center">
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
      <div className=" sm:hidden md:hidden">
        <div id="navbar" className="flex justify-center  ">
          <nav className=" dark:hover:drop-shadow-[0_0_6px_#4a5871] hover:drop-shadow-[0_0_8px_#c7dbfc] cursor-pointer bg-[#e3edfe] border-2 border-slate-200 dark:border-gray-700 hover:border-slate-300  mt-4 z-50 w-[780px] md:w-fit rounded-xl  dark:bg-[#0c121e] backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50 my-2 ">
            <ul className=" p-1 text-base  md:bg-cyan-500 flex-row gap-8  flex font-medium items-center px-12 py-[6px]">
              <Link href="/">
                <li className=" dark:hover:text-gray-200  px-2 py-1.5  dark:hover:bg-gray-800 rounded-md transition hover:bg-[#cfd9eb] ease-in-out duration-200 dark:text-slate-400 text-slate-800 ">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={`dark:hover:text-gray-200 px-2 py-1.5 dark:hover:bg-gray-800 rounded-md transition  ease-in-out duration-200 dark:text-slate-400 hover:bg-[#cfd9eb] text-slate-800 ${getLinkStyle(
                    "/about"
                  )}`}
                >
                  About
                </li>
              </Link>
              <Link href="/projects">
                <li
                  className={`dark:hover:text-gray-200 px-2 py-1.5 dark:hover:bg-gray-800 rounded-md transition  ease-in-out duration-200 dark:text-slate-400 hover:bg-[#cfd9eb] text-slate-800 ${getLinkStyle(
                    "/projects"
                  )}`}
                >
                  Projects
                </li>
              </Link>
              <Link href="/technology">
                <li
                  className={`dark:hover:text-gray-200 px-2 py-1.5 dark:hover:bg-gray-800 rounded-md transition  ease-in-out duration-200 dark:text-slate-400 hover:bg-[#cfd9eb] text-slate-800 ${getLinkStyle(
                    "/technology"
                  )}`}
                >
                  Technology
                </li>
              </Link>
              <Link href="/blog">
                <li
                  className={`dark:hover:text-gray-200 px-2 py-1.5 dark:hover:bg-gray-800 rounded-md transition  ease-in-out duration-200 dark:text-slate-400 hover:bg-[#cfd9eb] text-slate-800 ${getLinkStyle(
                    "/blog"
                  )}`}
                >
                  Blog
                </li>
              </Link>
              <button
                className=" bg-slate-200 md:ml-0 md:mx-4 w-30  rounded-lg px-[10px] py-[4px] hover:bg-gray-00 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-gray-900 transition duration-200 ease-in-out dark:focus:ring-slate-700 focus:ring-slate-300 focus:ring-[2px] focus:outline-none "
                onClick={toggleThemeIcon}
              >
                {isClickedThemeIcon ? (
                  <div className="text-white gap-2 items-center flex flex-row text-[18px]">
                    <FiSun />
                    <span className=" text-[14px] text-white gap-4 items-center flex flex-row ">
                      Light Mode
                    </span>
                  </div>
                ) : (
                  <div className="text-black text-[14px] gap-2 items-center flex flex-row  ">
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
