import AnimatedText from "@/app/[locale]/_components/HeroSection/AnimatedHeroBannerText";
import React from "react";
import VideoGallery from "@/app/[locale]/_components/HeroSection/VideoGallery";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden p-5">
      <VideoGallery />
      <AnimatedText />
    </section>
  );
};

export default HeroSection;
