"use client";
import { ApiDataContext } from "@/app/context/context";
import {
  MotionStyle,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { MouseEvent, useContext } from "react";
import { IProject, ProjectsList } from "@/app/lib/data/data";
import { useRouter } from "next/navigation";
type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

const ProjectCard = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: MouseEvent<Element>) => {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const { setSelectedProjectId } = useContext(ApiDataContext);

  const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    setUserApiData(setSelectedProjectId.projectTitle);
  };

  const handleSelectProject = (props: any) => {
    setSelectedProjectId(props.projectId);
  };
  return (
    <>
      {ProjectsList &&
        ProjectsList.map((project: IProject) => (
          <Link
            href={`/projects/${project.projectTitle}`}
            onClick={() => handleSelectProject(project.projectTitle)}
            key={project.projectId}
          >
            <motion.div
              className={`animated-cards relative cursor-pointer rounded-lg bg-[#f0f2f5] bg-gradient-to-r from-gray-200 to-slate-200 text-transparent dark:bg-gradient-to-r dark:from-slate-800 dark:to-neutral-900`}
              // className={`animated-cards relative cursor-pointer rounded-lg bg-[#f0f2f5] bg-gradient-to-r from-gray-400 to-slate-400 dark:bg-gradient-to-r dark:from-gray-200 dark:to-slate-800`}
              style={
                {
                  "--x": useMotionTemplate`${mouseX}px`,
                  "--y": useMotionTemplate`${mouseY}px`,
                } as WrapperStyle
              }
              onMouseMove={handleMouseMove}
              onClick={handleClick}
            >
              <div
                className={`text-gray-00 m-2 flex h-32 flex-col gap-2 bg-gradient-to-r bg-clip-text p-8 px-4 text-gray-600 dark:bg-gradient-to-r dark:text-slate-400`}
              >
                <h1 className="text-lg font-bold capitalize">
                  {project.projectTitle}
                </h1>
                <p className="text-sm">{project.projectDescription}</p>
              </div>
            </motion.div>
          </Link>
        ))}
    </>
  );
};

export default ProjectCard;
