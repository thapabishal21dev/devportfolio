"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { ApiDataContext } from "@/app/context/context";
import MobileNav from "@/app/mblnav";
import { GrHome } from "react-icons/gr";
interface INavbarElement {
  classList: {
    toggle: (className: string, force?: boolean) => void;
  };
}

const Navbar = () => {
  const { setUpdateTheme } = useContext(ApiDataContext);

  // themeIconToggle
  const [isClickedThemeIcon, setIsClickedThemeIcon] = useState(true);

  const toggleThemeIcon = () => {
    setIsClickedThemeIcon(!isClickedThemeIcon);
    setUpdateTheme((prevTheme: any) => ({
      colorScheme: prevTheme.colorScheme === "dark" ? "light" : "dark",
    }));
  };

  useEffect(() => {
    if (isClickedThemeIcon === true) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [isClickedThemeIcon]);

  const [ismblNavIcon, setIsmblNavIcon] = useState<boolean>(false);

  const handleClickNav = () => {
    setIsmblNavIcon(!ismblNavIcon);
  };

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div id="navbar" className="z-50 dark:text-white w-full lg:hidden ">
        <div
          className={` ${
            ismblNavIcon
              ? "mt-0 mx-0 flex flex-col px-3 py-2 border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-950 backdrop-blur-[6px] dark:backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50 dark:bg-opacity-70 "
              : "mt-4 mx-2 flex flex-col rounded-xl px-3 py-2 border-2 border-slate-200 dark:border-slate-700 dark:bg-slate-950 backdrop-blur-[6px] dark:backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50 dark:bg-opacity-70 "
          }`}
        >
          <div>
            <div className=" flex justify-between items-center ">
              <Link href="/">
                <div className=" flex flex-row gap-1 items-center dark:hover:bg-slate-900 px-3 py-2 hover:rounded-lg hover:cursor-pointer hover:bg-slate-200 transition rounded-lg delay-25 ease-in-out">
                  {/* <Image
                    className="w-6 mx-1 hover:text-blue-500 hover:scale-75 transition ease-in-out"
                    src="/astronaut.png"
                    width={400}
                    height={400}
                    alt="avatar"
                    property="priority"
                  /> */}
                  <GrHome />
                </div>
              </Link>
              <div className=" flex gap-4">
                <div className="">
                  <button
                    className=" bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-indigo-400 "
                    onClick={toggleThemeIcon}
                  >
                    {isClickedThemeIcon ? (
                      <div className="text-white gap-2 items-center flex flex-row">
                        <span className=" text-xl">
                          <FaSun />
                        </span>
                        <span className=" sm:hidden text-sm text-white gap-4 items-center flex flex-row ">
                          Light Mode
                        </span>
                      </div>
                    ) : (
                      <div className="  text-black  gap-2 items-center flex flex-row  ">
                        <span className=" text-xl">
                          <FaMoon />
                        </span>
                        <span className="sm:hidden text-sm">Dark Mode</span>
                      </div>
                    )}
                  </button>
                </div>{" "}
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
                      <HiOutlineBars3 />
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
      </div>
      <div className=" sm:hidden md:hidden ">
        <div id="navbar" className="flex justify-center">
          <nav className="  bg-[#e3edfe] border-2 border-slate-200 dark:border-slate-700 top-4 mt-4 z-50  w-[780px] md:w-fit rounded-xl  dark:bg-slate-950 backdrop-blur-[6px] transition-all duration-500 ease-out delay-0 bg-opacity-50">
            <ul className=" p-2 text-[16px]   md:bg-cyan-500  md: sm:bg-red-500 flex-row gap-8 dark:text-slate-300 flex font-medium items-center">
              {/* <li className=" text-xl rounded-xl p-2">
                <Link href="/">
                  <Image
                    className="w-8 mx-1 hover:text-blue-500 hover:scale-75 transition ease-in-out"
                    src="/astronaut.png"
                    width={400}
                    height={400}
                    alt="avatar"
                    property="priority"
                    bg-[#e3edfe]
                  />
                  <FaHome />
                </Link>
              </li> */}
              <li className=" dark:hover:text-green-600 hover:text-green-500 hover:underline hover:underline-offset-2  p-2">
                <Link href="/">
                  <span className="absolute duration-200 left-2 transition-all flex-none rounded-full bg-red-500-hover:size-1.5 size-1.5"></span>
                  Home
                </Link>
              </li>
              <li className=" dark:hover:text-cyan-600 hover:text-cyan-500 hover:underline hover:underline-offset-2  p-2">
                <Link href="/about">About</Link>
              </li>
              <li className=" hover:text-blue-600 hover:underline hover:underline-offset-2 dark:hover:blue-slate-600 p-2">
                <Link href="/projects">Projects</Link>
              </li>
              <li className=" hover:text-pink-600 hover:underline hover:underline-offset-2 dark:hover:text-pink-600  p-2">
                <Link href="/technology">Technology</Link>
              </li>
              <li className=" hover:text-violet-600 hover:underline hover:underline-offset-2 dark:hover:text-voilet-600 p-2">
                <Link href="/blog">Blog</Link>
              </li>
              <button
                className=" bg-slate-800 ml-20 md:ml-0 md:mx-4 w-30 bg-opacity-20 rounded-lg px-[10px] py-[6px] hover:bg-gray-200 dark:bg-slate-600 dark:hover:bg-gray-700 transition-all duration-500 ease-out delay-0 focus:outline-none  focus:ring focus:ring-indigo-400 "
                onClick={toggleThemeIcon}
              >
                {isClickedThemeIcon ? (
                  <div className="text-white gap-2 items-center flex flex-row text-[18px]">
                    <FaSun />
                    <span className=" text-[14px] text-white gap-4 items-center flex flex-row ">
                      Light Mode
                    </span>
                  </div>
                ) : (
                  <div className="text-black text-[14px] gap-2 items-center flex flex-row  ">
                    <FaMoon />
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
