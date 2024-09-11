import AnimatedText from "@/components/AnimatedHeroBannerText";
import React from "react";
import VideoGallery from "@/components/VideoGallery";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden p-10">
      <VideoGallery />
      <AnimatedText />
    </section>
  );
};

export default HeroSection;
