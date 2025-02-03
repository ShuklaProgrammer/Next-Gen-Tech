import React from "react";
import HomeHeroSection from "./_components/HomeHeroSection";
import HomeFeatures from "./_components/HomeFeatures";
import BlogSection from "./_components/BlogSection";
import ResourcesSection from "./_components/ResourcesSection";
import ReadersSection from "./_components/ReadersSection";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <HomeFeatures />
      <BlogSection />
      <ResourcesSection />
      <ReadersSection />
    </>
  );
}
