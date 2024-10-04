"use client";

import { useState, useEffect, useRef } from "react";

const videos = ["/videos/video_1_trimmed.mp4", "/videos/video_2_trimmed.mp4"];

export default function VideoGallery() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play();
        } else {
          video.pause();
          setTimeout(() => {
            video.currentTime = 0;
          }, 1000);
        }
      }
    });
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full h-[calc(100vh_-_40px)]">
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <video
            ref={(el: HTMLVideoElement | null) => {
              videoRefs.current[index] = el;
            }}
            src={video}
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {videos.map((_, index) => (
          <button
            key={index}
            className="size-6"
            onClick={() => setCurrentVideoIndex(index)}
            aria-label={`Go to video ${index + 1}`}
          >
            <div
              className={`size-2 rounded-full transition-colors ${
                index === currentVideoIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}
