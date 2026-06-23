"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

interface HeroImageProps {
  priority?: boolean;
}

const HeroImage = ({ priority = false }: HeroImageProps) => {
  return (
    // Added a light wrapper padding block to safely hold the outline layout offset area on tablet displays
    <div className="p-10 lg:p-0">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <MotionImage
          src="/professional_portfolio.png"
          alt="Professional portfolio"
          priority={priority}
          width={500}
          height={500}
          className="rounded-full lg:h-80 lg:w-80 h-50 w-50 md:h-70 md:w-70 outline-1 outline-solid outline-gray-400 outline-offset-[2.5rem] grayscale hover:grayscale-0 cursor-pointer object-cover transition-all duration-700 ease-in-out hover:shadow-[0px_0px_50px_16px_rgba(110,6,242,0.73)]"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </div>
  );
};

export default HeroImage;
