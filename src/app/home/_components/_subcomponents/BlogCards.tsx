"use client";
import Image from "next/image";

import LinkButton from "@/components/LinkButton";

import { FaHeart, FaRegComment } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

import { motion } from "motion/react";

interface BlogCardProps {
  authorImage: string;
  authorName: string;
  authorRole: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  button: string;
}

export default function BlogCards({
  authorImage,
  authorName,
  authorRole,
  date,
  title,
  description,
  likes,
  comments,
  shares,
  button,
}: BlogCardProps) {
  return (
    <div className="lg:flex items-center justify-between w-[85%] mx-auto md:py-10 py-6 lg:py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
        className="flex items-center gap-2"
      >
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <Image src={authorImage} width={100} height={100} alt="profile" />
        </div>
        <div>
          <h4 className="text-lg text-white font-semibold capitalize">
            {authorName}
          </h4>
          <p className="text-white/50">{authorRole}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
      >
        <span className="text-white/50 text-lg">{date}</span>
        <h2 className="text-white text-xl font-semibold mt-4">{title}</h2>
        <p className="text-white/50 mb-4">{description}</p>
        <div className="text-white/50 flex gap-2">
          <p className="flex items-center gap-2 bg-neutral-900 py-2 px-4 rounded-full border border-white/10">
            <FaHeart className="text-red-500 text-lg" />
            {likes}k
          </p>
          <p className="flex items-center gap-2 bg-neutral-900 py-2 px-4 rounded-full border border-white/10">
            <FaRegComment className="text-lg" />
            {comments}
          </p>
          <p className="flex items-center gap-2 bg-neutral-900 py-2 px-4 rounded-full border border-white/10">
            <GrSend className="text-lg" />
            {shares}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ amount: 0.8, margin: "0px 0px -20px 0px" }}
        className="mt-4 lg:mt-0"
      >
        <LinkButton>{button}</LinkButton>
      </motion.div>
    </div>
  );
}
