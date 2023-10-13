import { ReactNode } from "react";

interface SkillBadgeProps {
  icon: ReactNode;
  text: string;
}

const SkillBadge = ({ icon, text }: SkillBadgeProps) => {
  return (
    <div className="flex items-center gap-2 bg-[#262626] w-fit px-2 py-1 rounded border-[1px] border-gray-600 text-sm ">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SkillBadge;
