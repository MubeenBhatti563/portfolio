import Link from "next/link";
import React from "react";

const LogoName = () => {
  return (
    <h3 className="xl:text-3xl font-semibold text-xl lg:text-2xl">
      <Link href="/" className="flex items-center gap-2">
        <h1 className="lg:py-3 lg:px-4 md:py-1 md:px-2.5 py-0.5 px-2 bg-primary rounded-full text-white lg:text-2xl sm:text-lg">
          M
        </h1>
        <span className="dark:text-dark-text-main">
          Mubeen<span className="font-bold text-primary ">.</span>
        </span>
      </Link>
    </h3>
  );
};

export default LogoName;
