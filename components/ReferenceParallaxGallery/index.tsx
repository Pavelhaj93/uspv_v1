"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CzechFlagSVG from "../LangSwitcher/CzechFlagSVG";
import EnglishFlagSVG from "../LangSwitcher/EnglishFlagSVG";
import RomaniaFlagSVG from "@/app/[locale]/icons/RomaniaFlagSVG";
import UkraineFlagSVG from "@/app/[locale]/icons/UkraineFlagSVG";
import TurkeyFlagSVG from "@/app/[locale]/icons/TurkeyFlagSVG";
import KazakhstanFlagSVG from "@/app/[locale]/icons/KazakhstanFlagSVG";
import { useTranslations } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

export default function ReferenceParallaxGallery() {
  const t = useTranslations("referencesSection");

  const projects = [
    {
      country: t("projects.project1.country"),
      icon: <CzechFlagSVG />,
      years: "2006-10",
      developed: 7,
      image: "/images/cards/card_4.jpg",
      note: t("projects.project1.note"),
    },
    {
      country: t("projects.project2.country"),
      icon: <EnglishFlagSVG />,
      years: "2014-16",
      developed: 90,
      image: "",
      note: t("projects.project2.note"),
    },
    {
      country: t("projects.project3.country"),
      icon: <RomaniaFlagSVG />,
      years: "2013-17",
      developed: 30 + 6,
      image: "/images/cards/card_1.jpg",
      note: t("projects.project3.note"),
    },
    {
      country: t("projects.project4.country"),
      icon: <UkraineFlagSVG />,
      years: "2012-22",
      developed: 200 + 80,
      image: "",
      note: t("projects.project4.note"),
    },
    {
      country: t("projects.project5.country"),
      icon: <TurkeyFlagSVG />,
      years: "",
      developed: 20,
      image: "/images/cards/card_9.jpg",
      note: t("projects.project5.note"),
    },
    {
      country: t("projects.project6.country"),
      icon: <KazakhstanFlagSVG />,
      years: "",
      developed: 100,
      image: "",
      note: t("projects.project6.note"),
    },
  ];

  const cardContent = [
    {
      title: t("cardContent.card1.title"),
      text: t("cardContent.card1.text"),
    },
    {
      title: t("cardContent.card2.title"),
      text: t("cardContent.card2.text"),
    },
    {
      title: `${Math.floor(new Date().getFullYear() - 2006)} ${t(
        "cardContent.card3.title"
      )}`,
      text: t("cardContent.card3.text"),
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const sections = gsap.utils.toArray(".gallery-section");

    sections.forEach((section: any, i) => {
      if (i !== sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: false,
          scrub: true,
          end: "bottom top",
          onEnter: () => setActiveIndex(i),
          onLeaveBack: () => setActiveIndex(i - 1),
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const renderProject = (project: any) => (
    <div className="flex flex-col h-full justify-between gap-2 md:gap-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="md:text-xl font-medium uppercase">
            {project.country}
          </h3>
          <span className="scale-[70%]">{project.icon}</span>
        </div>
        <p className="text-sm text-gray-600">{project.years}</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-5">
        <span className="text-2xl xl:text-5xl 2xl:text-6xl font-medium">
          {project.developed} MWp
        </span>
        <p className="text-sm text-gray-600">{project.note}</p>
      </div>
    </div>
  );

  return (
    <div className="mb-10" ref={ref}>
      {projects.reduce((acc: JSX.Element[], project, index) => {
        if (index % 2 === 0) {
          const cardContentIndex = Math.floor(index / 2) % cardContent.length;
          acc.push(
            <section
              key={index}
              className={`gallery-section h-screen w-screen relative ${
                (activeIndex === 1 && index === 0) ||
                (activeIndex === 2 && index === 0) ||
                (activeIndex === 2 && index === 2)
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            >
              <div className="w-full h-full flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-1/3 top-2/3 md:top-5 -order-last w-[calc(100%_-_40px)] md:h-[calc(100%_-_20px)] ">
                  <Image
                    src={project.image}
                    alt={`Project in ${project.country}`}
                    layout="fill"
                    className="md:rounded-3xl rounded-b-3xl object-cover"
                  />
                </div>
                {/* Card */}
                <div
                  className={`absolute w-[calc(100%_-_40px)] max-h-[700px] md:w-2/3 lg:w-[29%] top-0 md:top-[100px] md:h-auto h-2/3 
                    bg-white lg:opacity-90 px-0 md:px-10 xl:px-12 py-5 md:py-10 2xl:py-16 md:rounded-3xl xl:shadow-lg ${
                      index % 4 === 0 ? "md:right-24" : "md:left-14"
                    }`}
                >
                  <div className="flex flex-col h-full">
                    {/* Project 1 */}
                    <div className="">{renderProject(project)}</div>

                    {/* Separator */}
                    <hr className="border-t border-gray-300 my-4" />

                    {/* Common Text Area */}
                    <div className="">
                      <h4 className="md:text-xl font-medium mb-2">
                        {cardContent[cardContentIndex].title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {cardContent[cardContentIndex].text}
                      </p>
                    </div>

                    {/* Separator */}
                    <hr className="border-t border-gray-300 my-4" />

                    {/* Project 2 */}
                    {index + 1 < projects.length && (
                      <div className="">
                        {renderProject(projects[index + 1])}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        }
        return acc;
      }, [])}
    </div>
  );
}
