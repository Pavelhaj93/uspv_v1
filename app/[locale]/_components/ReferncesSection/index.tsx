"use client";

import ParallaxGallery from "@/components/ReferenceParallaxGallery";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

const CompanySection = () => {
  const t = useTranslations("referencesSection");
  return (
    <section id="referencesSection" className="w-screen h-full p-5">
      {/* Your content goes here */}
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      {/* <ReferencesCarousel /> */}
      <ParallaxGallery />
    </section>
  );
};

export default CompanySection;
