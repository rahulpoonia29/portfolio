"use client";

import React, { useState } from "react";
import SkillCard from "../skill/SkillCard";
import ProjectCard from "./ProjectCard";

export type project = {
	title: string;
	techStack: string;
	description: string;
	link: string;
	image: string;
	github: string;
};

type Props = {
	projectData: project[];
};

function Projects({ projectData }: Props) {
	return (
		<div id="projects" className="mx-4 min-h-screen md:mx-0 mb-10">
			<h2 className="text-center text-4xl">My Projects</h2>
			<div className="justify-center mx-auto my-4 grid gap-4 md:mx-6 md:my-8 sm:grid-cols-2 md:gap-10 lg:mx-auto lg:w-5/6 xl:grid-cols-3 2xl:w-3/4">
				{projectData?.map((project: project, key: number) => (
					<ProjectCard key={key} {...project} />
				))}
			</div>
		</div>
	);
}

export default Projects;
