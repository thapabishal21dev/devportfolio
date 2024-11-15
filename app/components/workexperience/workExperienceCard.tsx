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
        className={`relative my-6 flex cursor-pointer gap-1 rounded-[8px] bg-white p-4 transition duration-200 ease-in-out hover:bg-gray-100 dark:bg-[#14181F]`}
      >
        <div className="">
          <Image
            className="border-1 z-50 mr-2 w-12 rounded-lg border border-gray-400"
            src={`${logo}`}
            width={100}
            height={100}
            alt="companyimg"
          />
        </div>
        <div className="flex flex-col capitalize">
          <p className="font-RobotoMono text-base text-gray-500 dark:text-gray-300">
            {date}
          </p>
          <h1
            className={`font-semibold ${
              isHovered === true ? "underline decoration-2" : ""
            } text-base text-slate-900 dark:text-slate-200`}
          >
            {companyName}
          </h1>
          <p className="font-RobotoMono text-gray-500 dark:text-gray-300">
            {position}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperienceCard;
