"use client";

import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink = ({ name, url }: SocialLinkProps) => {
  return (
    <Link
      href={url}
      target="_blank"
      className="flex gap-2 items-end w-fit group"
    >
      <GoArrowUpRight className="text-white h-5 w-5" />
      <div className=" inline-block">
        <p>{name}</p>
        <div className="bg-amber-500 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </Link>
  );
};

export default SocialLink;
