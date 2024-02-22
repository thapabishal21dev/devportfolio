"use client";
import React from "react";
import Experience from "../experience/experience";
import Skills from "../skills/skills";
import BlogListUl from "../blog/bloglistUl";

const HomePageAbout = () => {
  return (
    <div className=" flex justify-center  text-black dark:text-white">
      <div className=" w-[780px] md:w-[650px] sm:w-full px-4 ">
        <Skills />
        <div>
          <h1 className="text-2xl mt-4 bg-gradient-to-r from-violet-500 to-pink-500 inline-block text-transparent bg-clip-text font-bold">
            Blogpost
          </h1>
          <BlogListUl />
        </div>
        <Experience />
      </div>
    </div>
  );
};

export default HomePageAbout;
