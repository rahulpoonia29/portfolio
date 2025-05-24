"use client";

import { Project } from "@/types/project";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

function ProjectMini({ project }: { project: Project }) {
	return (
		<article className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 p-6 hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200">
			<header className="flex justify-between items-start gap-4 mb-4">
				<div className="flex items-center gap-3 min-w-0">
					<div
						className="size-8 rounded-lg flex items-center justify-center flex-shrink-0"
						style={{
							background: project.logo
								? `linear-gradient(to bottom right, ${project.logo[1]}, ${project.logo[2]})`
								: "linear-gradient(to bottom right, #83a4d4, #b6fbff)",
						}}
					>
						<span
							className="font-bold text-base font-mono"
							style={{
								color: project.logo ? project.logo[0] : "black",
							}}
						>
							{project.title.charAt(0)}
						</span>
					</div>
					<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 truncate">
						{project.title}
					</h3>
				</div>

				<div className="flex items-center gap-2 flex-shrink-0">
					{project.github && (
						<Link
							target="_blank"
							href={project.github}
							className="flex items-center gap-2 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-md hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
							rel="noopener noreferrer"
							aria-label={`View ${project.title} on GitHub`}
						>
							<Github size={16} />
							Code
						</Link>
					)}

					{project.href && (
						<Link
							target="_blank"
							href={project.href}
							className="flex items-center gap-2 text-sm bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-md hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200 border border-zinc-200 dark:border-zinc-700"
							rel="noopener noreferrer"
							aria-label={`Visit ${project.title} website`}
						>
							Visit
							<ExternalLink size={16} />
						</Link>
					)}
				</div>
			</header>

			{project.description.length > 0 && (
				<div className="mb-4">
					<ul className="list-disc marker:text-zinc-500 dark:marker:text-zinc-400 pl-5 space-y-1">
						{project.description.map((point, pointIndex) => (
							<li
								className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed pl-2"
								key={pointIndex}
							>
								{point}
							</li>
						))}
					</ul>
				</div>
			)}

			<footer className="flex flex-wrap gap-2">
				{project.techStack.map((tech, i) => (
					<span
						key={i}
						className="text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md"
					>
						{tech}
					</span>
				))}
			</footer>
		</article>
	);
}

export default ProjectMini;
