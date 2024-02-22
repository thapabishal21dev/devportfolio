import { IconsList } from "../lib/icons";
import Techstack from "../techstack";

const Technology = () => {
  return (
    <div className="flex h-auto justify-center  overflow-hidden ">
      <div className=" w-[780px] h-screen mt-12 dark:text-white md:w-[650px]  px-4 sm:w-full  ">
        <div className="">
          <h1 className="animate-slidein [--slidein-delay:300ms] opacity-0 text-2xl py-5 bg-gradient-to-r from-[#00c8ff] to-[#00ff80] inline-block text-transparent bg-clip-text font-bold">
            Skills
          </h1>
        </div>
        <div className="  flex flex-row flex-wrap gap-4 py-4 ">
          <Techstack
            techName={"TypeScript"}
            techImg={<IconsList.typescriptIcon />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
            slideClass="animate-slidein [--slidein-delay:500ms] opacity-0"
          />
          <Techstack
            techName={"ReactJs"}
            techImg={<IconsList.reactIcon />}
            HoverBorderColor="hover:border-cyan-400"
            hoverBgColor="hover:bg-cyan-200"
            slideClass="animate-slidein [--slidein-delay:700ms] opacity-0"
          />
          <Techstack
            techName={"NextJs"}
            techImg={<IconsList.nextjsIcon />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
            slideClass="animate-slidein [--slidein-delay:900ms] opacity-0"
          />
          <Techstack
            techName={"TailwindCSS"}
            techImg={<IconsList.tailwindcssIcon />}
            HoverBorderColor="hover:border-blue-400"
            hoverBgColor="hover:bg-blue-200"
            slideClass="animate-slidein [--slidein-delay:1100ms] opacity-0"
          />
          <Techstack
            techName="JavaScript"
            techImg={<IconsList.javascriptIcon />}
            HoverBorderColor="hover:border-[#F0DB4F]"
            hoverBgColor="hover:bg-[#F0DB4F]"
            slideClass="animate-slidein [--slidein-delay:1300ms] opacity-0"
          />
          <Techstack
            techName="Redux"
            techImg={<IconsList.reduxIcon />}
            HoverBorderColor="hover:border-[#764abc]"
            hoverBgColor="hover:bg-[#764abc]"
            slideClass="animate-slidein [--slidein-delay:1500ms] opacity-0"
          />
          <Techstack
            techName="SASS"
            techImg={<IconsList.sassIcon />}
            HoverBorderColor="hover:border-[#cc6699]"
            hoverBgColor="hover:bg-[#cc6699]"
            slideClass="animate-slidein [--slidein-delay:1700ms] opacity-0"
          />
          <Techstack
            techName="GitHub"
            techImg={<IconsList.githubIcon />}
            HoverBorderColor="hover:border-slate-400"
            hoverBgColor="hover:bg-slate-100"
            slideClass="animate-slidein [--slidein-delay:1900ms] opacity-0"
          />{" "}
          <Techstack
            techName="Figma"
            techImg={<IconsList.figmaIcon />}
            HoverBorderColor="hover:border-violet-400"
            hoverBgColor="hover:bg-violet-200"
            slideClass="animate-slidein [--slidein-delay:2100ms] opacity-0"
          />
          <Techstack
            techName="Git"
            techImg={<IconsList.gitIcon />}
            HoverBorderColor="hover:border-[#f14e32]"
            hoverBgColor="hover:bg-[#f14e32]"
            slideClass="animate-slidein [--slidein-delay:2300ms] opacity-0"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Technology;
