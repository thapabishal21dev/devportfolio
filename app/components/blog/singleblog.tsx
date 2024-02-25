"use client";
import { IPostReactions } from "@/app/lib/data/blogdata";
import Link from "next/link";
import React from "react";
import { useContext } from "react";
import { ApiDataContext } from "@/app/context/context";
import { FaRegThumbsUp } from "react-icons/fa6";
import { TbMoodSuprised } from "react-icons/tb";
import { IoIosRocket, IoMdHeart } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import { useSelector } from "react-redux";
import type { RootState } from "@/app/store/store";

interface Iprops {
  params: number;
  postTitle: string | undefined;
  postDate: string | undefined;
  postReactions: IPostReactions[];
}

const SingleBlog = ({ params, postTitle, postDate }: Iprops) => {
  const { setBlogId } = useContext(ApiDataContext);

  const handleClick = () => {
    setBlogId(params);
  };

  const { like, wow, love, rocket, cup } = useSelector(
    (state: RootState) => state.reactionReducer
  );

  return (
    <div onClick={handleClick}>
      <Link href={`/blog/${postTitle}`}>
        <div className=" border-2 border-slate-500 rounded-xl dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 px-4 py-2">
          <div className=" flex flex-col gap-2">
            <h1 className=" dark:text-amber-500 text-slate-700 text-xl font-semibold">
              {postTitle}
            </h1>
            <div className=" text-slate-600 flex flex-row italic items-center text-sm">
              {postDate}
            </div>
            <div className=" flex gap-2 dark:text-slate-300">
              <div className=" flex gap-2 text-sm ">
                <p className=" flex cursor-pointer  items-center gap-1">
                  {like}
                  <span className="text-lg">
                    <FaRegThumbsUp />
                  </span>
                </p>
                <p className=" flex cursor-pointer  items-center gap-1">
                  {wow}
                  <span className=" text-xl">
                    <TbMoodSuprised />
                  </span>
                </p>
                <p className=" flex cursor-pointer  items-center gap-1">
                  {love}

                  <span className=" text-xl">
                    <IoMdHeart />
                  </span>
                </p>
                <p className=" flex cursor-pointer  items-center gap-1">
                  {rocket}
                  <span className=" text-xl">
                    <IoIosRocket />
                  </span>
                </p>
                <p className=" flex cursor-pointer  items-center gap-1">
                  {cup}
                  <span className=" text-xl">
                    <CiCoffeeCup />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBlog;
