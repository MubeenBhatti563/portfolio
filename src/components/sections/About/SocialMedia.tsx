import { socialLinks } from "@/constants/socialsLinks";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { IoLogoMedium } from "react-icons/io5";

// Map names directly to their component nodes
const iconMap: Record<string, React.ReactNode> = {
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  Medium: <IoLogoMedium />,
  WhatsApp: <FaWhatsapp />,
};

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4 bg-white dark:bg-dark-bg rounded-lg py-4 px-6 shadow-xl">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.path}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-tertiary hover:-translate-y-1.5 hover:opacity-85 transition-all duration-200 ease-in"
          aria-label={`${link.name} Profile`}
        >
          {iconMap[link.name]}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
