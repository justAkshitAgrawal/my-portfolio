import ImageBadge from "@/components/ImageBadge";
import SkillBadge from "@/components/SkillBadge";
import { SpotlightCard } from "@/components/SpotlightCard";
import akshit from "@/images/akshit.jpeg";
import basketball from "@/images/basketball.avif";
import harness from "@/images/harness.png";
import javascript from "@/images/javascript.png";
import mountain from "@/images/mountain.jpg";
import setup from "@/images/setup.jpg";
import clsx from "clsx";
import Image from "next/image";

import SocialLink from "@/components/SocialLink";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";
import { Meteors } from "@/components/meteors";

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
      icon: <SiPrisma className="h-5 w-5 text-white" />,
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
    {
      name: "send me an email",
      url: "mailto:me@akshitagrawal.dev",
    },
  ];

  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl relative">
      <h1 className="mt-14 md:mt-10 font-semibold text-2xl">{`hey, I'm akshit 👋`}</h1>
      <Meteors className="max-md:hidden" number={15} />
      <p className="mt-10 text-sm md:text-base md:leading-8 text-white/80 leading-7">
        I&apos;m a full-stack software engineer, developing any web app that
        crosses my mind. I am currently working as an SDE Intern{" "}
        <span className="inline-flex w-fit items-center">
          at
          <ImageBadge
            text="Harness"
            image={harness}
            url="https://harness.io/"
            className="ml-2 mr-2"
          />
          where
        </span>
        {` `}I am working in the Eco-System team, developing plugins for CI/CD
        integrations
        {/* <ImageBadge
          text="JavaScipt"
          image={javascript}
          url="#"
          className="ml-1"
        /> */}
        {` `}and working on core integrations.
      </p>{" "}
      <div className="flex flex-col min-h-fit max-h-[60vh] md:max-h-[90vh] max-[380px]:max-h-[80vh] max-[380px]:gap-x-2 items-center flex-wrap mt-8 gap-y-2 md:gap-2 md:mr-10">
        {masonry.map((item) => {
          return (
            <SpotlightCard
              key={item.index}
              mode="after"
              from="rgba(255,255,255,0.20)"
              size={500}
              className={clsx(
                `group h-fit w-40 md:w-[50%] rounded-2xl border border-white/10 bg-white/5 p-2`
              )}
            >
              <div className="relative glow:text-glow/50">
                <Image
                  className={clsx(
                    "absolute inset-0 scale-110 rounded-xl object-cover blur-xl md:grayscale  transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0",
                    item.extra
                      ? "h-52 md:h-80 w-40 md:w-full"
                      : "h-36 md:h-52 w-40 md:w-full"
                  )}
                  src={item.image}
                  alt=""
                />

                <Image
                  className={clsx(
                    "relative h-36 w-36 rounded-xl object-cover  transition-all duration-300 group-hover:grayscale-0",
                    item.extra
                      ? "h-52 md:h-80 w-40 md:w-full"
                      : "h-36 md:h-52 w-40 md:w-full"
                  )}
                  src={item.image}
                  alt=""
                />
              </div>
            </SpotlightCard>
          );
        })}
      </div>
      <p className="mt-10 text-sm text-white/80 leading-7 md:text-base md:leading-8">
        I create modern web applications that are so beautiful that they make
        you cry (tears of joy, of course). I ship my apps using the following
        stack:
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => {
          return (
            <SkillBadge key={skill.name} icon={skill.icon} text={skill.name} />
          );
        })}
      </div>
      <p className="mt-10 text-sm text-white/80 leading-7 md:text-base md:leading-8">
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
