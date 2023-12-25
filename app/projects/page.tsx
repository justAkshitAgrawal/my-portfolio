import ProjectCard from "@/components/ProjectCard";
import { SiReddit, SiX } from "react-icons/si";
import { TbBrandLinktree } from "react-icons/tb";
import { MdElectricBike } from "react-icons/md";
import { AiTwotoneShop } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Akshit Agrawal",
  description: "Software Engineer | Full Stack Developer",
};

const ProjectsPage = () => {
  const projects = [
    {
      name: "Tweeter",
      link: "https://tweeter-flax.vercel.app/",
      icon: <SiX className="h-8 w-8 text-white rounded-full" />,
      skills: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    },
    {
      name: "Reddit Clone",
      link: "https://reddit-clone-theta-eight.vercel.app/",
      icon: (
        <SiReddit className="h-8 w-8 text-[#ff4500] bg-white rounded-full" />
      ),
      skills: ["React", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    },
    {
      name: "LinkMe",
      link: "https://link-me-gules.vercel.app/",
      icon: <TbBrandLinktree className="h-8 w-8 text-green-400" />,
      skills: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    },
    {
      name: "Electric City",
      link: "https://bike-rental-pi.vercel.app/",
      icon: <MdElectricBike className="h-8 w-8 text-yellow-400" />,
      skills: ["React", "Next.js", "JavaScript", "Firebase", "Tailwind CSS"],
    },
    {
      name: "eCommerce Store",
      link: "https://e-commerce-app-kappa-two.vercel.app/",
      icon: <AiTwotoneShop className="h-8 w-8 text-blue-400" />,
      skills: ["React", "JavaScript", "Recoil", "Firebase", "Tailwind CSS"],
    },
    {
      name: "TaskMaster",
      link: "https://task-master-omega.vercel.app/",
      icon: <GoTasklist className="h-8 w-8 text-white" />,
      skills: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    },
  ];

  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl w-full">
      <h1 className="mt-14 md:mt-10 font-semibold text-2xl">{`my projects`}</h1>
      <div className="grid grid-cols-1 mt-8 gap-4 md:gap-6">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
