import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const Header = () => {
  return (
    <header className="py-5 border-b border-solid border-white border-opacity-35 bg-neutral-900">
      <nav className="flex justify-between items-center w-[85%] mx-auto">
        <h1 className="text-3xl font-bold text-white animate-pulse pointer-events-none">
          NextGenTech
        </h1>
        <ul className="flex items-center font-semibold text-white gap-10">
          <li>
            <HoverBorderGradient as="button">
              <span>Home</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button">
              <span>News</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button">
              <span>Podcasts</span>
            </HoverBorderGradient>
          </li>
          <li>
            <HoverBorderGradient as="button">
              <span>Resources</span>
            </HoverBorderGradient>
          </li>
        </ul>
        <button className="bg-rose-600 text-white font-semibold px-4 py-2 rounded-lg">
          Contact Us
        </button>
      </nav>
    </header>
  );
};

export default Header;
