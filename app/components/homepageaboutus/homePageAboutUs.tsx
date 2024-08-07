"use client";
import React from "react";
import Experience from "../experience/experience";
import Skills from "../skills/skills";

const HomePageAbout = () => {
  return (
    <div className=" flex justify-center  text-black dark:text-white">
      <div className=" w-[780px] md:w-[650px] sm:w-full px-4 ">
        <div className=" my-6">
          <Skills />
        </div>
        <div className=" my-6">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;
