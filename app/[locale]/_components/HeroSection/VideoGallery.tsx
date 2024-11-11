"use client";

import { useEffect, useRef, useState } from "react";

const videos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dxqnem4vn/video/upload/f_auto:video,q_auto/gxjhyhhjugv6iqfh38rj",
    thumbnail: "/images/thumbnails/video_1_thumbnail.jpg",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dxqnem4vn/video/upload/f_auto:video,q_auto/b3zbqaff4l8cjugfeiiq",
    thumbnail: "/images/thumbnails/video_2_thumbnail.jpg",
  },
];

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
          video.currentTime = 0;
        }
      }
    });
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
          {index === currentVideoIndex && (
            <video
              width="100%"
              height="100%"
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              poster={video.thumbnail}
              muted
              playsInline
              preload="auto"
              controls={false}
              className="w-full h-full inset-0 absolute object-cover flex items-center justify-center rounded-3xl"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the html video tag.
            </video>
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
