import React from "react";

const ProjectPage = () => {
  return (
    <>
      <div className="duration-600 flex justify-center from-slate-900 to-black bg-cover px-4 transition-opacity ease-in-out dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
        <div className="mt-12 flex w-[780px] flex-col sm:w-full md:w-[650px]">
          <h1 className="dark:bg-bg-gradient-to-br animate-slidein bg-gradient-to-br from-slate-900 to-slate-600 bg-clip-text text-[24px] font-bold text-transparent opacity-0 [--slidein-delay:300ms] dark:from-slate-100 dark:to-slate-950">
            Projects
          </h1>
        </div>
        <div className="text-md bg mx-auto my-8 flex items-center hover:cursor-pointer">
          <a
            className="from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:98%_2px] bg-bottom bg-no-repeat transition hover:translate-x-1 hover:bg-gradient-to-r dark:text-white"
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
