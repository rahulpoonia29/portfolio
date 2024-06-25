"use client";

import React, { useState } from "react";
import SkillCard from "../skill/SkillCard";
import ProjectCard from "./ProjectCard";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Project } from "@/model/projects.model";
import { HoverEffect } from "../Aceternity/card-hover-effect";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<ScrollWrapper>
			<div id="projects" className="mx-0 mb-10 min-h-screen md:mx-0">
				<h2 className="text-center text-4xl">My Projects</h2>
				<div className="mx-auto max-w-7xl px-4">
					<HoverEffect items={projects} />
				</div>
			</div>
		</ScrollWrapper>
	);
}

export default Projects;
