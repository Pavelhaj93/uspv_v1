"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import SectionTitle from "@/components/SectionTitle";
import { useTranslations } from "next-intl";

const partners = [
  "/images/partners/erste_group.svg",
  "/images/partners/societe_generale.svg",
  "/images/partners/UniCredit.svg",
  "/images/partners/fichtner.svg",
  "/images/partners/Raiffeisen_Bank.svg",
  "/images/partners/prk-logo-white.svg",
  "/images/partners/wolf_theiss.svg",
  "/images/partners/cms.svg",
  "/images/partners/white_case.svg",
  "/images/partners/european-bank-for-rad-1.svg",
  "/images/partners/mott-macdonald.svg",
  "/images/partners/generali-logo.svg",
];

export default function PartnersCarousel() {
  const t = useTranslations("partnersSection");
  return (
    <section id="partnersSection" className="bg-white w-full p-5 mb-5">
      <SectionTitle title={t("title")} subtitle={t("subtitle")} />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 0.9,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="mt-5">
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6 2xl:basis-1/8"
            >
              <div className="p-1">
                <div className="flex items-center w-[140px] h-[100px]">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    height={100}
                    width={140}
                    className="object-contain "
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
