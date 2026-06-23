import ParticleAnimation from "@/components/ui/ParticleAnimation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { NavLinksProps } from "@/types";
import ToggleButton from "@/components/ui/ToggleButton";
import { useTheme } from "next-themes";
import useActiveSection from "@/hooks/useActiveSection";

const navLinks = [
  { name: "Home", id: "hero", path: "/" },
  { name: "About", id: "about", path: "/#about" },
  { name: "Projects", id: "projects", path: "/#projects" },
  { name: "Skills", id: "skills", path: "/#skills" },
  { name: "Contact", id: "contact", path: "/#contact" },
];

const NavLinks = ({ isShowSidebar, setIsShowSidebar }: NavLinksProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const activeSection = useActiveSection([
    "hero",
    "about",
    "projects",
    "skills",
    "contact",
  ]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const isDark = theme === "dark";

  return (
    <ul
      className={`fixed md:static ${
        isShowSidebar ? "translate-x-0" : "translate-x-[102%]"
      } md:translate-x-0 top-10 sm:top-11.5 right-0 h-[calc(100dvh-2.5rem)] md:h-auto w-[70vw] sm:w-[40vw] md:w-auto flex flex-col md:flex-row px-0.5 md:px-0 gap-1 md:gap-6 lg:gap-8 font-normal md:font-medium xl:text-lg sm:text-[1rem] md:items-center transition-all duration-300 ease-in-out md:bg-transparent backdrop-blur-[11px] md:backdrop-blur-none rounded-sm md:rounded-none md:shadow-none shadow-[-10px_0px_15px_-5px_rgba(0,0,0,0.3)] dark:bg-dark-bg lg:dark:bg-transparent`}
    >
      {isShowSidebar && <ParticleAnimation direction="top-down" />}
      {navLinks.map((link) => {
        const isActive = activeSection === link.id;
        return (
          <li key={link.id} className="w-full md:w-auto">
            <Link
              href={link.path}
              onClick={() => setIsShowSidebar(false)}
              className={`${isActive ? "active" : ""} block md:w-auto py-3 px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-slate-200 hover:text-primary`}
            >
              {link.name}
            </Link>
          </li>
        );
      })}
      <li>
        <div className="flex items-center justify-between md:block pl-4 md:pl-0">
          <span className="md:hidden">
            {mounted ? (isDark ? "Dark Mode" : "Light Mode") : "Theme"}
          </span>
          <ToggleButton setIsShowSidebar={setIsShowSidebar} mounted={mounted} />
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;
