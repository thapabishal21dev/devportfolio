// import img1 from "@/public/projectImages/img1.png";
import img1 from "@/public/projectImages/img1.png";
import img2 from "@/public/projectImages/img2.png";
import img3 from "@/public/projectImages/img3.png";
import img4 from "@/public/projectImages/img4.png";
import img5 from "@/public/projectImages/img5.png";
import img6 from "@/public/projectImages/img6.png";
import supabase from "@/public/projectImages/supabase.jpg";
import onlineshop from "@/public/projectImages/onlineshop.png";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactquery } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { SiReacthookform } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
export interface IprojectTechStack {
  techName?: string;
  techImg?: any;
  HoverBorderColor?: string;
  hoverBgColor?: string;
}

export interface IProject {
  params?: string;
  projectId?: number;
  projectImages?: any;
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
  projectAnimate?: string;
}

export const ProjectsList: IProject[] = [
  {
    projectId: 1,
    projectImages: onlineshop,
    projectTitle: "ecommerce",
    projectDescription: "Created ecommerce using Nextjs,Reactjs,tailwindCSS",
    projectLink: "onlinestore24.vercel.app",
    projectGithub: "/ecommerce",
    projectBorderColor: "dark:hover:border-blue-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#3b82f6]`,
    projectBorderColorLight: "hover:border-blue-500",
    projectBgColorLight: "hover:bg-blue-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#3b82f6]`,
    projectTitleColor1st: "from-blue-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:500ms] opacity-0",
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
      {
        techName: "React-Hook-Form",
        techImg: <SiReacthookform />,
        HoverBorderColor: "hover:border-pink-400",
        hoverBgColor: "hover:bg-pink-200",
      },
      {
        techName: "Zod",
        techImg: <SiZod />,
        HoverBorderColor: "hover:border-sky-400",
        hoverBgColor: "hover:bg-sky-200",
      },
    ],
  },
  {
    projectId: 2,
    projectImages: img6,
    projectTitle: "Portfolio",
    projectDescription: "Created Portfolio using Nextjs,Reactjs,tailwindCSS",
    projectLink: "thapabishal.vercel.app",
    projectGithub: "/portfolio",
    projectBorderColor: "dark:hover:border-green-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#22c55e]`,
    projectBorderColorLight: "hover:border-green-500",
    projectBgColorLight: "hover:bg-green-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#22c55e]`,
    projectTitleColor1st: "from-green-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:500ms] opacity-0",
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
    projectId: 3,
    projectImages: img5,
    projectTitle: "Turnstone-Education",
    projectDescription:
      "Learning Educational website using NextJs,ReactJs,SASS",
    projectLink: "/eduturnstone.com/",
    projectGithub: "/project_turnstone",
    projectBorderColor: "dark:hover:border-blue-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#3b82f6]`,
    projectBorderColorLight: "hover:border-blue-500",
    projectBgColorLight: "hover:bg-blue-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#3b82f6]`,
    projectTitleColor1st: "from-blue-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:700ms] opacity-0",

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
    projectId: 4,
    projectImages: img4,
    projectTitle: "React-Taskapp",
    projectDescription: "crudtask-app",
    projectLink: "thapabishal21dev.github.io/React-task-app",
    projectGithub: "/React-task-app",
    projectBorderColor: "dark:hover:border-cyan-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#06b6d4]`,
    projectBorderColorLight: "hover:border-cyan-500",
    projectBgColorLight: "hover:bg-cyan-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#06b6d4]`,
    projectTitleColor1st: "from-cyan-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:900ms] opacity-0",

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
    projectId: 5,
    projectImages: img3,
    projectTitle: "Crud-App",
    projectDescription: "fullcrud-task-app",
    projectLink: "thapabishal21dev.github.io/CrudApp_task2",
    projectGithub: "/CrudApp_task2",
    projectBorderColor: "dark:hover:border-violet-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#8b5cf6]`,
    projectBorderColorLight: "hover:border-violet-500",
    projectBgColorLight: "hover:bg-violet-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#8b5cf6]`,
    projectTitleColor1st: "from-violet-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:1100ms] opacity-0",

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
    projectId: 6,
    projectImages: img1,
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
    projectAnimate: "animate-slidein [--slidein-delay:1300ms] opacity-0",

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
    projectId: 7,
    projectImages: img2,
    projectTitle: "Responsive-Site",
    projectDescription: "responsive site",
    projectLink: "thapabishal21dev.github.io/Responsivewebsite",
    projectGithub: "/Responsivewebsite/tree/gh-pages",
    projectBorderColor: "dark:hover:border-sky-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#0ea5e9]`,
    projectBorderColorLight: "hover:border-sky-500",
    projectBgColorLight: "hover:bg-sky-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#0ea5e9]`,
    projectTitleColor1st: "from-sky-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:1500ms] opacity-0",

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
  {
    projectId: 8,
    projectImages: supabase,
    projectTitle: "supabase-authentication",
    projectDescription: "github & google authentication in supabase",
    projectLink: "supabasepost.vercel.app",
    projectGithub: "/supabaseproject",
    projectBorderColor: "dark:hover:border-sky-500",
    projectShadowColor: `dark:hover:drop-shadow-[0_0_12px_#0ea5e9]`,
    projectBorderColorLight: "hover:border-sky-500",
    projectBgColorLight: "hover:bg-sky-100",
    projectShadowColorLight: `hover:drop-shadow-[0_0_6px_#0ea5e9]`,
    projectTitleColor1st: "from-sky-400",
    projectTitleColor2nd: "to-slate-500",
    projectAnimate: "animate-slidein [--slidein-delay:1500ms] opacity-0",

    projectTechStack: [
      {
        techName: "NextJs",
        techImg: <TbBrandNextjs />,
        HoverBorderColor: "hover:border-slate-400",
        hoverBgColor: "hover:bg-slate-200",
      },
      {
        techName: "supabase",
        techImg: <SiSupabase />,
        HoverBorderColor: "hover:border-green-400",
        hoverBgColor: "hover:bg-green-200",
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
  personalDetails04: string;
}

export const HomepageData: IHomePageData = {
  fullName: "Bishal Thapa",
  position: "Frontend Developer ",
  location: "Kathmandu, Nepal",
  personalSummary: ` Passionate software developer specializing in front-end technologies with 1 and half years of experience
creating visually engaging and user-friendly interfaces. My expertise includes seamlessly integrating UI
elements, ensuring responsive design, optimizing performance for a smooth user experience, and
implementing API integrations. I work proficiently with modern technologies, libraries, and frameworks
such as JavaScript, React, Next.js, TypeScript, and Redux with a solid understanding of front-end
development principles and best practices.`,
};
export const AboutPageData: IAboutPageData = {
  fullName: " Hey there! I'm Bishal Thapa",
  position: "Frontend Developer ",
  location: "from Kathmandu,Nepal",
  personalDetails01: `I am a passionate software developer specializing in front-end technologies with one and half years of experience creating visually engaging and user-friendly interfaces. My expertise lies in seamlessly integrating UI elements, ensuring responsive design, optimizing performance for smooth user experiences, and implementing API integrations.

`,
  personalDetails02: `
   Currently, I am focused on building high-quality, scalable, and accessible web applications, leveraging modern tools and frameworks like JavaScript, React, Next.js, TypeScript, and Redux. I bring a solid understanding of front-end development principles and best practices, ensuring that every project I contribute to meets the best standards of usability and performance.
`,

  personalDetails03: ` Beyond my technical skills, I am deeply committed to self-improvement and personal growth. I believe in the power of continuous learning and strive to grow both professionally and personally.  
  `,
  personalDetails04: `
`,
};
