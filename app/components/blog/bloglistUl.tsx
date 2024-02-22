import { AllBlogData } from "@/app/lib/data/blogdata";
import React from "react";
import SingleBlog from "./singleblog";

const BlogListUl = () => {
  return (
    <div>
      <ul className=" flex flex-col gap-4 my-6">
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
  );
};

export default BlogListUl;
