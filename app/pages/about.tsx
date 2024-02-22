"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Techstack from "@/app/techstack";
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
import { AboutPageData } from "../lib/data/data";
import BlogListUl from "../components/blog/bloglistUl";

const AboutPage = () => {
  return (
    <div className=" flex justify-center mt-0 dark:text-slate-200 text-slate-700">
      <div className=" w-[780px] mt-12 md:w-[650px] sm:w-full px-4 ">
        <div className=" flex flex-col">
          <div className="flex flex-col animate-slidein [--slidein-delay:300ms] opacity-0">
            <p className=" text-2xl ">👋</p>
            <h1 className="text-3xl bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-extrabold">
              {" "}
              {AboutPageData.fullName}
            </h1>
          </div>
          <div className=" animate-slidein [--slidein-delay:500ms] opacity-0 flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:w-full">
            <div>
              <p className="  font-bold text-xl"> {AboutPageData.position}</p>
            </div>
            <div className=" flex flex-row ">
              <p className=" font-bold text-xl"> {AboutPageData.location}</p>
              <Image
                className="w-6"
                src="/nepalflag.svg"
                width={200}
                height={200}
                priority
                alt="&nbsp;"
              />
            </div>
          </div>
        </div>
        <div className=" text-justify  py-4 flex flex-col gap-4 text-[15px]">
          <p className="animate-slidein [--slidein-delay:700ms] opacity-0 ">
            {AboutPageData.personalDetails01}
          </p>
          <p className=" animate-slidein [--slidein-delay:900ms] opacity-0">
            {AboutPageData.personalDetails02}
          </p>
        </div>
        <div>
          <Image
            className=" animate-slidein [--slidein-delay:1100ms] opacity-0 w-full rounded-lg grayscale my-10 bg-slate-400"
            src={"/photo.jpg"}
            width={700}
            height={700}
            alt="&nbsp;"
            priority
          />
        </div>
        <div>
          <p>{AboutPageData.personalDetails03}</p>
        </div>
        <div>
          <h1 className="text-xl py-5 bg-gradient-to-r from-violet-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
            lets connect!
          </h1>
          <p>
            Feel free to reach out to me at{" "}
            <span className=" text-blue-400 hover:underline underline-offset-2">
              {" "}
              <a href="mailto:thapabishal21sinha@gmail.com">
                thapabishal21dev@gmail.com{" "}
              </a>
            </span>
            or find me on social media:
          </p>
        </div>
        <div>
          <div className=" flex gap-6 pt-5 flex-row items-center">
            <a
              href="https://github.com/thapabishal21dev"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className=" text-[24px] ">
                <FaGithub />
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className="  text-[24px] ">
                <FaLinkedin />
              </p>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className="  text-[24px] ">
                <FaXTwitter />
              </p>
            </a>
            <a
              href="mailto:thapabishal21dev@gmail.com"
              className="hover:bg-slate-200 p-2 rounded-md dark:hover:bg-slate-800"
            >
              {" "}
              <p className=" text-[24px] ">
                <MdEmail />
              </p>
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-2xl mt-4 bg-gradient-to-r from-cyan-500 to-green-500 inline-block text-transparent bg-clip-text font-bold">
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
            HoverBorderColor="hover:border-slate-400"
            hoverBgColor="hover:bg-slate-100"
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
        <div>
          <h1 className="text-2xl mt-4 bg-gradient-to-r from-violet-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
            BlogPost
          </h1>{" "}
          <BlogListUl />
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
                <p className=" text-md ">
                  working in dashboard and personal projects
                </p>
              </div>
            </div>
            <div className=" flex flex-row sm:flex-col sm:gap-2 gap-10 py-10">
              <div className=" flex flex-row gap-10 min-w-[300px]  ">
                <h1 className=" text-lg sm:font-normal  text-blue-500  ">
                  June 2023 - September 2023
                </h1>
              </div>
              <div className=" flex flex-col gap-1">
                <h1 className=" text-lg text-violet-500 italic ">
                  React Intern
                </h1>
                <p className=" text-sm text-green-500 ">LancemeUp</p>
                <p className=" text-md ">worked in different web application</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
