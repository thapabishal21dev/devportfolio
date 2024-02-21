"use client";
import { IAllBlogData, IPostReactions } from "@/app/lib/data/blogdata";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { ApiDataContext } from "@/app/context/context";

interface Iprops {
  params: number;
  postTitle: string | undefined;
  postDate: string | undefined;
  postReactions: IPostReactions[];
}

const SingleBlog = ({ params, postTitle, postDate, postReactions }: Iprops) => {
  const { setBlogId } = useContext(ApiDataContext);

  const handleClick = () => {
    setBlogId(params);
  };
  return (
    <div onClick={handleClick}>
      <Link href={`/blog/${postTitle}`}>
        <div className=" border-2 border-slate-500 rounded-xl dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 px-4 py-2">
          <div className=" flex flex-col gap-2">
            <h1 className=" dark:text-slate-400 text-slate-700 text-xl font-bold">
              {postTitle}
            </h1>
            <div className=" text-slate-600 flex flex-row italic items-center text-sm">
              {postDate}
            </div>
            <div className=" flex gap-2 dark:text-slate-300">
              {postReactions.map((newItems, index) => (
                <div className=" flex gap-2 text-sm " key={index}>
                  <p>
                    <span>👍</span>
                    {newItems.like}
                  </p>
                  <p>
                    <span>😮</span>
                    {newItems.wow}
                  </p>
                  <p>
                    <span>❤️</span>
                    {newItems.love}
                  </p>
                  <p>
                    <span>🚀</span>
                    {newItems.rocket}
                  </p>
                  <p>
                    <span>☕</span>
                    {newItems.cup}
                  </p>
                </div>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBlog;
