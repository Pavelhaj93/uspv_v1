"use client";

import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import AutoScroll from "embla-carousel-auto-scroll";
import SectionTitle from "@/components/SectionTitle";

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
  return (
    <section id="partnersSection" className="bg-white w-full p-5">
      <SectionTitle title="PARTNERS" subtitle="Powering progress, Together" />
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          AutoScroll({
            speed: 1,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/6"
            >
              <div className="p-1">
                <div className="max-w-[200px] max-h-[200px]">
                  <CardContent className="flex items-center justify-center p-6 h-[200px]">
                    <Image
                      src={partner}
                      alt={`Partner ${index + 1}`}
                      width={200}
                      height={200}
                      className="object-contain max-w-full max-h-full"
                    />
                  </CardContent>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
