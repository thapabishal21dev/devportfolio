"use client";
import { ApiDataContext } from "@/app/context/context";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  const { updateTheme } = useContext(ApiDataContext);

  const thisYear = new Date();
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [selectedYear, setSelectedYear] = useState<number>();

  const handleChangeYear = (year: number) => {
    setSelectedYear(year);
  };

  const Default_Theme: any = {
    light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
    dark: ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"],
  };

  return (
    <div className="flex animate-slidein justify-center text-neutral-700 opacity-0 [--slidein-delay:2500ms] dark:text-neutral-300">
      <div className="w-[780px] px-4 sm:w-full md:w-[650px]">
        <h1 className="text-center text-2xl font-bold">Github Contributions</h1>{" "}
        <div className="mx-16 my-6 flex flex-row justify-center gap-4">
          <button
            onClick={() => handleChangeYear(2022)}
            className="hover:text-green-500 focus:border-b-2 focus:border-green-300 focus:outline-none"
          >
            2022
          </button>
          <button
            onClick={() => handleChangeYear(2023)}
            className="hover:text-green-500 focus:border-b-2 focus:border-green-300 focus:outline-none"
          >
            2023
          </button>
          <button
            onClick={() => handleChangeYear(2024)}
            className="hover:text-green-500 focus:border-b-2 focus:border-green-300 focus:outline-none"
          >
            2024
          </button>
        </div>
        <div className="mx-2 rounded-md border-2 border-slate-400 px-5 py-4">
          {isClient ? (
            <GitHubCalendar
              style={{ margin: "6px auto" }}
              username="thapabishal21dev"
              blockSize={10}
              blockMargin={3}
              fontSize={14}
              year={selectedYear}
              colorScheme={updateTheme.colorScheme}
              theme={Default_Theme}
            />
          ) : (
            <div>
              <h1>loading...</h1>
            </div>
          )}
        </div>
        <h1 className="text-md my-6 cursor-pointer text-center italic text-green-500 underline">
          <Link
            href="https://github.com/thapabishal21dev"
            title="visit"
            target="_blank"
          >
            thapabishal21dev on Github - {thisYear.getFullYear()}
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default Github;
