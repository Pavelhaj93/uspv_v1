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

const projects = [
  { country: "Czech Republic", years: "2006-10", developed: 7, constructed: 0 },
  {
    country: "United Kingdom",
    years: "2014-16",
    developed: 90,
  },
  { country: "Romania", years: "2013-17", developed: 30, constructed: 6 },
  { country: "Ukraine", years: "2012-22", developed: 200, constructed: 80 },
  {
    country: "Turkey",
    years: "",
    developed: 20,
  },
  {
    country: "Russia",
    years: "2016",
    developed: 435,
  },
  {
    country: "Kazakhstan",
    years: "",
    developed: 100,
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
    <section className="bg-gradient-to-br h-full from-purple-300 to-yellow-300 py-16">
      <div className="mx-auto px-4 w-screen">
        <h2 className="text-6xl font-bold font-montserrat text-center mb-8">
          {t("title")}
        </h2>
        <p className="text-2xl text-center font-montserrat mb-12">
          {t("subtitle")}
        </p>
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
                className="md:basis-1/2 lg:basis-1/3 pl-4 h-[600px] "
              >
                <Card className="h-full flex flex-col justify-between bg-[url(/images/FVE_foto.webp)] bg-cover bg-center">
                  <CardHeader>
                    <CardTitle className="font-montserrat text-3xl">
                      {project.country}
                    </CardTitle>
                    <CardDescription className="font-montserrat text-black text-lg">
                      {project.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl mb-1 text-white font-montserrat">
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
