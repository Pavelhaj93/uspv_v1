"use client";

import Image from "next/image";
import { ProjectDetails } from "./ProjectDetails";

interface Project {
  country: string;
  icon: JSX.Element;
  years: string;
  developed: string;
  note: string;
}

interface ProjectCardProps {
  image: string;
  project: Project;
  nextProject?: Project;
  cardContent: { title: string; text: string };
  isLeftAligned: boolean;
  activeIndex: number;
  index: number;
}

const ProjectCard = ({
  image,
  project,
  nextProject,
  cardContent,
  isLeftAligned,
  activeIndex,
  index,
}: ProjectCardProps) => {
  return (
    <section
      className={`gallery-section h-screen w-screen relative opacity-100 ${
        (activeIndex === 1 && index === 0) ||
        (activeIndex === 2 && index === 0) ||
        (activeIndex === 2 && index === 2)
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
              alt={`Project in ${project.country}`}
              layout="fill"
              className="md:rounded-3xl rounded-b-3xl object-cover"
            />
          )}
        </div>

        {/* Card */}
        <div
          className={`absolute w-[calc(100%_-_2.5rem)] max-h-[43.75rem] md:w-2/3 lg:w-[29%] top-0 md:top-[50%] md:-translate-y-1/2 md:h-auto h-2/3 
          bg-white lg:opacity-90 px-0 md:px-10 xl:px-12 py-5 md:py-10 2xl:py-16 md:rounded-3xl xl:shadow-lg ${
            isLeftAligned ? "md:right-24" : "md:left-14"
          }`}
        >
          <div className="flex flex-col h-full justify-center">
            <ProjectDetails project={project} />
            <hr className="border-t border-gray-300 my-4" />
            <div>
              <h4 className="md:text-xl font-medium mb-2 uppercase">
                {cardContent.title}
              </h4>
              <p className="text-sm text-gray-600">{cardContent.text}</p>
            </div>
            {nextProject && (
              <>
                <hr className="border-t border-gray-300 my-4" />
                <ProjectDetails project={nextProject} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
