import React from "react";
import WorkExperienceCard from "../workexperience/workExperienceCard";

const Experience = () => {
  return (
    <>
      <div>
        <h1 className="my-4 inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent dark:bg-gradient-to-r dark:from-cyan-500 dark:to-green-500 dark:text-transparent">
          Work Experience
        </h1>
      </div>
      <WorkExperienceCard
        position="react developer"
        companyName="yetitech solutions"
        date="november 2023 - present"
        background="hover:bg-slate-100"
        darkBackground="dark:hover:bg-slate-900"
        logo="/yetitechsolutions.png"
      />
      <WorkExperienceCard
        position="react developer"
        companyName="milo logic"
        date=" May 2024 - July 2024"
        background="hover:bg-blue-100"
        darkBackground="dark:hover:bg-blue-950"
        logo="/milologic.jpg"
      />
      <WorkExperienceCard
        position="react Intern"
        companyName="lancemeup"
        date="june 2023 - september 2023"
        background="hover:bg-sky-100"
        darkBackground="dark:hover:bg-sky-950"
        logo="/lancemeup.png"
      />
    </>
  );
};

export default Experience;
