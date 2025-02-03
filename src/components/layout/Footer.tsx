import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-solid border-white border-opacity-20">
      <div className="flex flex-wrap gap-10 justify-between w-[85%] mx-auto py-14 border-b border-solid border-white border-opacity-20">
        <div>
          <h3 className="text-white font-medium text-xl mb-6">Home</h3>
          <ul className="text-white text-opacity-50 space-y-4">
            <li className="cursor-pointer hover:underline">Features</li>
            <li className="cursor-pointer hover:underline">Blogs</li>
            <li className="cursor-pointer hover:underline">Resources</li>
            <li className="cursor-pointer hover:underline">Testimonials</li>
            <li className="cursor-pointer hover:underline">Contact Us</li>
            <li className="cursor-pointer hover:underline">Newsletter</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium text-xl mb-6">News</h3>
          <ul className="text-white text-opacity-50 space-y-4">
            <li className="cursor-pointer hover:underline">Trending Stories</li>
            <li className="cursor-pointer hover:underline">Featured Videos</li>
            <li className="cursor-pointer hover:underline">Technology</li>
            <li className="cursor-pointer hover:underline">Health</li>
            <li className="cursor-pointer hover:underline">Politics</li>
            <li className="cursor-pointer hover:underline">Environment</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium text-xl mb-6">Blogs</h3>
          <ul className="text-white text-opacity-50 space-y-4">
            <li className="cursor-pointer hover:underline">
              Quantum Computing
            </li>
            <li className="cursor-pointer hover:underline">AI Ethics</li>
            <li className="cursor-pointer hover:underline">
              Space Exploration
            </li>
            <li className="cursor-pointer hover:underline">Biotechnology</li>
            <li className="cursor-pointer hover:underline">Renewable Energy</li>
            <li className="cursor-pointer hover:underline">Biohacking</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium text-xl mb-6">Podcasts</h3>
          <ul className="text-white text-opacity-50 space-y-4">
            <li className="cursor-pointer hover:underline">AI Revolution</li>
            <li className="cursor-pointer hover:underline">AI Revolution</li>
            <li className="cursor-pointer hover:underline">TechTalk AI</li>
            <li className="cursor-pointer hover:underline">AI Conversations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-medium text-xl mb-6">Resources</h3>
          <ul className="text-white text-opacity-50 flex flex-wrap gap-4 md:flex-col">
            <li className="flex">
              <p className="flex items-center gap-2 px-4 py-3 border border-solid border-white border-opacity-35 rounded-xl cursor-pointer">
                Whitepapers
                <FiArrowUpRight className="text-2xl text-red-500 font-bold" />
              </p>
            </li>
            <li className="flex">
              <p className="flex items-center gap-2 px-4 py-3 border border-solid border-white border-opacity-35 rounded-xl cursor-pointer">
                Ebooks
                <FiArrowUpRight className="text-2xl text-red-500 font-bold" />
              </p>
            </li>
            <li className="flex">
              <p className="flex items-center gap-2 px-4 py-3 border border-solid border-white border-opacity-35 rounded-xl cursor-pointer">
                Reports
                <FiArrowUpRight className="text-2xl text-red-500 font-bold" />
              </p>
            </li>
            <li className="flex">
              <p className="flex items-center gap-2 px-4 py-3 border border-solid border-white border-opacity-35 rounded-xl cursor-pointer">
                Research Papers
                <FiArrowUpRight className="text-2xl text-red-500 font-bold" />
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex items-center justify-between space-y-4 lg:space-y-0 w-[85%] mx-auto py-10">
        <div className="flex justify-center gap-2 text-white text-opacity-50">
          <h3 className="cursor-pointer hover:underline">Terms & Conditions</h3>
          <div className="border-r border-solid border-white border-opacity-50"></div>
          <h3 className="cursor-pointer hover:underline">Privacy Policy</h3>
        </div>

        <div className="flex gap-4 justify-center">
          <FiTwitter className="text-xl text-white cursor-pointer" />
          <FaInstagram className="text-xl text-white cursor-pointer" />
          <FaLinkedinIn className="text-xl text-white cursor-pointer" />
        </div>

        <p className="text-white text-opacity-50 text-center">
          © 2024 NextGenTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
