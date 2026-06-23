import { Dispatch, SetStateAction } from "react";

// Here is interfaces of my entire projects

// Interface for ParticleAnimation props
export interface ParticleAnimationProps {
  direction: "top-down" | "left-right";
}

// Define the internal structure of a single particle
export interface ParticleType {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: number;
  delay: number;
}

// Interface for HamburgerProps
export interface HamburgerProps {
  isShowSidebar: boolean;
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
}

// Interface for NavLinksProps
export interface NavLinksProps {
  isShowSidebar: boolean;
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
}

// ToggleButtonProps interface
export interface ToggleButtonProps {
  setIsShowSidebar: Dispatch<SetStateAction<boolean>>;
  mounted: boolean;
}

// Projects Interface
export interface Project {
  id: number;
  title: string;
  description: string;
  tools: string;
  source_code: string;
  preview: string;
  image: string;
}
