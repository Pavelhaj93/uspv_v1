"use client";

import Image from "next/image";
import SlideCard from "./SlideCard";

export interface Project {
	country: string;
	icon: JSX.Element;
	years: string;
	developed: string;
	note: string;
}

interface ParallaxSlideProps {
	image: string;
	firstProject: Project;
	secondProject: Project;
	cardContent: { title: string; text: string };
	isLeftAligned: boolean;
	activeIndex: number;
	index: number;
}

const ParallaxSlide = ({
	image,
	firstProject,
	secondProject,
	cardContent,
	isLeftAligned,
	activeIndex,
	index,
}: ParallaxSlideProps) => {
	return (
		<section
			className={`gallery-section h-screen w-screen relative ${
				(activeIndex === 1 && index === 0) ||
				(activeIndex === 2 && index === 0) ||
				(activeIndex === 2 && index === 1)
					? "opacity-0"
					: "opacity-100"
			}`}
		>
			<div className="w-full h-full flex flex-col md:flex-row">
				{/* Image */}
				<div className="relative h-1/3 top-2/3 md:top-5 -order-last w-[calc(100%_-_2.5rem)] md:h-[calc(100%_-_2.5rem)]">
					{image && (
						<Image
							src={image}
							alt={`Project in ${firstProject.country} and ${secondProject.country}`}
							layout="fill"
							className="md:rounded-3xl rounded-b-3xl object-cover"
						/>
					)}
				</div>

				{/* Card */}
				<SlideCard
					isLeftAligned={isLeftAligned}
					firstProject={firstProject}
					secondProject={secondProject}
					cardContent={cardContent}
				/>
			</div>
		</section>
	);
};

export default ParallaxSlide;
