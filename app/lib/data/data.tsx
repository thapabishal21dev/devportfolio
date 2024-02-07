import img1 from "@/public/projectImg/img1.png";
import img2 from "@/public/projectImg/img2.png";
import img3 from "@/public/projectImg/img3.png";
import img4 from "@/public/projectImg/img4.png";
import img5 from "@/public/projectImg/img5.png";
import img6 from "@/public/projectImg/img6.png";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactquery } from "react-icons/si";
import { FaSass } from "react-icons/fa";

export interface IprojectTechStack {
  techName?: string;
  techImg?: any;
  HoverBorderColor?: string;
  hoverBgColor?: string;
}

export interface IProject {
  params?: string;
  projectId?: number;
  projectImg?: any;
  projectTitle?: string;
  projectDescription?: string;
  projectLink?: string;
  projectGithub?: string;
  projectBorderColor?: string;
  projectShadowColor?: string;
  projectBorderColorLight?: string;
  projectBgColorLight?: string;
  projectShadowColorLight?: string;
  projectTitleColor1st?: string;
  projectTitleColor2nd?: string;
  projectTechStack?: IprojectTechStack[];
}

export const ProjectsList: IProject[] = [
  {
    projectId: 1,
    projectImg: img6,
    projectTitle: "Portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "portfolio-thapabishal21tech.vercel.app",
    projectGithub: "/portfolio",
    projectBorderColor: "dark:hover:border-green-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#22c55e]`,
    projectBorderColorLight: "hover:border-green-500",
    projectBgColorLight: "hover:bg-green-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#22c55e]`,
    projectTitleColor1st: "from-green-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },

      {
        techName: "NextJs",
        techImg: <TbBrandNextjs />,
        HoverBorderColor: "hover:border-slate-400",
        hoverBgColor: "hover:bg-slate-200",
      },
      {
        techName: "TypeScript",
        techImg: <SiTypescript />,
        HoverBorderColor: "hover:border-blue-400",
        hoverBgColor: "hover:bg-blue-200",
      },
      {
        techName: "TailwindCSS",
        techImg: <SiTailwindcss />,
        HoverBorderColor: "hover:border-green-400",
        hoverBgColor: "hover:bg-green-200",
      },
    ],
  },
  {
    projectId: 2,
    projectImg: img5,
    projectTitle: "Turnstone-Education",
    projectDescription:
      "Learning Educational website using nextjs,reactjs,sass",
    projectLink: "project-turnstone-thapabishal21tech.vercel.app",
    projectGithub: "/project_turnstone",
    projectBorderColor: "dark:hover:border-blue-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#3b82f6]`,
    projectBorderColorLight: "hover:border-blue-500",
    projectBgColorLight: "hover:bg-blue-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#3b82f6]`,
    projectTitleColor1st: "from-blue-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "SASS",
        techImg: <FaSass />,
        HoverBorderColor: "hover:border-pink-400",
        hoverBgColor: "hover:bg-pink-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },

      {
        techName: "NextJs",
        techImg: <TbBrandNextjs />,
        HoverBorderColor: "hover:border-slate-400",
        hoverBgColor: "hover:bg-slate-200",
      },
      {
        techName: "ReactQuery",
        techImg: <SiReactquery />,
        HoverBorderColor: "hover:border-rose-400",
        hoverBgColor: "hover:bg-pink-200",
      },
      {
        techName: "TypeScript",
        techImg: <SiTypescript />,
        HoverBorderColor: "hover:border-blue-400",
        hoverBgColor: "hover:bg-blue-200",
      },
      {
        techName: "TailwindCSS",
        techImg: <SiTailwindcss />,
        HoverBorderColor: "hover:border-green-400",
        hoverBgColor: "hover:bg-green-200",
      },
    ],
  },
  {
    projectId: 3,
    projectImg: img4,
    projectTitle: "React-Taskapp",
    projectDescription: "crudtask-app",
    projectLink: "thapabishal21tech.github.io/React-task-app",
    projectGithub: "/React-task-app",
    projectBorderColor: "dark:hover:border-cyan-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#06b6d4]`,
    projectBorderColorLight: "hover:border-cyan-500",
    projectBgColorLight: "hover:bg-cyan-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#06b6d4]`,
    projectTitleColor1st: "from-cyan-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },
    ],
  },
  {
    projectId: 4,
    projectImg: img3,
    projectTitle: "Crud-App",
    projectDescription: "fullcrud-task-app",
    projectLink: "thapabishal21tech.github.io/CrudApp_task2",
    projectGithub: "/CrudApp_task2",
    projectBorderColor: "dark:hover:border-violet-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#8b5cf6]`,
    projectBorderColorLight: "hover:border-violet-500",
    projectBgColorLight: "hover:bg-violet-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#8b5cf6]`,
    projectTitleColor1st: "from-violet-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },

      {
        techName: "NextJs",
        techImg: <TbBrandNextjs />,
        HoverBorderColor: "hover:border-slate-400",
        hoverBgColor: "hover:bg-slate-200",
      },
    ],
  },
  {
    projectId: 5,
    projectImg: img1,
    projectTitle: "tailwind-Responsive-Site",
    projectDescription: "full resonsive website",
    projectLink: "thapabishal21tech.github.io/tailwind-responsive-design",
    projectGithub: "/tailwind-responsive-design",
    projectBorderColor: "dark:hover:border-pink-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#ec4899]`,
    projectBorderColorLight: "hover:border-pink-500",
    projectBgColorLight: "hover:bg-pink-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#ec4899]`,
    projectTitleColor1st: "from-pink-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },
      {
        techName: "TypeScript",
        techImg: <SiTypescript />,
        HoverBorderColor: "hover:border-blue-400",
        hoverBgColor: "hover:bg-blue-200",
      },
      {
        techName: "TailwindCSS",
        techImg: <SiTailwindcss />,
        HoverBorderColor: "hover:border-green-400",
        hoverBgColor: "hover:bg-green-200",
      },
    ],
  },
  {
    projectId: 6,
    projectImg: img2,
    projectTitle: "Responsive-Site",
    projectDescription: "responsive site",
    projectLink: "thapabishal21tech.github.io/Responsivewebsite",
    projectGithub: "/Responsivewebsite/tree/gh-pages",
    projectBorderColor: "dark:hover:border-sky-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#0ea5e9]`,
    projectBorderColorLight: "hover:border-sky-500",
    projectBgColorLight: "hover:bg-sky-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#0ea5e9]`,
    projectTitleColor1st: "from-sky-400",
    projectTitleColor2nd: "to-slate-500",
    projectTechStack: [
      {
        techName: "ReactJs",
        techImg: <RiReactjsFill />,
        HoverBorderColor: "hover:border-cyan-400",
        hoverBgColor: "hover:bg-cyan-200",
      },
      {
        techName: "SASS",
        techImg: <FaSass />,
        HoverBorderColor: "hover:border-pink-400",
        hoverBgColor: "hover:bg-pink-200",
      },
      {
        techName: "JavaScript",
        techImg: <IoLogoJavascript />,
        HoverBorderColor: "hover:border-yellow-400",
        hoverBgColor: "hover:bg-yellow-200",
      },
    ],
  },
];

interface IHomePageData {
  fullName: string;
  position: string;
  location: string;
  personalSummary: string;
}

interface IAboutPageData {
  fullName: string;
  position: string;
  location: string;
  personalDetails01: string;
  personalDetails02: string;
  personalDetails03: string;
}

export const HomepageData: IHomePageData = {
  fullName: "BISHAL THAPA",
  position: "React Developer ",
  location: "Kathmandu, Nepal",
  personalSummary:
    "Motivated Junior React Developer with knowledge in JavaScript (ES6), ReactJS , NextJs and many others Frontend Techstack. Dedicated to delivering high-quality, responsive user interfaces and enhancing functionality through API integration. A collaborative team player with a passion for innovative projects and a commitment to continuous skill enhancement in software development.",
};
export const AboutPageData: IAboutPageData = {
  fullName: " Hey I am Bishal Thapa",
  position: "Frontend Developer ",
  location: "from Kathmandu,Nepal",
  personalDetails01: `A passionate Junior React Developer with a solid foundation in
    building dynamic and responsive web applications. Over the past 1
    years , I've honed my skills through immersive internships and
    freelancing projects, where I've had the opportunity to
    contribute to the development of engaging and user-friendly
    websites.`,
  personalDetails02:
    "In my internship experience, I gained hands-on experience in React.js, building efficient components that enhance the overall user experience. Through freelancing, I've further solidified my abilities in creating intuitive user interfaces and ensuring seamless interactions.",

  personalDetails03: ` As I embark on the next step of my journey, I'm excited about
   the prospect of joining a forward-thinking organization where I can
   continue to learn and contribute to impactful projects. Let's
   build something amazing together!`,
};
