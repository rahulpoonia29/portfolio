import { Project } from "@/model/projects.model";
import { HoverEffect } from "../Aceternity/card-hover-effect";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<div id="projects" className="mx-0 mb-10 min-h-screen md:mx-0">
			<h2 className="text-center text-4xl">My Projects</h2>
			<div className="mx-auto max-w-7xl px-4">
				<HoverEffect items={projects} />
			</div>
		</div>
	);
}

export default Projects;
