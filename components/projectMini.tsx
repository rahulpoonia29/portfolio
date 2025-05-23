"use client";

import { Project } from "@/types/project";
import { Code, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PlaceholderLogo = () => (
	<div className="size-5 rounded-md bg-white flex items-center justify-center overflow-hidden">
		<Code className="size-3 text-black" />
	</div>
);

function ProjectMini({ project }: { project: Project }) {
	const [imageLoading, setImageLoading] = useState(true);
	const [imageError, setImageError] = useState(false);

	return (
		<article className="group rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-lg dark:hover:shadow-zinc-900/20">
			<div className="relative aspect-video overflow-hidden">
				<Link
					href={project.href}
					className="block aspect-[16/9] overflow-hidden relative"
					target="_blank"
					rel="noopener noreferrer"
					aria-label={`View ${project.title} project`}
				>
					{imageLoading !== false && (
						<div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
					)}
					{!imageError ? (
						<Image
							src={project.coverImage}
							alt={`${project.title} project preview`}
							width={640}
							height={360}
							className="w-full h-full object-cover"
							onLoad={() => setImageLoading(false)}
							onError={() => {
								setImageLoading(false);
								setImageError(true);
							}}
						/>
					) : (
						<div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
							<span className="text-zinc-500 dark:text-zinc-400 text-sm">
								Failed to load image
							</span>
						</div>
					)}
				</Link>
			</div>

			<div className="flex flex-col gap-4 p-5">
				<header className="flex justify-between items-start gap-4">
					<div className="flex items-center gap-3 min-w-0">
						<div className="size-8 rounded-lg bg-white dark:bg-zinc-800 ring-2 ring-zinc-200 dark:ring-zinc-700 flex-shrink-0">
							{project.logo ? (
								<Image
									alt={`${project.title} logo`}
									src={project.logo}
									width={256}
									height={256}
									className="size-full object-contain rounded-lg"
								/>
							) : (
								<PlaceholderLogo />
							)}
						</div>
						<h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
							{project.title}
						</h3>
					</div>

					<div className="flex gap-2 flex-shrink-0">
						{project.github && (
							<Link
								target="_blank"
								href={project.github}
								className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-md px-2.5 py-1.5 transition-colors duration-200"
								rel="noopener noreferrer"
								aria-label={`View ${project.title} on GitHub`}
							>
								<Github size={12} />
								<span className="hidden sm:inline">Code</span>
							</Link>
						)}
						<Link
							target="_blank"
							href={project.href}
							className="inline-flex items-center gap-1.5 text-xs font-medium dark:bg-zinc-100 bg-zinc-900 px-2.5 py-1.5 rounded-md dark:text-zinc-900 text-zinc-300 shadow-sm border dark:border-zinc-200 border-zinc-800 dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors duration-200"
							rel="noopener noreferrer"
							aria-label={`Visit ${project.title} website`}
						>
							<ExternalLink size={12} />
							<span className="hidden sm:inline">Visit</span>
						</Link>
					</div>
				</header>

				{project.description && (
					<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
						{project.description}
					</p>
				)}

				<footer className="flex flex-wrap gap-1.5">
					{project.techStack.slice(0, 4).map((tech, i) => (
						<span
							key={i}
							className="inline-flex text-xs font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded-md"
						>
							{tech}
						</span>
					))}
					{project.techStack.length > 4 && (
						<span className="inline-flex text-xs font-medium bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded-md">
							+{project.techStack.length - 4} more
						</span>
					)}
				</footer>
			</div>
		</article>
	);
}

export default ProjectMini;
