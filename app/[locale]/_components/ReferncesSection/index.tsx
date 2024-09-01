"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/Button";

const projects = [
  {
    id: 1,
    title: "Sunnyvale Community Center",
    image: "/images/house-1.webp",
    wattProduction: "500 kW",
  },
  {
    id: 2,
    title: "Green Valley Solar Farm",
    image: "/images/house-2.jpg",
    wattProduction: "2.5 MW",
  },
  {
    id: 3,
    title: "Oceanside Beachfront Installation",
    image: "/images/cartoon-1.jpg",
    wattProduction: "750 kW",
  },
];

export default function ReferencesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <section
      id="referencesSection"
      className="relative w-full h-screen overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
            <h2 className="text-4xl font-bold text-white max-w-2xl">
              {projects[currentIndex].title}
            </h2>
            <p className="text-2xl font-semibold text-white">
              {projects[currentIndex].wattProduction}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <Button onClick={prevSlide} aria-label="Previous project">
        <FaChevronLeft
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
          size={36}
        />
      </Button>

      <Button onClick={nextSlide} aria-label="Next project">
        <FaChevronRight
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
          size={36}
        />
      </Button>
    </section>
  );
}
