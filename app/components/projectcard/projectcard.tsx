"use client";
import { ApiDataContext } from "@/app/context/context";
import { IProject } from "@/app/lib/data/data";
import {
  MotionStyle,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Link from "next/link";
import { MouseEvent, useContext } from "react";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

const ProjectCard = ({ props }: any) => {
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
  const { setUserApiData } = useContext(ApiDataContext);

  const handleClick = () => {
    setUserApiData(props.projectTitle);
  };
  return (
    <Link href={`/projects/${props.projectTitle}`}>
      <motion.div
        className={`animated-cards relative bg-[#111A28] rounded-lg cursor-pointer`}
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
          className={` p-8 h-32 text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r ${props.projectTitleColor1st} ${props.projectTitleColor2nd} px-4 flex flex-col gap-2 `}
        >
          <h1 className=" text-lg font-bold capitalize">
            {props.projectTitle}
          </h1>
          <p className=" text-sm">{props.projectDescription}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
