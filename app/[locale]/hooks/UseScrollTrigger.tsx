import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (setActiveIndex: (index: number) => void) => {
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
  }, [setActiveIndex]);
};

export default useScrollTrigger;
