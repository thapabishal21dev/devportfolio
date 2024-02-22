import React from "react";

const Experience = () => {
  return (
    <div>
      <div className=" mt-2">
        <h1 className=" text-2xl py-5 bg-gradient-to-r from-pink-700 to-blue-700 dark:bg-gradient-to-r dark:from-pink-500 dark:to-blue-500 inline-block text-transparent bg-clip-text font-bold">
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
              <h1 className=" text-lg text-violet-500 italic ">React Intern</h1>
              <p className=" text-sm text-green-500 ">LancemeUp</p>
              <p className=" text-md dark:text-slate-300">
                worked in different web application
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
