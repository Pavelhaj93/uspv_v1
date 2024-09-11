import ImageGallery from "@/components/ImageGallery";
import AnimatedText from "@/components/AnimatedHeroBannerText";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      <ImageGallery />
      <AnimatedText />
    </section>
  );
};

export default HeroSection;
