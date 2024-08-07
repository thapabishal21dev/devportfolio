import Image from "next/image";
import React, { useState } from "react";

interface IProps {
  companyName?: string;
  position?: string;
  date?: string;
  logo?: string;
  background?: string;
  darkBackground?: string;
}

// hover:bg-[#e3e6f1]

const ExperienceCard: React.FC<IProps> = ({
  companyName,
  position,
  date,
  logo,
  background,
  darkBackground,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` ${background} ${darkBackground} transition  ease-in-out duration-200 my-6 p-4 flex gap-1 rounded-lg cursor-pointer relative`}
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
    </>
  );
};

export default ExperienceCard;
