import type { FC } from "react";
import type { Project } from "./ParallaxSlide";
import { ProjectDetails } from "./ProjectDetails";

interface SlideCardProps {
	cardContent: { title: string; text: string };
	isLeftAligned: boolean;
	firstProject: Project;
	secondProject: Project;
}

const SlideCard: FC<SlideCardProps> = ({
	cardContent,
	isLeftAligned,
	firstProject,
	secondProject,
}) => {
	return (
		<div
			className={`absolute w-[calc(100%_-_2.5rem)] max-h-[43.75rem] md:w-2/3 lg:w-[29%] top-0 md:top-[50%] md:-translate-y-1/2 md:h-auto h-2/3 
    bg-white lg:opacity-90 px-0 md:px-10 xl:px-12 py-5 md:py-10 2xl:py-16 md:rounded-3xl xl:shadow-lg ${
			isLeftAligned ? "md:right-24" : "md:left-14"
		}`}
		>
			<div className="flex flex-col h-full justify-center">
				<ProjectDetails project={firstProject} />
				<hr className="border-t border-gray-300 my-4" />
				<div>
					<h4 className="md:text-xl font-medium mb-2 uppercase">
						{cardContent.title}
					</h4>
					<p className="text-sm text-gray-600">{cardContent.text}</p>
				</div>

				<>
					<hr className="border-t border-gray-300 my-4" />
					<ProjectDetails project={secondProject} />
				</>
			</div>
		</div>
	);
};

export default SlideCard;
