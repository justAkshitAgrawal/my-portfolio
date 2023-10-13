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
    <Link
      href={url}
      target="_blank"
      className={`bg-[#262626] text-white pl-1 pr-2 text-sm py-1 rounded border-[1px] border-zinc-700 whitespace-nowrap + ${className}`}
    >
      <Image
        src={image}
        alt={text}
        width={18}
        height={18}
        className="inline-block mr-1 rounded"
      />
      {text}
    </Link>
  );
};

export default ImageBadge;
