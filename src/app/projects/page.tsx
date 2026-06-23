import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { projectsData } from "@/constants/projectsData";
import ProjectCard from "@/components/sections/Projects/ProjectCard";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "Browse all of Mubeen's full-stack development projects — React, Next.js, NestJS and Node.js apps including a news app, weather app, e-commerce site and more.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "All Projects | Mubeen",
    description: "Browse all of Mubeen's full-stack development projects.",
    url: "/projects",
  },
};

const AllProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main className="w-[95%] mx-auto min-h-[70vh] pt-8" id="projects">
        <Link
          href="/"
          data-aos="fade-right"
          className="inline-flex items-center gap-2 text-sm font-bold text-tertiary hover:opacity-80 transition-opacity duration-200 mb-8"
        >
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>

        <div className="flex flex-col gap-4 mb-10" data-aos="fade-up">
          <h1 className="text-3xl flex flex-row justify-center sm:justify-start gap-2 font-extrabold md:text-5xl lg:text-7xl">
            <span className="text-tertiary">All</span>
            <span className="dark:text-dark-text-main">Projects</span>
          </h1>
          <p className="text-lg text-center sm:text-left md:text-xl lg:text-2xl text-light-text dark:text-dark-text-sub font-light">
            A complete collection of things I&apos;ve built and shipped.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AllProjectsPage;
