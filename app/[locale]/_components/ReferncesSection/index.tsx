"use client";

import ParallaxGallery from "@/components/ParallaxGallery";
import ReferencesCarousel from "@/components/ReferencesCarousel";
import SectionTitle from "@/components/SectionTitle";

const CompanySection = () => {
  return (
    <section id="referencesSection" className="w-screen h-full p-5">
      {/* Your content goes here */}
      <SectionTitle title="OUR REFERENCES" subtitle="Reliable Power Sources" />
      {/* <ReferencesCarousel /> */}
      <ParallaxGallery />
    </section>
  );
};

export default CompanySection;
