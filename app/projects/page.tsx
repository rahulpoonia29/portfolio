import ProjectMini from "@/components/projectMini";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons/lib";

type Props = {};

const projects: {
	coverImage: string;
	logo?: IconType;
	title: string;
	description: string;
	techStack: string[];
	href: string;
}[] = [
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
		// logo: null,
		title: "Project 1",
		description: "This is a project description",
		techStack: [
			"NextJS",
			"React",
			"TailwindCSS",
			"ShadcnUI",
			"PostgreSQL",
			"Prisma",
			"Vercel",
			"Zustand",
			"NextAuth",
		],
		href: "https://rahulpoonia.co",
	},
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
		// logo: null,
		title: "Project 2",
		description: "This is a project description",
		techStack: [
			"NextJS",
			"React",
			"TailwindCSS",
			"ShadcnUI",
			"PostgreSQL",
			"Prisma",
			"Vercel",
			"Zustand",
			"NextAuth",
		],
		href: "https://rahulpoonia.co",
	},
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
		// logo: null,
		title: "Project 3",
		description: "This is a project description",
		techStack: ["React", "Next.js", "Tailwind CSS"],
		href: "https://rahulpoonia.co",
	},
];

function Projects({}: Props) {
	return (
		<main className="min-h-full w-full md:max-w-2xl mx-auto px-5 py-20 mb-20 flex flex-col gap-10 text-zinc-400">
			<div id="socials" className="flex flex-col gap-4 ">
				<h5
					className={cn(
						bricolageGrotesque,
						"text-lg font-semibold text-zinc-200"
					)}
				>
					My Work
				</h5>
				<div className="grid grid-cols-2 gap-4">
					{projects.map((project, key) => (
						<ProjectMini key={key} project={project} />
					))}
				</div>
			</div>
		</main>
	);
}

export default Projects;
