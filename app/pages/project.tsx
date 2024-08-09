import React from "react";
import ProjectsListsPage from "../components/projects/projectsListsPage";

const ProjectPage = () => {
  return (
    <>
      <div className=" bg-cover px-4 transition-opacity ease-in-out duration-600 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 to-black flex justify-center ">
        <div className=" flex flex-col w-[780px] mt-12 md:w-[650px] sm:w-full">
          <h1 className=" animate-slidein [--slidein-delay:300ms] opacity-0 text-[24px] font-bold bg-gradient-to-br to-slate-600 from-slate-900 text-transparent bg-clip-text dark:bg-bg-gradient-to-br dark:to-slate-950 dark:from-slate-100">
            Projects
          </h1>
          <ProjectsListsPage />
        </div>
        <div className=" text-md hover:cursor-pointer flex items-center mx-auto my-8">
          <a
            className=" dark:text-white hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-no-repeat bg-bottom transition hover:translate-x-1"
            href="https://github.com/thapabishal21dev"
            target="_blank"
          >
            View more on Github &#10132;
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
