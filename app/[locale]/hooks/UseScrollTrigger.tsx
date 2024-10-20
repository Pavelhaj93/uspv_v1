import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = (setActiveIndex: (index: number) => void) => {
	useEffect(() => {
		const sections = gsap.utils.toArray(".gallery-section") as HTMLElement[];

		sections.forEach((section, i) => {
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
			const triggers = ScrollTrigger.getAll();
			for (const trigger of triggers) {
				trigger.kill();
			}
		};
	}, [setActiveIndex]);
};

export default useScrollTrigger;
