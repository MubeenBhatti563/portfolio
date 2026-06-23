"use client";

import { motion } from "motion/react";
import Navbar from "@/components/sections/Navbar/Navbar";

const SKELETON_COUNT = 8;

const ProjectsLoading = () => {
  return (
    <>
      <Navbar />
      <main className="w-[95%] mx-auto min-h-[70vh] pt-8">
        {/* back link skeleton */}
        <div className="h-4 w-28 rounded bg-slate-200 dark:bg-slate-800 mb-8 animate-pulse" />

        {/* heading skeleton */}
        <div className="flex flex-col gap-4 mb-10">
          <div className="h-10 sm:h-14 lg:h-20 w-48 sm:w-64 lg:w-80 rounded-lg bg-slate-200 dark:bg-slate-800 animate-pulse mx-auto sm:mx-0" />
          <div className="h-5 w-full max-w-md rounded bg-slate-200 dark:bg-slate-800 animate-pulse mx-auto sm:mx-0" />
        </div>

        {/* skeleton card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-16">
          {Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col bg-white dark:bg-dark-bg rounded-xl shadow-md border border-tertiary/20 dark:border-slate-800 overflow-hidden"
            >
              <div className="relative w-full h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 dark:via-white/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="h-5 w-3/4 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="h-3 w-5/6 rounded bg-slate-200 dark:bg-slate-800 animate-pulse" />
                <div className="h-3 w-1/2 rounded bg-tertiary/30 animate-pulse mt-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ProjectsLoading;
