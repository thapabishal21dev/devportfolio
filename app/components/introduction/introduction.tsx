"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HomepageData } from "@/app/lib/data/data";

const Introduction = () => {
  return (
    <>
      <div className=" relative  text-neutral-700 dark:text-neutral-300 z-10 flex justify-center ">
        <div className=" mt-20 w-[780px] md:w-[650px] sm:w-full px-4">
          <div className="flex flex-col justify-between  ">
            <div className=" flex flex-row sm:flex-col-reverse gap-4 mt-12 justify-between">
              <div className=" flex flex-col">
                <div>
                  <h1 className=" text-4xl bg-gradient-to-r from-[#777777] to-[#003cff]  inline-block text-transparent bg-clip-text font-extrabold ">
                    {HomepageData.fullName}{" "}
                  </h1>
                </div>
                <div className="">
                  <h1 className="dark:text mt-2 from-[#00ffee] to-[#001eff] text-2xl font-bold text-slate-700">
                    <span className="bg-clip-text dark:text-transparent bg-gradient-to-r from-[#00ffee] to-[#001eff]">
                      {HomepageData.position}
                    </span>{" "}
                  </h1>{" "}
                  <div className=" flex flex-row items-center text-2xl text-neutral-700 font-bold dark:text-white">
                    <span> {HomepageData.location}</span>
                    <Image
                      className="rounded-full w-8"
                      src="/nepalflag.svg"
                      width={200}
                      height={200}
                      alt="avatar"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="flex">
                <Image
                  className=" rounded-[50%] h-[150px] w-[150px] shadow-[rgba(0,_0,_0,_0.5)_0px_10px_10px]"
                  src="/portfolio.jpg"
                  property="25"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </div>
            </div>
            <div className="flex  flex-col sm:justify-center font-medium text-[15px] mt-6">
              <p className=" md:w-[520px] sm:w-full  ">
                {HomepageData.personalSummary}
              </p>
            </div>
            <div className=" flex flex-row flex-wrap gap-4 my-4 items-center">
              <Link href="/about">
                {" "}
                <button className=" flex flex-row gap-2 items-center bg-[#1d50a3] rounded-lg text-white px-2 py-2 hover:bg-blue-700 text-md ">
                  <span className=" text-xl ">
                    <IoPersonSharp />
                  </span>
                  More about me
                </button>
              </Link>
              <div>
                <div className=" flex justify-center gap-6 flex-row items-center">
                  <a
                    href="https://github.com/thapabishal21tech"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className=" text-[24px] dark:text-white">
                      <FaGithub />
                    </p>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaLinkedin />
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
                  >
                    {" "}
                    <p className="  text-[24px] dark:text-white">
                      <FaXTwitter />
                    </p>
                  </a>
                  <a
                    href="mailto:thapabishal21dev@gmail.com"
                    target="_blank"
                    className="hover:bg-slate-200 p-1 rounded-md dark:hover:bg-slate-800"
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
