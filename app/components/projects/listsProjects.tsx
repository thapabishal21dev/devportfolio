"use client";
import { ApiDataContext } from "@/app/context/context";
import { useContext } from "react";
import Link from "next/link";

export interface IPropsProjectList {
  params: string | undefined;
  projectData: any;
  projectId: number | undefined;
}

const ListProjects = ({ params, projectData }: IPropsProjectList) => {
  const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    setUserApiData(params);
  };

  return (
    <>
      <div onClick={handleClick}>
        <Link href={`/projects/${params}`}>
          <div
            className={`cursor-pointer space-y-2 overflow-hidden  border-base-800 dark:border-gray-700 border-2 dark:hover:border-2  dark:hover:bg-gradient-to-br from-base-900 to-base-900/80 ${projectData.projectBorderColor} ${projectData.projectShadowColor} ${projectData.projectBorderColorLight} ${projectData.projectBgColorLight} ${projectData.projectShadowColorLight} bg-[#f5f9fe] transition duration-100  flex flex-row items-center  dark:bg-slate-950 dark:text-slate-400 rounded-xl h-24 px-3 py-2 hover:scale-[1.01]`}
          >
            {" "}
            <div
              className={` text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r ${projectData.projectTitleColor1st} ${projectData.projectTitleColor2nd} px-4`}
            >
              <h1 className=" text-lg font-semibold ">
                {projectData.projectTitle}
              </h1>
              <p className=" text-sm">{projectData.projectDescription}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ListProjects;
