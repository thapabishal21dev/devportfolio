"use client";
import React, { useEffect, useState } from "react";
import { AllBlogData, IAllBlogData } from "@/app/lib/data/blogdata";
import { ApiDataContext } from "@/app/context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  IncrementLike,
  IncrementWow,
  Incrementlove,
  IncrementRocket,
  IncrementCup,
} from "@/app/features/reactionslice";
import type { RootState } from "@/app/store/store";
import { FaRegThumbsUp } from "react-icons/fa";
import { TbMoodSuprised } from "react-icons/tb";
import { IoMdHeart } from "react-icons/io";
import { IoIosRocket } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";

const SingleBlogPage = () => {
  const [selectBlogData, setSelectBlogData] = useState<IAllBlogData>(
    {} as IAllBlogData
  );
  const router = useRouter();
  const { blogId } = useContext(ApiDataContext);

  useEffect(() => {
    const foundBlogId = AllBlogData.find((item) => item.postId === blogId);

    if (foundBlogId) {
      setSelectBlogData(foundBlogId);
    } else {
      router.push("/blog");
    }
  }, [blogId, router]);

  const dispatch = useDispatch();
  const { like, wow, love, rocket, cup } = useSelector(
    (state: RootState) => state.reactionReducer
  );

  // const handleClickReaction = (reactionCount: string) => {
  //   switch (reactionCount) {
  //     case "like":
  //       dispatch(incrementLike());
  //       break;

  //     default:
  //       break;
  //   }
  // };
  return (
    <div className="flex justify-center">
      <div className=" w-[780px] md:w-[650px] sm:w-full px-4 pt-16 h-screen mb-14">
        <div className=" dark:text-slate-300 flex flex-col gap-2">
          <h1 className=" text-2xl dark:text-amber-500 font-semibold mb-4">
            {selectBlogData.postTitle}
          </h1>
          <p className=" italic text-sm">{selectBlogData.postDate}</p>
          <div className=" flex gap-2 dark:text-slate-300">
            {selectBlogData.postReactions?.map((newItems, index) => (
              <div className=" flex items-center gap-2 text-sm " key={index}>
                <p className=" flex cursor-pointer  items-center gap-1">
                  <span>{like}</span>
                  <span
                    onClick={() => dispatch(IncrementLike(like + 1))}
                    className="text-lg hover:text-violet-500"
                  >
                    <FaRegThumbsUp />
                  </span>
                </p>
                <span>{wow}</span>
                <p className=" flex cursor-pointer  items-center gap-1">
                  <span
                    onClick={() => dispatch(IncrementWow(wow + 1))}
                    className=" text-xl hover:text-violet-500"
                  >
                    <TbMoodSuprised />
                  </span>
                </p>
                <span>{love}</span>
                <p className=" flex cursor-pointer  items-center gap-1">
                  <span
                    onClick={() => dispatch(Incrementlove(love + 1))}
                    className=" text-xl hover:text-violet-500"
                  >
                    <IoMdHeart />
                  </span>
                </p>
                <span>{rocket}</span>
                <p className=" flex cursor-pointer  items-center gap-1">
                  <span
                    onClick={() => dispatch(IncrementRocket(rocket + 1))}
                    className=" text-xl hover:text-violet-500"
                  >
                    <IoIosRocket />
                  </span>
                </p>
                <span>{cup}</span>
                <p className=" flex cursor-pointer items-center gap-1">
                  <span
                    onClick={() => dispatch(IncrementCup(cup + 1))}
                    className=" text-xl hover:text-violet-500"
                  >
                    <CiCoffeeCup />
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className=" py-4">
            {selectBlogData.postContent?.map((item, index) => (
              <div className=" flex flex-col gap-2" key={index}>
                <h1 className=" text-xl">
                  {item.contentTitle ?? item.contentTitle}
                </h1>
                <p>{item.contentDiscription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
