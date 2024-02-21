"use client";
import React, { useEffect, useState } from "react";
import { AllBlogData, IAllBlogData } from "@/app/lib/data/blogdata";
import { ApiDataContext } from "@/app/context/context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

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

  return (
    <div className="flex justify-center">
      <div className=" w-[780px] md:w-[650px] sm:w-full px-4 pt-16 h-screen mb-14">
        <div className=" dark:text-slate-300">
          <h1 className=" text-3xl font-bold  mb-4">
            {selectBlogData.postTitle}
          </h1>
          <p>{selectBlogData.postDate}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
