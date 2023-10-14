"use client";

import clsx from "clsx";

import { Navigation } from "@/components/Navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const items = [
    {
      label: "home",
      href: "/",
    },
    {
      label: "projects",
      href: "/projects",
    },
    {
      label: "guestbook",
      href: "/guestbook",
    },
  ];

  const pathname = usePathname();

  function navigate() {
    // the callback is fired once the animation is completed
    // to allow smooth transition
  }

  return (
    <div className="flex pt-14 justify-start pl-6 md:pl-0">
      <Navigation as="nav" className="relative rounded-2xl ">
        {({
          ready,
          size,
          position,
          duration,
        }: {
          ready: boolean;
          size: number;
          position: number;
          duration: number;
        }) => (
          <div className="relative">
            <div
              style={{
                // @ts-ignore
                "--size": size,
                "--position": position,
                "--duration": duration,
              }}
              className={clsx(
                { hidden: !ready },
                "absolute inset-y-0 left-0 h-full w-[--size] translate-x-[--position] rounded-lg bg-white/10 transition-[width,transform] duration-[--duration]"
              )}
            />

            <Navigation.List
              as="ul"
              className="relative flex items-center md:gap-3"
            >
              {items.map((item, index) => (
                <Navigation.Item
                  key={index}
                  as="li"
                  onActivated={navigate}
                  active={pathname == item.href}
                  className=""
                >
                  {({
                    setActive,
                    isActive,
                  }: {
                    setActive: () => void;
                    isActive: boolean;
                  }) => (
                    <Link
                      onClick={() => {
                        setActive();
                      }}
                      href={item.href}
                      className={clsx(
                        pathname == item.href
                          ? "text-white"
                          : "text-white/60 hover:text-white",
                        "inline-block px-3 md:px-4 py-1 text-sm transition"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </Navigation.Item>
              ))}
            </Navigation.List>
          </div>
        )}
      </Navigation>
    </div>
  );
}
