"use client";
import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFigma,
  SiGit,
  SiGithub,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import Techstack from "@/app/techstack";

const HomePageAbout = () => {
  return (
    <div className=" flex justify-center pt-10 text-black dark:text-white">
      <div className=" w-[780px] md:w-[650px] sm:w-full px-4 ">
        <div>
          <h1 className="text-2xl  my-5 dark:bg-gradient-to-r dark:from-[#00c8ff] dark:to-[#00ff80] bg-gradient-to-r from-cyan-700 to-green-700 inline-block text-transparent  bg-clip-text font-bold">
            Skills
          </h1>
        </div>
        <div className="  flex flex-row flex-wrap gap-4 py-4 ">
          <Techstack
            techName={"TypeScript"}
            techImg={<SiTypescript />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"ReactJs"}
            techImg={<RiReactjsFill />}
            HoverBorderColor="hover:border-cyan-400"
            hoverBgColor="hover:bg-cyan-200"
          />
          <Techstack
            techName={"NextJs"}
            techImg={<TbBrandNextjs />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"TailwindCSS"}
            techImg={<SiTailwindcss />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
          />
          <Techstack
            techName={"JavaScript"}
            techImg={<SiJavascript />}
            HoverBorderColor="hover:border-[#F0DB4F]"
            hoverBgColor="hover:bg-[#F0DB4F]"
          />
          <Techstack
            techName={"Redux"}
            techImg={<SiRedux />}
            HoverBorderColor="hover:border-[#764abc]"
            hoverBgColor="hover:bg-[#764abc]"
          />
          <Techstack
            techName={"Sass"}
            techImg={<SiSass />}
            HoverBorderColor="hover:border-[#cc6699]"
            hoverBgColor="hover:bg-[#cc6699]"
          />
          <Techstack
            techName={"GitHub"}
            techImg={<SiGithub />}
            HoverBorderColor="hover:border-gray-400"
            hoverBgColor="hover:bg-gray-200"
          />{" "}
          <Techstack
            techName={"Figma"}
            techImg={<SiFigma />}
            HoverBorderColor="hover:border-violet-400"
            hoverBgColor="hover:bg-violet-200"
          />
          <Techstack
            techName={"Git"}
            techImg={<SiGit />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
          />
        </div>
        <div className=" py-5">
          <h1 className="text-2xl py-5 bg-gradient-to-r from-pink-700 to-blue-700 dark:bg-gradient-to-r dark:from-pink-500 dark:to-blue-500 inline-block text-transparent bg-clip-text font-bold">
            Experience
          </h1>
          <div className=" flex flex-col font-bold">
            <div className=" flex flex-row  sm:flex-col gap-10 sm:gap-2 py-10 sm:py-2">
              <div className=" flex flex-row gap-10 min-w-[300px] sm:w-full ">
                <h1 className=" text-lg sm:font-normal  text-blue-500 sm:text-white  ">
                  November 2023 - present
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-violet-500 italic ">
                  Junior React Developer
                </h1>
                <p className=" text-sm text-green-500 ">Freelancher</p>
                <p className=" text-md dark:text-slate-300">
                  working in dashboard and personal projects
                </p>
              </div>
            </div>
            <div className=" flex flex-row sm:flex-col sm:gap-2 gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px]  ">
                <h1 className=" text-lg sm:font-normal  text-blue-500  sm:text-white  ">
                  June 2023 - September 2023
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-violet-500 italic ">
                  React Intern
                </h1>
                <p className=" text-sm text-green-500 ">LancemeUp</p>
                <p className=" text-md dark:text-slate-300">
                  worked in different web application
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;
