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
    image: "",
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
    image: "",
    note: "development and construction / EPC",
  },
  {
    country: "Turkey",
    icon: "🇹🇷",
    years: "",
    developed: 20,
    image: "/images/cards/card_9.jpg",
    note: "development advisor",
  },
  {
    country: "Kazakhstan",
    icon: "🇰🇿",
    years: "",
    developed: 100,
    image: "",
    note: "supplied design and engineering of the solar power plants",
  },
];

export default function ReferenceParallaxGallery() {
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
    <div className="flex flex-col h-full justify-between">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <h3 className="text-2xl font-bold">{project.country}</h3>
          <span className="text-3xl">{project.icon}</span>
        </div>
        <p className="text-sm text-gray-600">{project.years}</p>
      </div>

      <div className="flex flex-col gap-5">
        <span className="text-6xl font-medium">{project.developed} MWp</span>

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
                <div className="relative h-1/3 top-2/3 md:top-5 -order-last  w-[calc(100%_-_40px)] md:h-[calc(100%_-_20px)]">
                  <Image
                    src={project.image}
                    alt={`Project in ${project.country}`}
                    layout="fill"
                    className="rounded-3xl lg:rounded-t-3xl rounded-t-none object-cover"
                  />
                </div>
                {/* Card */}
                <div
                  className={`absolute w-[calc(100%_-_40px)] max-h-[600px] md:w-2/3 lg:w-[29%] top-0 rounded-b-none lg:rounded-b-3xl md:top-[100px] md:h-[calc(100%_-_180px)] h-2/3 bg-white lg:opacity-90 p-16 rounded-3xl shadow-lg ${
                    index % 4 === 0 ? "md:right-32" : "md:left-32"
                  }`}
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
