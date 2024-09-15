"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const galleryItems = [
  { id: 1, src: "/images/cards/card_1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/images/cards/card_2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/images/cards/card_3.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/images/cards/card_4.jpg", alt: "Gallery Image 4" },
];

function GalleryItem({
  src,
  alt,
  index,
  scrollProgress,
}: {
  src: string;
  alt: string;
  index: number;
  scrollProgress: number;
}) {
  const itemProgress = Math.max(0, Math.min(1, scrollProgress - index));
  console.log("itemProgress", itemProgress);
  const translateY = (1 - itemProgress) * 100;

  console.log("scrollProgress", scrollProgress);

  const lastImageFinished = scrollProgress > 4;
  const firstImageNotFinished = scrollProgress < 1;
  console.log("lastImageFinished", lastImageFinished);

  console.log("test", firstImageNotFinished);

  return (
    <div
      className={`w-full h-screen ${
        lastImageFinished || firstImageNotFinished ? "relative" : "fixed"
      }  top-0 left-0`}
      style={{
        zIndex: index + 1,
      }}
    >
      <div className="w-full h-full overflow-hidden">
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="rounded-3xl"
          objectFit="cover"
          style={{
            transform: !firstImageNotFinished
              ? `translateY(${translateY}%) `
              : "",
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>
    </div>
  );
}

export default function ParallaxGallery() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  console.log("scrollProgress", scrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const galleryStart = scrollPosition + top - windowHeight;
        const galleryEnd = galleryStart + height;

        const progress =
          (scrollPosition - galleryStart) / (galleryEnd - galleryStart);
        setScrollProgress(
          Math.max(
            0,
            Math.min(
              galleryItems.length + 1,
              progress * (galleryItems.length + 1)
            )
          )
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call to set correct initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ height: `${(galleryItems.length + 1) * 100}vh` }}
      className="rounded-3xl"
    >
      {galleryItems.map((item, index) => (
        <GalleryItem
          key={item.id}
          src={item.src}
          alt={item.alt}
          index={index}
          scrollProgress={scrollProgress}
        />
      ))}
    </div>
  );
}
