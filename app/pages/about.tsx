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
    <div className="mt-0 flex justify-center text-slate-700 dark:text-slate-200">
      <div className="mt-12 w-[780px] px-4 sm:w-full md:w-[650px]">
        <div className="flex flex-col">
          <div className="flex animate-slidein flex-col opacity-0 [--slidein-delay:300ms]">
            <p className="text-2xl">👋</p>
            <h1 className="inline-block bg-gradient-to-r from-[#00c8ff] to-[#00ff80] bg-clip-text text-4xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-teal-500 dark:to-blue-500">
              {AboutPageData.fullName}
            </h1>
          </div>
          <div className="flex animate-slidein flex-row items-center gap-2 opacity-0 [--slidein-delay:500ms] sm:w-full sm:flex-col sm:items-start">
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
        <div className="flex flex-col gap-4 py-4 text-justify text-base">
          <p className="animate-slidein opacity-0 [--slidein-delay:700ms]">
            {AboutPageData.personalDetails01}
          </p>
          <p className="animate-slidein opacity-0 [--slidein-delay:900ms]">
            {AboutPageData.personalDetails02}
          </p>
        </div>
        <div>
          <Image
            className="my-10 w-full animate-slidein rounded-lg bg-slate-400 opacity-0 grayscale [--slidein-delay:1100ms]"
            src={"/photo.jpg"}
            width={700}
            height={700}
            alt="&nbsp;"
            priority
          />
        </div>
        <div className="flex flex-col gap-4">
          <p>{AboutPageData.personalDetails03}</p>
          <p>{AboutPageData.personalDetails04}</p>
        </div>
        <div>
          <h1 className="inline-block bg-gradient-to-r from-violet-500 to-pink-500 bg-clip-text py-5 text-xl font-bold text-transparent">
            lets connect!
          </h1>
          <p>
            Feel free to reach out to me at{" "}
            <span className="text-blue-400 underline-offset-2 hover:underline">
              {" "}
              <a href="mailto:thapabishal21sinha@gmail.com">
                thapabishal21dev@gmail.com{" "}
              </a>
            </span>
            or find me on social media:
          </p>
        </div>
        <div>
          <div className="flex flex-row items-center gap-6 pt-5">
            <a
              href="https://github.com/thapabishal21dev"
              target="_blank"
              className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {" "}
              <p className="text-[24px]">
                <FaGithub />
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/thapa-bishal-64340622a/"
              target="_blank"
              className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {" "}
              <p className="text-[24px]">
                <FaLinkedin />
              </p>
            </a>

            <a
              href="https://twitter.com/"
              target="_blank"
              className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {" "}
              <p className="text-[24px]">
                <FaXTwitter />
              </p>
            </a>
            <a
              href="mailto:thapabishal21dev@gmail.com"
              className="rounded-md p-2 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {" "}
              <p className="text-[24px]">
                <MdEmail />
              </p>
            </a>
          </div>
        </div>
        <div>
          <h1 className="mt-4 inline-block bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-2xl font-bold text-transparent">
            Skills
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-4 py-4">
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
          <h1 className="my-4 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent dark:bg-gradient-to-r dark:from-cyan-500 dark:to-green-500 dark:text-transparent">
            Work Experience
          </h1>
        </div>
        <WorkExperienceCard
          position="Frontend developer"
          companyName="yetitech solutions"
          date="november 2023 - present"
          background="hover:bg-slate-100"
          darkBackground="dark:hover:bg-slate-900"
          logo="/yetitechsolutions.png"
        />
        <WorkExperienceCard
          position="Frontend developer"
          companyName="milo logic"
          date=" May 2024 - July 2024"
          background="hover:bg-blue-100"
          darkBackground="dark:hover:bg-blue-950"
          logo="/milologic.jpg"
        />
        <WorkExperienceCard
          position="Frontend Intern"
          companyName="lancemeup"
          date="june 2023 - september 2023"
          background="hover:bg-sky-100"
          darkBackground="dark:hover:bg-sky-950"
          logo="/lancemeup.png"
        />
      </div>
    </div>
  );
};

export default AboutPage;
