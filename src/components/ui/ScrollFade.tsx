"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollFadeProps {
  children: React.ReactNode;
}

export default function ScrollFade({ children }: ScrollFadeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -20]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className="w-full overflow-hidden"
    >
      {children}
    </motion.div>
  );
}
