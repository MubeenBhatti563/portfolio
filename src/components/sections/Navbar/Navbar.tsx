"use client";
import { useEffect, useState } from "react";
import ParticleAnimation from "@/components/ui/ParticleAnimation";
import Hamburger from "./Hamburger";
import NavLinks from "./NavLinks";
import LogoName from "./LogoName";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="z-50 top-0 sticky w-full dark:bg-dark-bg md:py-1 lg:py-2">
      <div
        className={`absolute inset-0 -z-10 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white/70 dark:bg-dark-bg/70 backdrop-blur-[11px] shadow-[0px_10px_15px_-5px_rgba(0,0,0,0.3)]"
            : "bg-white dark:bg-dark-bg"
        }`}
      />
      <ParticleAnimation direction="left-right" />
      <div className="flex items-center justify-between w-[95%] mx-auto">
        <LogoName />
        <NavLinks
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />
        <Hamburger
          isShowSidebar={isShowSidebar}
          setIsShowSidebar={setIsShowSidebar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
