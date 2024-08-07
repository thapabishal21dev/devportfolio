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

const Skills = () => {
  return (
    <>
      <div>
        <h1 className=" animate-slidein [--slidein-delay:1000ms] opacity-0 text-2xl dark:bg-gradient-to-r dark:from-cyan-500 dark:to-green-500 bg-gradient-to-r from-cyan-700 to-green-700 inline-block text-transparent  bg-clip-text font-bold">
          Skills
        </h1>
      </div>
      <div className="  flex flex-row flex-wrap gap-4 py-4 ">
        <Techstack
          techName={"TypeScript"}
          techImg={<SiTypescript />}
          HoverBorderColor="hover:border-blue-400"
          hoverBgColor="hover:bg-blue-200"
          slideClass="animate-slidein [--slidein-delay:1200ms] opacity-0"
        />
        <Techstack
          techName={"ReactJs"}
          techImg={<RiReactjsFill />}
          HoverBorderColor="hover:border-cyan-400"
          hoverBgColor="hover:bg-cyan-200"
          slideClass="animate-slidein [--slidein-delay:1300ms] opacity-0"
        />
        <Techstack
          techName={"NextJs"}
          techImg={<TbBrandNextjs />}
          HoverBorderColor="hover:border-blue-400"
          hoverBgColor="hover:bg-blue-200"
          slideClass="animate-slidein [--slidein-delay:1400ms] opacity-0"
        />
        <Techstack
          techName={"TailwindCSS"}
          techImg={<SiTailwindcss />}
          HoverBorderColor="hover:border-blue-400"
          hoverBgColor="hover:bg-blue-200"
          slideClass="animate-slidein [--slidein-delay:1500ms] opacity-0"
        />
        <Techstack
          techName={"JavaScript"}
          techImg={<SiJavascript />}
          HoverBorderColor="hover:border-[#F0DB4F]"
          hoverBgColor="hover:bg-[#F0DB4F]"
          slideClass="animate-slidein [--slidein-delay:1600ms] opacity-0"
        />
        <Techstack
          techName={"Redux"}
          techImg={<SiRedux />}
          HoverBorderColor="hover:border-[#764abc]"
          hoverBgColor="hover:bg-[#764abc]"
          slideClass="animate-slidein [--slidein-delay:1700ms] opacity-0"
        />
        <Techstack
          techName={"Sass"}
          techImg={<SiSass />}
          HoverBorderColor="hover:border-[#cc6699]"
          hoverBgColor="hover:bg-[#cc6699]"
          slideClass="animate-slidein [--slidein-delay:1800ms] opacity-0"
        />
        <Techstack
          techName={"GitHub"}
          techImg={<SiGithub />}
          HoverBorderColor="hover:border-gray-400"
          hoverBgColor="hover:bg-gray-200"
          slideClass="animate-slidein [--slidein-delay:1900ms] opacity-0"
        />{" "}
        <Techstack
          techName={"Figma"}
          techImg={<SiFigma />}
          HoverBorderColor="hover:border-violet-400"
          hoverBgColor="hover:bg-violet-200"
          slideClass="animate-slidein [--slidein-delay:2000ms] opacity-0"
        />
        <Techstack
          techName={"Git"}
          techImg={<SiGit />}
          HoverBorderColor="hover:border-[#f14e32]"
          hoverBgColor="hover:bg-[#f14e32]"
          slideClass="animate-slidein [--slidein-delay:2100ms] opacity-0"
        />
      </div>
    </>
  );
};

export default Skills;
