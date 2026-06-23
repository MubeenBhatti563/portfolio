import Link from "next/link";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col-reverse gap-12 md:gap-16 lg:gap-0 items-center lg:flex-row min-h-[88.5vh] lg:pr-15 mt-12 lg:mt-0 md:justify-between"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="w-[98%] mx-auto lg:mx-0 flex flex-col gap-4 lg:w-[60%] text-center items-center sm:text-left sm:items-start">
        <h3 className="text-lg md:text-xl lg:text-2xl text-light-text font-light [word-spacing:-4px] dark:text-[#777E88]">
          Hey, I&apos;m Mubeen 👋🏻
        </h3>
        <h2 className="text-3xl flex flex-col exsm:flex-row exsm:gap-2.5 md:flex-row md:gap-2.5 lg:flex-col justify-center font-extrabold md:text-5xl lg:text-8xl">
          <span className="text-tertiary">Full Stack</span>
          <span>Developer</span>
        </h2>
        <h3 className="text-lg md:text-xl lg:text-2xl text-light-text dark:text-dark-text-sub font-light">
          Full-stack TypeScript developer based in Pakistan. Engineering
          scalable, high-performance web applications that users love.
        </h3>
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <Link
            href="#contact"
            className="py-1.5 px-2 lg:py-2.5 lg:px-4 bg-tertiary cursor-pointer rounded-md text-white text-sm font-bold hover:opacity-90 transition-all duration-300 ease-in"
          >
            Get in Touch
          </Link>
          <Link
            href="/projects"
            className="py-1.5 px-2 lg:py-2.5 lg:px-4 border cursor-pointer rounded-md text-sm font-bold hover:opacity-90 transition-all duration-300 ease-in hover:text-white hover:bg-gray-900 hover:border-white dark:hover:bg-white dark:hover:text-black"
          >
            Browse Projects
          </Link>
        </div>
      </div>
      <HeroImage priority />
    </section>
  );
};

export default Hero;
