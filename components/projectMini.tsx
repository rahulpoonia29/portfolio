"use client";

import { Project } from "@/types/project";
import { ExternalLink, Github, X, Calendar, Code2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function ProjectMini({ project }: { project: Project }) {
	const [showModal, setShowModal] = useState(false);

	// Convert description to bullet points if it contains periods or semicolons
	const getDescriptionPoints = (description: string) => {
		if (!description) return [];

		// Split by periods, semicolons, or new lines and filter out empty strings
		const points = description
			.split(/[.;]|\n/)
			.map((point) => point.trim())
			.filter((point) => point.length > 0);

		return points;
	};

	const descriptionPoints = getDescriptionPoints(project.description || "");

	return (
		<>
			<article className="group rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-200 cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				<header className="mb-4">
					<div className="flex justify-between items-start gap-4 mb-3">
						<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
							{project.title}
						</h3>
						<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
							{project.github && (
								<Link
									target="_blank"
									href={project.github}
									onClick={(e) => e.stopPropagation()}
									className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors duration-200"
									rel="noopener noreferrer"
									aria-label={`View ${project.title} on GitHub`}
								>
									<Github size={16} />
								</Link>
							)}
							<Link
								target="_blank"
								href={project.href}
								onClick={(e) => e.stopPropagation()}
								className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors duration-200"
								rel="noopener noreferrer"
								aria-label={`Visit ${project.title} website`}
							>
								<ExternalLink size={16} />
							</Link>
						</div>
					</div>
				</header>

				{descriptionPoints.length > 0 && (
					<div className="mb-4">
						<p className="text-zinc-700 dark:text-zinc-400 text-sm line-clamp-2">
							{descriptionPoints[0]}
						</p>
					</div>
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
			</article>

			{/* Modal */}
			{showModal && (
				<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
					<div className="bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
						<div className="p-6">
							<header className="flex justify-between items-start gap-4 mb-6">
								<div>
									<h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
										{project.title}
									</h2>
									<div className="flex gap-3">
										{project.github && (
											<Link
												target="_blank"
												href={project.github}
												className="inline-flex items-center gap-2 text-sm font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200"
												rel="noopener noreferrer"
											>
												<Github size={16} />
												View Code
											</Link>
										)}
										<Link
											target="_blank"
											href={project.href}
											className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
											rel="noopener noreferrer"
										>
											<ExternalLink size={16} />
											Live Demo
										</Link>
									</div>
								</div>
								<button
									onClick={() => setShowModal(false)}
									className="p-2 text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors duration-200"
								>
									<X size={20} />
								</button>
							</header>

							{descriptionPoints.length > 0 && (
								<div className="mb-6">
									<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3 flex items-center gap-2">
										<Code2 size={18} />
										Project Details
									</h3>
									<ul className="list-disc marker:text-zinc-500 dark:marker:text-zinc-400 pl-5 space-y-2">
										{descriptionPoints.map((point, pointIndex) => (
											<li
												className="text-zinc-700 dark:text-zinc-400 text-base pl-2"
												key={pointIndex}
											>
												{point}
											</li>
										))}
									</ul>
								</div>
							)}

							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-2">
										{project.techStack.map((tech, i) => (
											<span
												key={i}
												className="inline-flex text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-2 rounded-lg"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default ProjectMini;
