import React from "react";
import ProjectCard from "../components/projectcard/projectcard";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { IProject, ProjectsList } from "../lib/data/data";

const Projects = () => {
  return (
    <div className="  flex justify-center ">
      <div>
        <div className=" flex flex-col w-[780px] mt-12 md:w-[650px] sm:w-full ">
          <h1 className=" animate-slidein [--slidein-delay:300ms] opacity-0 text-[24px] font-bold bg-gradient-to-br to-slate-600 from-slate-900 text-transparent bg-clip-text dark:bg-bg-gradient-to-br dark:to-slate-950 dark:from-slate-100">
            Projects
          </h1>
          <div className=" grid grid-cols-2 gap-6 my-6">
            {ProjectsList.map((item: IProject, index) => (
              <div key={index}>
                <ProjectCard props={item} />
              </div>
            ))}
          </div>
        </div>
        <div className=" text-md hover:cursor-pointer flex items-center mx-auto my-4">
          <Link href="https://github.com/thapabishal21dev">
            <button className=" flex items-center dark:text-white transition text-sm dark:bg-[#111A28] bg-slate-200 px-3 py-2 rounded-lg hover:opacity-70">
              view more <MdKeyboardArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
