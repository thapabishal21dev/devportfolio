"use client";
import React from "react";
import Experience from "../experience/experience";
import Skills from "../skills/skills";

const HomePageAbout = () => {
  return (
    <div className="flex justify-center text-black dark:text-white">
      <div className="w-[780px] px-4 sm:w-full md:w-[650px]">
        <div className="my-6">
          <Skills />
        </div>
        <div className="my-6 animate-slidein opacity-0 [--slidein-delay:2300ms]">
          <Experience />
        </div>
      </div>
    </div>
  );
};

export default HomePageAbout;
