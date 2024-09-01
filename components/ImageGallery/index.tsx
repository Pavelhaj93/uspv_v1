"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/house-1.webp",
  "/images/house-2.jpg",
  "/images/cartoon-1.jpg",
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000); // Change image every 10 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            priority={index === 0}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <h1 className="text-4xl font-bold text-white sm:text-6xl md:text-7xl lg:text-9xl font-lobster">
          USPV
        </h1>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
