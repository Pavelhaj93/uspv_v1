"use client";

import { useEffect, useRef, useState } from "react";

// Video data with thumbnails and source for adaptive quality
const videos = [
  {
    id: 1,
    src: "/videos/video_1_45.mp4",
    thumbnail: "/images/thumbnails/video_1_thumbnail.jpg",
  },
  {
    id: 2,
    src: "/videos/video_2_45.mp4",
    thumbnail: "/images/thumbnails/video_2_thumbnail.jpg",
  },
];

export default function VideoGallery() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Cycle through videos every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  // Trigger video play on component mount or video index change
  useEffect(() => {
    const currentVideo = videoRefs.current[currentVideoIndex];
    if (currentVideo) {
      setTimeout(() => {
        currentVideo.play().catch(() => {
          // Autoplay restrictions will keep video paused; no overlay needed
        });
      }, 100); // Small delay to ensure the video is initialized
    }
  }, [currentVideoIndex]);

  return (
    <section className="relative w-full h-[calc(100vh_-_40px)]">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Only load video for the current index */}
          {index === currentVideoIndex && (
            <video
              ref={(el: HTMLVideoElement | null) => {
                videoRefs.current[index] = el;
              }}
              src={video.src}
              poster={video.thumbnail}
              loop
              muted
              playsInline
              autoPlay
              className="w-full h-full inset-0 absolute object-cover rounded-3xl"
            />
          )}
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {videos.map(({ id }, index) => (
          <button
            key={id}
            type="button"
            className="size-6 items-center justify-center flex"
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
