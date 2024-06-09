"use client";

import React, { useState } from "react";
import SkillCard from "../skill/SkillCard";
import ProjectCard from "./ProjectCard";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Project } from "@/model/projects.model";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<ScrollWrapper>
			<div id="projects" className="mx-6 mb-10 min-h-screen md:mx-0">
				<h2 className="text-center text-4xl">My Projects</h2>
				<div className="mx-auto my-4 grid justify-center gap-4 sm:grid-cols-2 md:mx-6 md:my-8 md:gap-10 lg:mx-auto lg:w-5/6 xl:grid-cols-3 2xl:w-3/4">
					{projects?.map((project: Project, key: number) => (
						<ProjectCard key={key} {...project} />
					))}
				</div>
			</div>
		</ScrollWrapper>
	);
}

export default Projects;
