"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaExternalLinkSquareAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HomepageData } from "@/app/lib/data/data";

const Introduction = () => {
  return (
    <>
      <div className=" relative  text-neutral-700 dark:text-neutral-300 z-10 flex justify-center ">
        <div className=" mt-12 w-[780px] md:w-[650px] sm:w-full px-4">
          <div className="flex flex-col justify-between  ">
            <div className=" flex  flex-row sm:flex-col-reverse gap-4 mt-4 justify-between">
              <div className=" flex flex-col">
                <div>
                  <h1 className=" animate-slidein [--slidein-delay:300ms] opacity-0 text-5xl bg-gradient-to-r dark:from-slate-300 dark:to-slate-600  inline-block text-transparent bg-clip-text font-bold  from-gray-700 to-slate-400 sm:text-4xl ">
                    {HomepageData.fullName}
                  </h1>
                </div>
                <div className="">
                  <h1 className=" animate-slidein [--slidein-delay:500ms] opacity-0 text-2xl bg-gradient-to-r dark:from-slate-300 dark:to-indigo-300 from-slate-500 to-slate-600  inline-block text-transparent bg-clip-text font-bold text-slate-700 ">
                    {HomepageData.position}
                  </h1>
                  <div className="animate-slidein [--slidein-delay:500ms] opacity-0 flex flex-row items-center bg-gradient-to-r text-2xl text-transparent bg-clip-text font-bold dark:from-slate-300 dark:to-indigo-500 from-slate-500 to-slate-600">
                    <span> {HomepageData.location}</span>
                    <Image
                      className="rounded-full w-7"
                      src="/nepalflag.svg"
                      width={200}
                      height={200}
                      alt="avatar"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className=" animate-slidein [--slidein-delay:300ms] opacity-0 flex flex-col items-center gap-4">
                <div>
                  <Image
                    loading="lazy"
                    className=" grayscale hover:grayscale-0 rounded-[50%] h-[140px] w-[140px] shadow-[rgba(0,_0,_0,_0.5)_0px_10px_10px]"
                    src="/portfolio.jpg"
                    property="25"
                    width={200}
                    height={200}
                    alt="avatar"
                  />
                </div>
                <div>
                  <Link
                    href="Bishal_Thapa_Resume_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className=" cursor-pointer flex flex-row items-center gap-2 w-fit bg-blue-900 hover:bg-blue-800 text-slate-300 px-2 py-1 text-[12px] rounded-md dark:bg-blue-900  dark:text-slate-300 dark:hover:bg-blue-800">
                      Resume
                      <span className=" text-[12px]">
                        <FaExternalLinkSquareAlt />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className=" animate-slidein [--slidein-delay:700ms] opacity-0 flex  flex-col sm:justify-center dark:text-slate-300 font-medium text-base mt-6">
              <p className=" md:w-[520px] sm:w-full ">
                {HomepageData.personalSummary}
              </p>
            </div>
            <div className=" animate-slidein [--slidein-delay:900ms] opacity-0 flex flex-row flex-wrap gap-4 my-4 items-center">
              <Link href="/about">
                <button className=" flex flex-row gap-2 items-center  rounded-lg text-white px-2 py-2   text-md from-blue-500  to-teal-500 bg-gradient-to-r dark:from-violet-500 dark:to-cyan-700 dark:hover:bg-gradient-to-r dark:hover:from-violet-700 dark:hover:to-red-700 hover:bg-gradient-to-r hover:from-violet-700 hover:to-red-700 ">
                  <span className=" text-xl ">
                    <IoPersonSharp />
                  </span>
                  More about me
                </button>
              </Link>
              <div>
                <div className=" flex justify-center gap-6 flex-row items-center">
                  <a
                    href="https://github.com/thapabishal21dev"
                    target="_blank"
                    className="hover:bg-slate-300 px-2 py-1 rounded-md dark:hover:bg-slate-800 transition duration-200"
                  >
                    <p className=" text-[24px] dark:text-white">
                      <FaGithub />
                    </p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                    className="hover:bg-slate-300 px-2 py-1 rounded-md dark:hover:bg-slate-800 transition duration-200"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaLinkedin />
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="hover:bg-slate-300 px-2 py-1 rounded-md dark:hover:bg-slate-800 transition duration-200"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaXTwitter />
                    </p>
                  </a>
                  <a
                    href="mailto:thapabishal21dev@gmail.com"
                    target="_blank"
                    className="hover:bg-slate-300 px-2 py-1 rounded-md dark:hover:bg-slate-800 transition duration-200"
                  >
                    {" "}
                    <p className=" text-[24px] dark:text-white">
                      <MdEmail />
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
