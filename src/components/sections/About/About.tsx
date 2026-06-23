import React from "react";
import HeroImage from "../Hero/HeroImage";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import SocialMedia from "./SocialMedia";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col gap-12 lg:gap-0 items-center lg:flex-row justify-between min-h-[88.5vh] lg:pl-12 mt-16 lg:mt-0"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      {/* LEFT COLUMN: Image & Social Dock */}
      <div className="flex flex-col items-center gap-14">
        <HeroImage />
        {/* Social Accounts Container */}
        <SocialMedia />
      </div>

      {/* RIGHT COLUMN: Content Text Block */}
      <div className="w-[98%] mx-auto lg:mx-0 lg:w-[60%] flex flex-col gap-6 md:gap-4 lg:gap-2 text-center items-center sm:text-left sm:items-start">
        <h2 className="text-3xl flex flex-row justify-center sm:justify-start gap-2 font-extrabold md:text-5xl lg:text-7xl">
          <span className="text-tertiary">About</span>
          <span className="dark:text-dark-text-main">Me</span>
        </h2>

        <p className="text-[1.1rem] md:text-xl text-light-text dark:text-dark-text-sub font-light">
          I am a Software Engineering student focused on building modern,
          scalable full-stack web applications using the TypeScript ecosystem.
          My core strengths lie in React and its ecosystem, where I build
          responsive and interactive user interfaces using tools like React
          Router, Context API, Redux Toolkit, and custom hooks. I also work with
          backend fundamentals using Node.js and NestJS, and I am actively
          expanding into full-stack architectures with Next.js and modern
          backend tools like Prisma.
        </p>

        <p className="text-[1.1rem] md:text-xl text-light-text dark:text-dark-text-sub font-light">
          Rather than just building UI features, I focus on application
          structure, state management, API integration, and clean code design
          principles. I also experiment with tools like Docker to understand how
          applications are deployed and managed in real-world environments. I
          enjoy learning how production-grade systems are built and continuously
          improve my skills by working on real-world inspired projects.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center sm:justify-start gap-4 mt-2">
          <Link
            href="/projects"
            className="py-1.5 px-3 lg:py-2.5 lg:px-4 bg-tertiary cursor-pointer rounded-md text-white text-sm font-bold hover:opacity-90 transition-all duration-300 ease-in"
          >
            My Projects
          </Link>

          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-1.5 flex gap-2 items-center px-3 lg:py-2.5 lg:px-4 border cursor-pointer rounded-md text-sm font-bold hover:opacity-90 transition-all duration-300 ease-in hover:text-white hover:bg-gray-900 hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            <FaDownload className="text-xs" /> <span>Download CV</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
