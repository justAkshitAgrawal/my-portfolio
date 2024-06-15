import ImageBadge from "@/components/ImageBadge";
import SkillBadge from "@/components/SkillBadge";
import akshit from "@/images/akshit.jpeg";
import basketball from "@/images/basketball.avif";
import harness from "@/images/harness.png";
import setup from "@/images/setup.jpg";
import gt from "@/images/gt.jpg";
import Image, { StaticImageData } from "next/image";
import SocialLink from "@/components/SocialLink";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiTailwindcss, SiSolid } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Meteors } from "@/components/meteors";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";

const Home = () => {
  const items = [
    {
      header: getImage(akshit),
      className: "md:col-span-2",
    },
    {
      header: getImage(basketball),
      className: "md:col-span-1 max-sm:hidden",
    },
    {
      header: getImage(gt),
      className: "md:col-span-1 max-sm:hidden",
    },
    {
      header: getImage(setup),
      className: "md:col-span-2 max-sm:hidden",
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
      name: "Solid",
      icon: <SiSolid className="h-5 w-5 text-blue-200" />,
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
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion className="h-5 w-5 text-white" />,
    },
  ];

  const socials = [
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
      <h1 className="mt-14 md:mt-10 font-semibold text-2xl">{`hey, I'm akshit`}</h1>
      <Meteors className="max-md:hidden" number={15} />
      <p className="mt-10 text-sm md:text-base md:leading-8 text-white/80 leading-7">
        I&apos;m a full-stack software engineer, developing any web app that
        crosses my mind. I am currently working as a Software Engineer{" "}
        <span className="inline-flex w-fit items-center">
          at
          <ImageBadge
            text="Harness"
            image={harness}
            url="https://harness.io/"
            className="ml-2 mr-2"
          />
          in
        </span>
        {` `}the SEI team.
      </p>{" "}
      <div className="flex flex-col min-h-fit max-h-[60vh] md:max-h-[90vh] max-[380px]:max-h-[80vh] max-[380px]:gap-x-2 items-center flex-wrap mt-8 gap-y-2 md:gap-2 md:mr-10">
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              header={item.header}
              className={item.className}
            />
          ))}
        </BentoGrid>
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

const getImage = (image: StaticImageData) => {
  return (
    <Image
      src={image}
      alt=""
      className="rounded-2xl object-cover h-full w-full z-20"
    />
  );
};

export default Home;
