import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Header = () => {
  return (
    <header className="py-5 border-b border-solid border-white border-opacity-35 bg-neutral-900">
      <nav className="flex justify-between items-center lg:w-[85%] w-[90%] mx-auto">
        <h1 className="lg:text-3xl md:text-2xl text-lg font-bold text-white animate-pulse pointer-events-none">
          NextGenTech
        </h1>
        <ul className="flex items-center font-semibold text-white lg:gap-10 md:gap-6 sm:gap-4">
          <li>
            <HoverBorderGradient as="button" className="lg:text-base md:text-sm text-xs md:py-2 md:px-4 px-2 py-1">
              <span>Home</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button" className="lg:text-base md:text-sm text-xs md:py-2 md:px-4 px-2 py-1 sm:block hidden">
              <span>News</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button" className="lg:text-base md:text-sm text-xs md:py-2 md:px-4 px-2 py-1 sm:block hidden">
              <span>Podcasts</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button" className="lg:text-base md:text-sm text-xs md:py-2 md:px-4 px-2 py-1 sm:block hidden">
              <span>Resources</span>
            </HoverBorderGradient>
          </li>
        </ul>
        <button className="bg-rose-600 text-white font-semibold px-4 py-2 rounded-lg lg:flex hidden">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
