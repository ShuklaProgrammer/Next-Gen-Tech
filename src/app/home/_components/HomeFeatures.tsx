"use client";

import PageTileBar from "@/components/PageTitleBar";
import React from "react";

import { FaMicroblog } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HoverEffect } from "@/components/ui/card-hover-effect";

import { motion } from "motion/react";

const projects = [
  {
    title: "Quantity",
    description:
      "Over 1,000 articles on emerging tech trends and breakthroughs.",
  },
  {
    title: "Variety",
    description:
      "Articles cover fields like AI, robotics, biotechnology, and more.",
  },
  {
    title: "Frequency",
    description: "Fresh content added daily to keep you up to date.",
  },
  {
    title: "Authoritative",
    description:
      "Written by our team of tech experts and industry professionals.",
  },
];

const blogs = [
  {
    title: "Depth",
    description: "500+ research articles for in-depth understanding.",
  },
  {
    title: "Graphics",
    description: "Visual aids and infographics to enhance comprehension.",
  },
  {
    title: "Trends",
    description: "Explore emerging trends in future technology research.",
  },
  {
    title: "Contributors",
    description: "Contributions from tech researchers and academics.",
  },
];

export default function HomeFeatures() {
  return (
    <>
      <PageTileBar subTitle="Unlock the Power of" title="FutureTech Features" />
      <div className="w-[85%] mx-auto flex items-center justify-between py-10 border-b border-white/20">
        <div className="space-y-2 w-[30%]">
          <FaMicroblog className="text-rose-600 text-5xl" />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
            className="text-4xl text-white"
          >
            Future Technology Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
            className="text-white/50"
          >
            Stay informed with our blog section dedicated to future technology.
          </motion.p>
        </div>

        <div className="gap-4 w-[55%]">
          <HoverEffect items={projects} />
        </div>
      </div>

      <div className="w-[85%] mx-auto flex items-center justify-between py-10">
        <div className="space-y-2 w-[30%]">
          <FaSearch className="text-rose-600 text-5xl" />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
            className="text-4xl text-white"
          >
            Research Insights Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
            className="text-white/50"
          >
            Dive deep into future technology concepts with our research section.
          </motion.p>
        </div>

        <div className="gap-4 w-[55%]">
          <HoverEffect items={blogs} />
        </div>
      </div>
    </>
  );
}
