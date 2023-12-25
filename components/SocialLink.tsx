import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink = ({ name, url }: SocialLinkProps) => {
  return (
    <Link href={url} target="_blank" className="flex gap-1 items-end w-fit">
      <GoArrowUpRight className="text-white h-5 w-5" />
      <p className="hover:underline underline-offset-4 transition-all">
        {name}
      </p>
    </Link>
  );
};

export default SocialLink;
