"use client";

import {
  MotionStyle,
  MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { MouseEvent, useState } from "react";

type WrapperStyle = MotionStyle & {
  "--x": MotionValue<string>;
  "--y": MotionValue<string>;
};

interface IProps {
  companyName?: string;
  position?: string;
  date?: string;
  logo?: string;
  background?: string;
  darkBackground?: string;
}

const WorkExperienceCard: React.FC<IProps> = ({
  companyName,
  position,
  date,
  logo,
  background,
  darkBackground,
}) => {
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

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="animated-cards relative"
      style={
        {
          "--x": useMotionTemplate`${mouseX}px`,
          "--y": useMotionTemplate`${mouseY}px`,
        } as WrapperStyle
      }
      onMouseMove={handleMouseMove}
    >
      <div
        className={` transition  dark:bg-[#111a28] ease-in-out duration-200 my-6 p-4 flex gap-1 rounded-[8px] cursor-pointer relative hover:bg-gray-100 bg-white`}
      >
        <div className="">
          <Image
            className=" z-50 w-12  border border-1 border-gray-400 rounded-lg mr-2 "
            src={`${logo}`}
            width={100}
            height={100}
            alt="companyimg"
          />
        </div>
        <div className="flex flex-col capitalize ">
          <p className=" text-gray-500 text-base font-RobotoMono dark:text-gray-300">
            {date}
          </p>
          <h1
            className={`font-semibold ${
              isHovered === true ? "underline decoration-2" : ""
            }  text-base text-slate-900 dark:text-slate-200`}
          >
            {companyName}
          </h1>
          <p className=" text-gray-500 font-RobotoMono dark:text-gray-300">
            {position}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
