import Link from "next/link";

const workHistory = [
  {
    company: "Harness",
    role: "Software Engineer",
    date: "2023 - Present",
    divider: true,
    description: (
      <div className="text-white/60 text-sm">
        <p>
          I joined Harness as an SDE Intern in October 2023. I was a part of the
          Eco-system team, developing plugins for the CI module and working on
          different integrations. Some plugins I worked on include:
          <ul className="list-disc ml-8 text-white/80 mt-1	hover:underline">
            <li>
              <Link
                href={"https://github.com/harness-community/drone-gcp-oidc"}
                target="_blank"
                className="group inline-block"
              >
                gcp-oidc
                <div className="bg-amber-500 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://github.com/harness-community/drone-docker-image-migration"
                }
                target="_blank"
                className="group inline-block"
              >
                image-migration
                <div className="bg-amber-500 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
            <li>
              <Link
                href={
                  "https://github.com/harness-community/drone-helm-chart-container-registry"
                }
                target="_blank"
                className="group inline-block"
              >
                helm-registry
                <div className="bg-amber-500 h-[1px] w-0 group-hover:w-full transition-all duration-500"></div>
              </Link>
            </li>
          </ul>
        </p>
        <p className="mt-4">
          In June 2024, I got converted to a full-time software engineer and
          joined the SEI team. I am currently working on integrating new
          services into the SEI platform, which include{" "}
          <span className="text-white/80">Rally</span>,{" "}
          <span className="text-white/80">ServiceNow</span>, and more.
        </p>
      </div>
    ),
  },
  {
    company: "Lumos Labs",
    role: "Frontend Developer Intern",
    date: "2023",
    divider: true,
    description: (
      <p className="text-white/60 text-sm">
        At Lumos, I worked on developing a Web3 academy, free for everyone, to
        learn about blockchain and Web3 technologies. I was responsible for
        developing the frontend of the academy using React and Next.js.
      </p>
    ),
  },
  {
    company: "Scrollify",
    role: "Frontend Developer Intern",
    date: "2023",
    divider: true,
    description: (
      <p className="text-white/60 text-sm">
        At Scrollify, I developed a platform for working professionals to easily
        create and share their portfolios. The platform allowed users to create
        a portfolio with a custom domain, and share it with others.
      </p>
    ),
  },
  {
    company: "Jobs Territory",
    role: "Frontend Developer Intern",
    date: "2022",
    divider: false,
    description: (
      <p className="text-white/60 text-sm">
        At Jobs Territory, I worked on developing a job portal for job seekers
        and recruiters. I also worked on developing an ATS for recruiters to
        manage their hiring process.
      </p>
    ),
  },
];

const Work = () => {
  return (
    <div className="mt-5 px-6 md:px-0 pb-10 md:max-w-2xl relative w-full">
      <h1 className="mt-14 md:mt-10 font-semibold text-2xl mb-4">my work</h1>
      <p className="text-white/60 text-sm mb-7">
        On a mission to build products that make a difference. Here&apos;s a
        summary of my work so far.
      </p>
      <div className="mt-5">
        {workHistory.map((work) => (
          <div key={work.company} className="mt-5">
            <h2 className=" font-bold">{work.company}</h2>
            <p className="text-sm mb-4 text-gray-500 mt-1">
              {work.role}, <span>{work.date}</span>
            </p>
            {work.description}
            {work.divider && (
              <div className="border-b border-[#2f2f2f] mt-5"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
