import React from "react";
import Image from "next/image";

interface ITech {
  name: string;
  image: React.ReactNode;
}

const SingleTech = (props: ITech) => {
  const getImage = props.image;
  return (
    <div>
      <div className=" border-2 border-slate-100 w-24 px-2 py-3 gap-2 flex flex-col items-center hover:bg-gradient-to-r from-cyan-500 to-slate-500 hover:cursor-pointer hover:text-white rounded-md hover:scale-110 transition duration-500 cursor-pointer object-cover">
        <p className=" text-2xl ">{getImage}</p>
        <h1 className=" text-[14px] font-bold">{props.name}</h1>
      </div>
    </div>
  );
};

export default SingleTech;
