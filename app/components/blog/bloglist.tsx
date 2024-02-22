import { AllBlogData } from "@/app/lib/data/blogdata";
import React from "react";
import SingleBlog from "./singleblog";
import BlogListUl from "./bloglistUl";

const BlogListPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-[780px] h-screen md:w-[650px] sm:w-full mt-12">
          <h1 className=" text-2xl font-bold text-slate-800 dark:text-slate-300">
            BlogPosts
          </h1>
          <div>
            <BlogListUl />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
