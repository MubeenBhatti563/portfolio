import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { projectsData } from "@/constants/projectsData";
import ProjectCard from "./ProjectCard";

const FEATURED_COUNT = 3;

const Projects = () => {
  const featuredProjects = projectsData.slice(0, FEATURED_COUNT);

  return (
    <section id="projects" className="mt-8 mb-16 lg:mb-16">
      <div className="flex gap-4 flex-col" data-aos="fade-up">
        <h2 className="text-3xl flex flex-row justify-center sm:justify-start gap-2 font-extrabold md:text-5xl lg:text-7xl">
          <span className="dark:text-dark-text-main">My</span>
          <span className="text-tertiary">Best</span>
          <span className="dark:text-dark-text-main">Creation</span>
        </h2>
        <p className="text-lg ml-4 text-center sm:text-left md:text-xl lg:text-2xl text-light-text dark:text-dark-text-sub font-light mb-4">
          Designing and Developing Robust and Scalable Web Applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="flex justify-center mt-10" data-aos="fade-up">
        <Link
          href="/projects"
          className="flex items-center gap-2 py-2.5 px-5 cursor-pointer rounded-md text-sm font-bold hover:opacity-90 transition-all duration-300 ease-in bg-tertiary text-white hover:scale-105"
        >
          See more projects <FaArrowRight className="text-xs" />
        </Link>
      </div>
    </section>
  );
};

export default Projects;
