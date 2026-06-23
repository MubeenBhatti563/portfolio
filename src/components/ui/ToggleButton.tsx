"use client";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import type { ToggleButtonProps } from "@/types";

const ToggleButton = ({ setIsShowSidebar, mounted }: ToggleButtonProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setTheme(isDark ? "light" : "dark");
    setIsShowSidebar(false);
  };

  return (
    <button
      type="button"
      className="py-3 px-4 transition-all duration-300 ease-in-out hover:text-primary cursor-pointer flex items-center justify-center border-0 bg-transparent text-inherit"
      onClick={handleToggle}
      aria-label="Toggle layout theme profile"
    >
      {/* Only evaluate the icons once the parent confirms mounting is active */}
      {mounted ? (
        isDark ? (
          <LuMoon className="text-xl" />
        ) : (
          <IoSunnyOutline className="text-xl" />
        )
      ) : (
        <div className="w-5 h-5 opacity-0" />
      )}
    </button>
  );
};

export default ToggleButton;
