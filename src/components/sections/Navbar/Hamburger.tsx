import React from "react";
import { motion } from "motion/react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import type { HamburgerProps } from "@/types";

const Hamburger = ({ isShowSidebar, setIsShowSidebar }: HamburgerProps) => {
  return (
    <motion.div
      onClick={() => setIsShowSidebar((prev) => !prev)}
      className="md:hidden flex items-center justify-center text-slate-800 cursor-pointer p-2 hover:bg-slate-100/50 rounded-lg transition-colors duration-200 select-none"
      whileTap={{ scale: 0.92 }}
      animate={{
        rotate: isShowSidebar ? 180 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.div
        key={isShowSidebar ? "cross" : "hamburger"}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.6 }}
        transition={{ duration: 0.15 }}
      >
        {isShowSidebar ? (
          <RxCross2 className="text-2xl sm:text-3xl dark:text-white" />
        ) : (
          <RxHamburgerMenu className="text-2xl sm:text-3xl dark:text-white" />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Hamburger;
