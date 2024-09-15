"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import SectionTitle from "../SectionTitle";

const projects = [
  {
    country: "Czech Republic",
    years: "2006-10",
    developed: 7,
    image: "/images/cards/card_1.jpg",
  },
  {
    country: "United Kingdom",
    years: "2014-16",
    developed: 90,
    image: "/images/cards/card_2.jpg",
  },
  {
    country: "Romania",
    years: "2013-17",
    developed: 30,
    image: "/images/cards/card_3.jpg",
  },
  {
    country: "Ukraine",
    years: "2012-22",
    developed: 200,
    image: "/images/cards/card_4.jpg",
  },
  {
    country: "Turkey",
    years: "",
    developed: 20,
    image: "/images/cards/card_5.jpg",
  },
  {
    country: "Russia",
    years: "2016",
    developed: 435,
    image: "/images/cards/card_6.jpg",
  },
  {
    country: "Kazakhstan",
    years: "",
    developed: 100,
    image: "/images/cards/card_8.jpg",
  },
];

export default function PVProjectsCarousel() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  const t = useTranslations("referencesSection");

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => api && api.scrollTo(index);

  return (
    <section className="bg-gradient-to-br bg-white py-6">
      <div className="mx-auto px-4 w-screen">
        <SectionTitle
          title="OUR REFERENCES"
          subtitle="Reliable Power Sources"
        />
        <Carousel
          setApi={setApi}
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
          className="w-screen mx-auto"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 pl-4 h-[600px]"
              >
                <Card
                  className={`h-full flex flex-col justify-between bg-cover bg-center`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <CardHeader>
                    <CardTitle className="text-3xl">
                      {project.country}
                    </CardTitle>
                    <CardDescription className="text-black text-lg">
                      {project.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl mb-1 text-white">
                      Developed: {project.developed} MWp
                    </p>
                  </CardContent>
                  {/* {project.note && (
                    <CardFooter>
                      <p className="text-xs italic">{project.note}</p>
                    </CardFooter>
                  )} */}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
        <div className="flex justify-center mt-4">
          {projects.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`w-2 h-2 rounded-full mx-1 p-0 ${
                index === current ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
