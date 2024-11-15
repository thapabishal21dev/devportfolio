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
      <div className="relative z-10 flex justify-center text-neutral-700 dark:text-neutral-300">
        <div className="mt-12 w-[780px] px-4 sm:w-full md:w-[650px]">
          <div className="flex flex-col justify-between">
            <div className="mt-4 flex flex-row justify-between gap-4 sm:flex-col-reverse">
              <div className="flex flex-col">
                <div>
                  <h1 className="inline-block animate-slidein bg-gradient-to-r from-gray-700 to-slate-400 bg-clip-text text-5xl font-bold text-transparent opacity-0 [--slidein-delay:300ms] dark:from-slate-300 dark:to-slate-600 sm:text-4xl">
                    {HomepageData.fullName}
                  </h1>
                </div>
                <div className="">
                  <h1 className="inline-block animate-slidein bg-gradient-to-r from-slate-500 to-slate-600 bg-clip-text text-2xl font-bold text-slate-700 text-transparent opacity-0 [--slidein-delay:500ms] dark:from-slate-300 dark:to-indigo-300">
                    {HomepageData.position}
                  </h1>
                  {/* <div className="animate-slidein [--slidein-delay:500ms] opacity-0 flex flex-row items-center bg-gradient-to-r text-2xl text-transparent bg-clip-text font-bold dark:from-slate-300 dark:to-indigo-500 from-slate-500 to-slate-600">
                    <span> {HomepageData.location}</span>
                    <Image
                      className="rounded-full w-7"
                      src="/nepalflag.svg"
                      width={200}
                      height={200}
                      alt="avatar"
                    />{" "}
                  </div> */}
                </div>
              </div>
              <div className="flex animate-slidein flex-col items-center gap-4 opacity-0 [--slidein-delay:300ms]">
                <div>
                  <Image
                    loading="lazy"
                    className="h-[140px] w-[140px] rounded-[50%] shadow-[rgba(0,_0,_0,_0.5)_0px_10px_10px] grayscale hover:grayscale-0"
                    src="/portfolio.jpg"
                    property="25"
                    width={200}
                    height={200}
                    alt="avatar"
                  />
                </div>
                <div>
                  <Link
                    href="/resume/Bishal_Thapa_Resume_2024.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex w-fit cursor-pointer flex-row items-center gap-2 rounded-md bg-blue-900 px-2 py-1 text-[12px] text-slate-300 hover:bg-blue-800 dark:bg-blue-900 dark:text-slate-300 dark:hover:bg-blue-800">
                      Resume
                      {/* <span className=" text-[12px]">
                        <FaExternalLinkSquareAlt />
                      </span> */}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6 flex animate-slidein flex-col text-base font-medium opacity-0 [--slidein-delay:700ms] dark:text-slate-300 sm:justify-center">
              <p className="sm:w-full md:w-[520px]">
                {HomepageData.personalSummary}
              </p>
            </div>
            <div className="my-4 flex animate-slidein flex-row flex-wrap items-center gap-4 opacity-0 [--slidein-delay:900ms]">
              <Link href="/about">
                <button className="text-md flex flex-row items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500 px-2 py-2 text-white hover:bg-gradient-to-r hover:from-violet-700 hover:to-red-700 dark:from-violet-500 dark:to-cyan-700 dark:hover:bg-gradient-to-r dark:hover:from-violet-700 dark:hover:to-red-700">
                  <span className="text-xl">
                    <IoPersonSharp />
                  </span>
                  More about me
                </button>
              </Link>
              <div>
                <div className="flex flex-row items-center justify-center gap-6">
                  <a
                    href="https://github.com/thapabishal21dev"
                    target="_blank"
                    className="rounded-md px-2 py-1 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800"
                  >
                    <p className="text-[24px] dark:text-white">
                      <FaGithub />
                    </p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                    className="rounded-md px-2 py-1 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="text-[24px] dark:text-white">
                      <FaLinkedin />
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="rounded-md px-2 py-1 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="text-[24px] dark:text-white">
                      <FaXTwitter />
                    </p>
                  </a>
                  <a
                    href="mailto:thapabishal21dev@gmail.com"
                    target="_blank"
                    className="rounded-md px-2 py-1 transition duration-200 hover:bg-slate-300 dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="text-[24px] dark:text-white">
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
