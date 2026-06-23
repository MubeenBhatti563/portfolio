"use client";
import { skills } from "@/constants/skills";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const Skills = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === "dark";

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-[88.5vh] mt-4"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl text-center sm:text-left text-tertiary font-extrabold md:text-5xl lg:text-7xl">
          Skills
        </h2>
        <p className="text-lg ml-4 text-center sm:text-left md:text-xl lg:text-2xl text-light-text dark:text-dark-text-sub font-light mb-4">
          Tools and frameworks I use to bring ideas to life
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
        {skills.map((skill) => {
          const activeIconSrc =
            mounted && isDark && skill.darkIconPath
              ? skill.darkIconPath
              : skill.iconPath;
          return (
            <div
              key={skill.slug}
              className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-dark-bg rounded-xl shadow-md hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 ease-in-out border border-tertiary dark:border-slate-800"
            >
              <Image
                src={activeIconSrc}
                width={48}
                height={48}
                alt={`${skill.name} icon`}
                className="object-contain h-auto group-hover:scale-110 transition-transform duration-200"
              />
              <span className="mt-4 font-medium text-sm md:text-base text-light-text dark:text-dark-text-main">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
