import React from "react";
import ExperienceCard from "../experiencecard/experiencecard";

const Experience = () => {
  return (
    <>
      <div>
        <h1 className=" text-2xl dark:bg-gradient-to-r dark:from-cyan-500 dark:to-green-500 bg-gradient-to-r from-blue-500 to-cyan-500 inline-block dark:text-transparent text-transparent bg-clip-text my-4 font-bold">
          Work Experience
        </h1>
      </div>
      <ExperienceCard
        position="react developer"
        companyName="milo logic"
        date=" May 2024 - July 2024"
        background="hover:bg-blue-100"
        darkBackground="dark:hover:bg-blue-950"
        logo="/milologic.jpg"
      />
      <ExperienceCard
        position="react Intern"
        companyName="lancemeup"
        date="july 2023 - september 2023"
        background="hover:bg-green-100"
        darkBackground="dark:hover:bg-green-950"
        logo="/lancemeup.png"
      />
      <ExperienceCard
        position="react developer"
        companyName="freelancher"
        date="november 2023 - present"
        background="hover:bg-slate-100"
        darkBackground="dark:hover:bg-slate-900"
        logo="/freelancher.png"
      />
    </>
  );
};

export default Experience;
