import { AllBlogData } from "@/app/lib/data/blogdata";
import React from "react";
import SingleBlog from "./singleblog";

const BlogListPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className=" w-[780px] md:w-[650px] sm:w-full px-4 pt-16  mb-14">
          <h1 className=" text-3xl font-bold text-slate-800 dark:text-slate-300 mb-4">
            BlogPosts
          </h1>
          <ul className=" flex flex-col gap-4">
            {AllBlogData.map((item) => (
              <li key={item.postId}>
                <SingleBlog
                  params={item.postId}
                  postTitle={item.postTitle}
                  postDate={item.postDate}
                  postReactions={item.postReactions}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
