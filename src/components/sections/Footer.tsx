"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { socialLinks } from "@/constants/socialsLinks";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";

const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Medium: <IoLogoMedium />,
  WhatsApp: <FaWhatsapp />,
};

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Projects", path: "/#projects" },
  { name: "Skills", path: "/#skills" },
  { name: "Contact", path: "/#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full mt-16 border-t border-tertiary/20 dark:border-slate-800">
      <div className="w-[95%] mx-auto py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <span className="text-2xl font-extrabold">
              <span className="text-tertiary">Mubeen</span>
              <span className="dark:text-dark-text-main">.dev</span>
            </span>
            <p className="text-sm text-light-text dark:text-dark-text-sub font-light max-w-xs">
              Full-stack developer crafting scalable, high-performance web
              applications.
            </p>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm font-medium">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  className="hover:text-tertiary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.name} Profile`}
                className="text-xl text-tertiary hover:-translate-y-1 hover:opacity-85 transition-all duration-200 ease-in"
              >
                {iconMap[link.name]}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6 border-t border-tertiary/10 dark:border-slate-800">
          <p className="text-xs text-light-text dark:text-dark-text-sub font-light">
            © {year} Mubeen. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-tertiary text-white shadow-md hover:opacity-90 transition-opacity duration-200"
          >
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
