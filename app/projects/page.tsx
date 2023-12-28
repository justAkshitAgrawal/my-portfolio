import ProjectCard from "@/components/ProjectCard";
import tweeter from "@/images/tweeter.png";
import reddit from "@/images/reddit.png";
import linkme from "@/images/linkMe.png";
import ecity from "@/images/ecity.png";
import amp from "@/images/amp.png";
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
      skills: ["React", "Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
      imageSrc: tweeter,
    },
    {
      name: "Reddit Clone",
      link: "https://reddit-clone-theta-eight.vercel.app/",
      imageSrc: reddit,
      skills: ["React", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    },
    {
      name: "LinkMe",
      link: "https://link-me-gules.vercel.app/",
      imageSrc: linkme,
      skills: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    },
    {
      name: "Electric City",
      link: "https://bike-rental-pi.vercel.app/",
      imageSrc: ecity,
      skills: ["React", "Next.js", "JavaScript", "Firebase", "Tailwind CSS"],
    },
    // {
    //   name: "eCommerce Store",
    //   link: "https://e-commerce-app-kappa-two.vercel.app/",
    //   imageSrc: amp,
    //   skills: ["React", "JavaScript", "Recoil", "Firebase", "Tailwind CSS"],
    // },
  ];

  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl w-full">
      <h1 className="mt-14 md:mt-10 font-semibold text-2xl">{`my projects`}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 mt-8">
        {projects.map((project) => {
          return <ProjectCard key={project.name} project={project} />;
        })}
      </div>
    </div>
  );
};

export default ProjectsPage;
