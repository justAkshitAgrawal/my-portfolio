import ImageBadge from "@/components/ImageBadge";
import SkillBadge from "@/components/SkillBadge";
import { SpotlightCard } from "@/components/SpotlightCard";
import akshit from "@/images/akshit.jpg";
import basketball from "@/images/basketball.avif";
import harness from "@/images/harness.png";
import javascript from "@/images/javascript.png";
import mountain from "@/images/mountain.jpg";
import setup from "@/images/setup.jpg";
import clsx from "clsx";
import Image from "next/image";

import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import Link from "next/link";
import SocialLink from "@/components/SocialLink";

const Home = () => {
  const masonry = [
    {
      image: akshit,
      index: 1,
      extra: false,
    },
    {
      image: mountain,
      index: 2,
      extra: true,
    },
    {
      image: basketball,
      index: 3,
      extra: true,
    },
    {
      image: setup,
      index: 4,
      extra: false,
    },
  ];

  const skills = [
    {
      name: "React",
      icon: <FaReact className="h-5 w-5 text-blue-400" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="h-5 w-5 text-white" />,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript className="h-5 w-5 text-blue-400" />,
    },
    {
      name: "Prisma",
      icon: <SiPrisma className="h-5 w-5 text-green-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="h-5 w-5 text-blue-400" />,
    },
  ];

  const socials = [
    {
      name: "follow me",
      url: "https://twitter.com/justAkshitAgrwl",
    },
    {
      name: "connect with me",
      url: "https://www.linkedin.com/in/akshitagrwl/",
    },
    {
      name: "star my repos",
      url: "https://github.com/justAkshitAgrawal",
    },
  ];

  return (
    <div className="mt-5 px-6 pb-10">
      <h1 className="mt-14 font-semibold text-2xl">{`hey, I'm akshit 👋`}</h1>
      <p className="mt-10 text-sm text-white/80 leading-7">
        I&apos;m a full-stack software engineer and a full time code comedian. I
        am currently working as an SDE Intern at
        <ImageBadge
          text="Harness"
          image={harness}
          url="https://harness.io/"
          className="ml-2"
        />
        , where I am working in the Eco-System team, developing plugins for
        CI/CD integrations with{" "}
        <ImageBadge
          text="JavaScipt"
          image={javascript}
          url="#"
          className="ml-1"
        />
        .
      </p>

      <div className="flex flex-col max-h-[50vh] max-[380px]:max-h-[60vh] max-[380px]:gap-x-2 items-center flex-wrap mt-8 gap-y-2 ">
        {masonry.map((item) => {
          return (
            <SpotlightCard
              key={item.index}
              mode="after"
              from="rgba(255,255,255,0.20)"
              size={400}
              className={clsx(
                `group h-fit w-40 rounded-2xl border border-white/10 bg-white/5 p-2`
              )}
            >
              <div className="relative">
                <Image
                  className={clsx(
                    "absolute inset-0 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",
                    item.extra ? "h-52 w-40" : "h-36 w-40 "
                  )}
                  src={item.image}
                  alt=""
                />

                <Image
                  className={clsx(
                    "relative h-36 w-36 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0",
                    item.extra ? "h-52 w-40" : "h-36 w-40 "
                  )}
                  src={item.image}
                  alt=""
                />
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <p className="mt-10 text-sm text-white/80 leading-7">
        I create modern web applications using that are so beautiful that they
        make you cry. I ship my apps using the following stack:
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <SkillBadge key={skill.name} icon={skill.icon} text={skill.name} />
          );
        })}
      </div>

      <p className="mt-10 text-sm text-white/80 leading-7">
        I have also worked with{" "}
        <Link
          className=" underline underline-offset-4 text-white/90"
          href={"https://www.lumoslabs.co/"}
          target="_blank"
        >
          Lumos Labs
        </Link>
        ,{" "}
        <Link
          className=" underline underline-offset-4 text-white/90"
          href={"https://scrollify.in/"}
          target="_blank"
        >
          Scrollify
        </Link>{" "}
        and a few other startups in the past.
      </p>

      <div className="mt-8 flex flex-col gap-4">
        {socials.map((social) => {
          return <SocialLink key={social.name} {...social} />;
        })}
      </div>
    </div>
  );
};

export default Home;