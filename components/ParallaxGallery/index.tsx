"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryItems = [
  { id: 1, src: "/images/cards/card_1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/images/cards/card_2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/images/cards/card_3.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/images/cards/card_4.jpg", alt: "Gallery Image 4" },
];

export default function ParallaxGallery() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".gallery-section");

    sections.forEach((section: any, i) => {
      // Only pin the sections except the last one
      if (i !== sections.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
          markers: false,
          scrub: true,
          end: "bottom top", // Pin the section until its bottom reaches the top of the viewport
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div style={{ height: `${galleryItems.length * 100}vh` }} ref={ref}>
      {galleryItems.map((item, index) => (
        <section
          key={item.id}
          className="gallery-section h-screen w-screen grid place-items-center"
        >
          <div className="w-[calc(100%_-_40px)] h-[calc(100%_-_40px)] overflow-hidden relative">
            <Image
              src={item.src}
              alt={item.alt}
              layout="fill"
              className="rounded-3xl object-cover h-[calc(100%_-_100px)] "
            />
          </div>
        </section>
      ))}
    </div>
  );
}
