"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 100}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col bg-white dark:bg-dark-bg rounded-xl shadow-md hover:shadow-xl border border-tertiary/30 dark:border-slate-800 overflow-hidden transition-shadow duration-300"
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/40 opacity-100 transition-colors duration-300 [@media(hover:hover)]:bg-black/0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:bg-black/50 [@media(hover:hover)]:group-hover:opacity-100">
          <a
            href={project.source_code}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform duration-200"
          >
            <FaGithub className="text-lg" />
          </a>
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live preview`}
              className="p-3 bg-tertiary rounded-full text-white hover:scale-110 transition-transform duration-200"
            >
              <FaExternalLinkAlt className="text-base" />
            </a>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <h3 className="text-xl font-bold dark:text-dark-text-main">
          {project.title}
        </h3>
        <p className="text-sm text-light-text dark:text-dark-text-sub font-light line-clamp-3 flex-1">
          {project.description}
        </p>
        <p className="text-xs font-medium text-tertiary">{project.tools}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
