"use client";
import React from "react";
import ProjectCard from "../components/projectcard/projectcard";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";
import { useContext } from "react";
import { ApiDataContext } from "../context/context";

const Projects = () => {
  const { setSelectedProjectId } = useContext(ApiDataContext);

  return (
    <div className="flex justify-center">
      <div>
        <div className="mt-12 flex w-[780px] flex-col sm:w-full md:w-[650px]">
          <h1 className="dark:bg-bg-gradient-to-br bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-[24px] font-bold text-transparent dark:from-slate-100 dark:to-slate-950">
            Projects
          </h1>
          <div className="my-6 grid grid-cols-2 gap-6">
            <ProjectCard />
          </div>
        </div>
        <div className="text-md mx-auto my-4 flex items-center hover:cursor-pointer">
          <Link href="https://github.com/thapabishal21dev">
            <button className="flex items-center rounded-lg bg-slate-200 px-3 py-2 text-sm transition hover:opacity-70 dark:bg-[#111A28] dark:text-white">
              view more <MdKeyboardArrowRight size={15} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
