"use client";

import { Spotlight } from "@/components/ui/Spotlight";
import CounterUp from "./_subcomponents/CounterUp";
import People from "./_subcomponents/People";
import Features from "./_subcomponents/Features";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import { motion } from "motion/react";

const words = `Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.`;

export default function HomeHeroSection() {
  return (
    <div className="mx-auto">
      <div className="h-full w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden pt-40">
        <Spotlight
          className="-top-40 left-0 md:left-10 md:-top-20"
          fill="white"
        />
        <div className="relative z-10 w-[85%] flex gap-20 mx-auto">
          <div className="space-y-4 mb-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ y: [20, 0], opacity: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 15 }}
              className="text-white text-opacity-50 text-xl"
            >
              Your Journey to Tomorrow Begins Here
            </motion.p>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="font-semibold text-5xl"
            >
              <span className="text-white">Explore the Frontiers of</span>
              <span className="bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
                Artificial Intelligence
              </span>
            </motion.div>
            <TextGenerateEffect
              words={words}
              className="text-white text-sm pb-10"
            />

            <CounterUp />
          </div>

          {/* <LampContainer> */}
          <People />
          {/* </LampContainer> */}
        </div>
      </div>

      <Features />
    </div>
  );
}
