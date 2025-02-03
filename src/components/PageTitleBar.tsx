"use client";

import LinkButton from "./LinkButton";

import { motion } from "motion/react";

interface PageTitleProps {
  title: string;
  subTitle: string;
  button?: React.ReactNode;
}

export default function PageTileBar({
  title,
  subTitle,
  button,
}: PageTitleProps) {
  return (
    <div className="bg-neutral-900 py-20 md:flex items-center justify-between lg:px-28 md:px-10 px-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
        viewport={{ amount: 0.8, margin: "0px 0px -10px 0px" }}
        className="md:space-y-4 space-y-2 mb-2 md:mb-0"
      >
        <span className="text-white bg-neutral-700 py-1 px-2 rounded-sm md:text-base text-sm">
          {subTitle}
        </span>
        <h1 className="text-white lg:text-5xl md:text-3xl text-2xl">{title}</h1>
      </motion.div>
      {button && <LinkButton>{button}</LinkButton>}
    </div>
  );
}
