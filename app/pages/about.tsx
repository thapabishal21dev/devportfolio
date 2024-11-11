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
import WorkExperienceCard from "../components/workexperience/workExperienceCard";

const AboutPage = () => {
  return (
    <div className=" flex justify-center mt-0 dark:text-slate-200 text-slate-700">
      <div className=" w-[780px] mt-12 md:w-[650px] sm:w-full px-4 ">
        <div className=" flex flex-col">
          <div className="flex flex-col animate-slidein [--slidein-delay:300ms] opacity-0">
            <p className=" text-2xl">👋</p>
            <h1 className=" text-4xl bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-semibold dark:bg-gradient-to-r dark:from-teal-500 dark:to-blue-500">
              {AboutPageData.fullName}
            </h1>
          </div>
          <div className=" animate-slidein [--slidein-delay:500ms] opacity-0 flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:w-full ">
            {/* <div>
              <p className=" text-base dark:text-blue-400 text-cyan-600">
                {AboutPageData.position}
              </p>
            </div> */}
            {/* <div className=" flex flex-row ">
              <p className="  text-base dark:text-blue-400 text-cyan-600">
                {AboutPageData.location}
              </p>
              <Image
                className="w-6"
                src="/nepalflag.svg"
                width={200}
                height={200}
                priority
                alt="&nbsp;"
              />
            </div> */}
          </div>
        </div>
        <div className=" text-justify  py-4 flex flex-col gap-4 text-base">
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
        <div className=" flex flex-col gap-4 ">
          <p>{AboutPageData.personalDetails03}</p>
          <p>{AboutPageData.personalDetails04}</p>
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
          />
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
          <Techstack
            techName={"Nodejs"}
            techImg={<SiGit />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
            slideClass="animate-slidein [--slidein-delay:2100ms] opacity-0"
          />{" "}
          <Techstack
            techName={"mongoDB"}
            techImg={<SiGit />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
            slideClass="animate-slidein [--slidein-delay:2100ms] opacity-0"
          />
        </div>
        <div>
          <h1 className=" text-2xl dark:bg-gradient-to-r dark:from-cyan-500 dark:to-green-500 bg-gradient-to-r from-blue-500 to-cyan-500 inline-block dark:text-transparent text-transparent bg-clip-text my-4 font-bold">
            Work Experience
          </h1>
        </div>
        <WorkExperienceCard
          position="react developer"
          companyName="milo logic"
          date=" May 2024 - July 2024"
          background="hover:bg-blue-100"
          darkBackground="dark:hover:bg-blue-950"
          logo="/milologic.jpg"
        />
        <WorkExperienceCard
          position="react Intern"
          companyName="lancemeup"
          date="july 2023 - september 2023"
          background="hover:bg-sky-100"
          darkBackground="dark:hover:bg-sky-950"
          logo="/lancemeup.png"
        />
        <WorkExperienceCard
          position="react developer"
          companyName="freelancher"
          date="november 2023 - present"
          background="hover:bg-slate-100"
          darkBackground="dark:hover:bg-slate-900"
          logo="/freelancher.png"
        />
      </div>
    </div>
  );
};

export default AboutPage;
