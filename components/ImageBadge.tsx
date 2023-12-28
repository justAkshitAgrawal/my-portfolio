import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ImageBadgeProps {
  text: string;
  image: StaticImageData;
  url: string;
  className?: string;
}

const ImageBadge = ({ text, image, url, className }: ImageBadgeProps) => {
  return (
    <Link href={url} target="_blank" className={`  ${className}`}>
      <div className="group relative inline-flex items-center overflow-hidden rounded-full bg-zinc-800 py-2 pl-2 pr-2 transition">
        <div className="absolute inset-0 flex items-center [container-type:inline-size]">
          <div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(255,255,255,0.5)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.5)_360deg)] transition duration-300 [animation-duration:3s] opacity-100"></div>
        </div>

        <div className="absolute inset-0.5 rounded-full bg-zinc-900"></div>

        <div className="absolute bottom-0 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-white/10 blur-md transition-all duration-500 h-2/3 opacity-100"></div>
        <Image
          src={image}
          alt={text}
          width={18}
          height={18}
          className="inline-block mr-1 rounded relative z-50"
        />
        <span className="relative mt-px bg-gradient-to-b from-white/75 to-white bg-clip-text text-xs  text-transparent ">
          {text}
        </span>
      </div>
    </Link>
  );
};

export default ImageBadge;
