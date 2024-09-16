"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    country: "Czech Republic",
    icon: "🇨🇿",
    years: "2006-10",
    developed: 7,
    image: "/images/cards/card_1.jpg",
    note: "development and construction",
  },
  {
    country: "United Kingdom",
    icon: "🇬🇧",
    years: "2014-16",
    developed: 90,
    image: "/images/cards/card_2.jpg",
    note: "development and construction",
  },
  {
    country: "Romania",
    icon: "🇷🇴",
    years: "2013-17",
    developed: 30 + 6,
    image: "/images/cards/card_4.jpg",
    note: "development and construction",
  },
  {
    country: "Ukraine",
    icon: "🇺🇦",
    years: "2012-22",
    developed: 200 + 80,
    image: "/images/cards/card_4.jpg",
    note: "development and construction / EPC",
  },
  {
    country: "Turkey",
    icon: "🇹🇷",
    years: "",
    developed: 20,
    image: "/images/cards/card_8.jpg",
    note: "development advisor",
  },
  {
    country: "Kazakhstan",
    icon: "🇰🇿",
    years: "",
    developed: 100,
    image: "/images/cards/card_7.jpg",
    note: "supplied design and engineering of the solar power plants",
  },
  {
    country: "Russia",
    icon: "🇷🇺",
    years: "2016",
    developed: 435,
    image: "/images/cards/card_2.jpg",
    note: "secured financing of 600 mil",
  },
];

export default function ParallaxGallery() {
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
    <div className="h-1/2 justify-between flex flex-col">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{project.country}</h3>
          <span className="text-3xl">{project.icon}</span>
        </div>
        <p className="text-sm text-gray-600">{project.years}</p>
      </div>

      <div className="flex flex-col gap-5">
        <span className="text-7xl font-medium">{project.developed} MWp</span>

        <p className="text-sm text-gray-600">{project.note}</p>
      </div>
    </div>
  );

  return (
    <div className="mb-10" ref={ref}>
      {projects.reduce((acc: JSX.Element[], project, index) => {
        if (index % 2 === 0) {
          acc.push(
            <section
              key={index}
              className={`gallery-section h-screen w-screen grid place-items-center relative ${
                (activeIndex === 1 && index === 0) ||
                (activeIndex === 2 && index === 2)
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            >
              <div className="w-[calc(100vw-40px)] -left-5 h-full top-5 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={`Project in ${project.country}`}
                  layout="fill"
                  className="rounded-3xl object-cover"
                />
                {/* card */}
                <div
                  className={`absolute w-[30%] top-14 h-[calc(100%_-_92px)] rounded-3xl ${
                    index % 4 === 0 ? "right-11" : "left-11"
                  } bg-white/90 p-6`}
                >
                  <div className="flex flex-col h-full justify-between">
                    {renderProject(project)}
                    {index + 1 < projects.length && (
                      <>
                        <hr className="border-t border-gray-300 my-4" />
                        {renderProject(projects[index + 1])}
                      </>
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
