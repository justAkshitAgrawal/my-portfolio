import Link from "next/link";
import { ReactNode } from "react";
import { SpotlightCard } from "./SpotlightCard";
import { GoArrowUpRight } from "react-icons/go";

interface ProjectCardProps {
  project: {
    name: string;
    link: string;
    icon: ReactNode;
    skills: string[];
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      target="_blank"
      href={project.link}
      className="flex items-center md:hover:scale-[1.02] transition-all"
    >
      <SpotlightCard
        from="#1cd1c6"
        //  @ts-ignore
        via="#407cff"
        size={300}
        className="relative mx-auto w-full max-w-2xl rounded-[--radius] bg-white/10 p-4 md:p-8 [--radius:theme(borderRadius.2xl)] border border-zinc-600"
      >
        <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-zinc-800"></div>

        <div className="relative">
          <div className="font-display text-lg font-semibold text-white md:text-2xl flex items-center  justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full p-2 bg-zinc-600">{project.icon}</div>
              <p>{project.name}</p>
            </div>
            <GoArrowUpRight className="text-white h-5 w-5" />
          </div>
          <p className=" flex flex-wrap text-white/60 mt-4">
            {project.skills.map((skill, index) => {
              return (
                <span key={skill} className="mr-1 text-sm">
                  {skill}
                  {index !== project.skills.length - 1 && ","}
                </span>
              );
            })}
          </p>
        </div>
      </SpotlightCard>
    </Link>
  );
};

export default ProjectCard;
