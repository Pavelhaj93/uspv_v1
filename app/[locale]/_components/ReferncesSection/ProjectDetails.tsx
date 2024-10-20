"use client";

interface ProjectDetailsProps {
	project: {
		country: string;
		icon: JSX.Element;
		years: string;
		developed: string;
		note: string;
	};
}

export const ProjectDetails = ({ project }: ProjectDetailsProps) => (
	<div className="flex flex-col justify-between gap-2 md:gap-4">
		<div className="flex flex-col">
			<div className="flex items-center gap-2">
				<h3 className="md:text-xl font-medium uppercase">{project.country}</h3>
				{project.icon}
			</div>
		</div>
		<div className="flex flex-col gap-2 md:gap-5">
			<span className="text-2xl xl:text-5xl 2xl:text-6xl font-medium">
				{project.developed}
			</span>
			<p className="text-sm text-gray-600">
				{project.years} {project.years && "/"} {project.note}
			</p>
		</div>
	</div>
);
