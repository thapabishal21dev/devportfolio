"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowLeftLight } from "react-icons/pi";
import { ProjectsList } from "@/app/lib/data/data";
import { useRouter } from "next/navigation";
import { RiCodeSSlashLine, RiLinksLine } from "react-icons/ri";
import Techstack from "@/app/techstack";
import { usePathname } from "next/navigation";

const TestingProduct = () => {
  const router = useRouter();
  const [clickedProject, setClickedProject] = useState<any>();

  const value = usePathname();

  const lastSegment = value.split("/").filter(Boolean).pop();

  useEffect(() => {
    const foundProjectId = ProjectsList.find(
      (item) => item.projectTitle === lastSegment,
    );
    setClickedProject(foundProjectId);
    if (foundProjectId) {
      setClickedProject(foundProjectId);
    } else {
      router.push("/projects");
    }
  }, []);

  return (
    <>
      {clickedProject ? (
        <div className="flex justify-center bg-[#0b0d11] dark:text-neutral-300">
          <div className="my-6 w-[780px] px-4 sm:w-full md:w-[650px]">
            <Link href="/projects">
              <div className="mt-6 animate-slidein opacity-0 [--slidein-delay:300ms]">
                <button className="flex flex-row items-center gap-1 rounded-2xl border-2 border-neutral-300 px-3 py-1 text-sm hover:bg-neutral-100 dark:border-slate-800 dark:hover:bg-gray-800">
                  <PiArrowLeftLight />
                  Back to project
                </button>
              </div>
            </Link>
            <div className="pt-6">
              <div className="flex animate-slidein flex-row items-center justify-start gap-8 opacity-0 [--slidein-delay:500ms]">
                <div className="">
                  <h1 className="dark:bg-bg-gradient-to-br bg-gradient-to-br from-neutral-800 to-slate-500 bg-clip-text text-2xl font-bold text-transparent dark:from-neutral-500 dark:to-slate-300">
                    {clickedProject.projectTitle}
                  </h1>
                </div>
              </div>
              <div className="my-4 flex animate-slidein flex-row items-center gap-2 opacity-0 [--slidein-delay:700ms]">
                <a
                  href={`https://${clickedProject.projectLink}`}
                  target="_blank"
                >
                  <span className="text-md flex flex-row items-center gap-1 truncate text-slate-600 hover:cursor-pointer hover:text-slate-200 dark:text-slate-500 dark:hover:text-slate-200">
                    <RiLinksLine />
                    Live demo
                  </span>
                </a>
                <div>
                  <a
                    href={`https://github.com/thapabishal21dev${clickedProject.projectGithub}`}
                    target="_blank"
                  >
                    <span className="text-md flex flex-row items-center gap-1 truncate text-slate-600 hover:cursor-pointer hover:text-slate-200 dark:text-slate-500 dark:hover:text-slate-200">
                      <RiCodeSSlashLine />
                      Source code{" "}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <div className="animate-slidein rounded bg-gradient-to-r from-slate-200 to-slate-400 px-20 py-16 opacity-0 [--slidein-delay:900ms] dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-700 sm:p-6 md:p-12">
                  <Image
                    src={clickedProject.projectImages ?? "/wallpaper.png"}
                    alt={
                      clickedProject.projectTitle
                        ? `${clickedProject.projectTitle}`
                        : "projectImages"
                    }
                    width={1000}
                    height={1000}
                    priority
                  />
                </div>
              </div>
              <div className="flex py-6">
                <p>{clickedProject.projectDescription}</p>
              </div>{" "}
              <div className="flex flex-row flex-wrap gap-4">
                {clickedProject.projectTechStack?.map(
                  (newItem: any, index: number) => (
                    <div key={index}>
                      <Techstack
                        techName={newItem.techName}
                        techImg={newItem.techImg}
                        hoverBgColor={newItem.hoverBgColor}
                        HoverBorderColor={newItem.HoverBorderColor}
                      />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen"></div>
      )}
    </>
  );
};

export default TestingProduct;
