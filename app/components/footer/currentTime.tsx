"use client";
import { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
export const CurrentTime = () => {
  const [time, setTime] = useState<any>(new Date());
  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timeId);
    };
  });
  return (
    <div className=" flex flex-row sm:justify-center items-center gap-2 text-sm text-slate-200 font-bold">
      <p>
        <FaClock />
        <span>{time}</span>
      </p>
    </div>
  );
};
