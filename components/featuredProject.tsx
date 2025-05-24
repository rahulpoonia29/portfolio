"use client";

import { HERO_PROJECT } from "@/constants/heroProject";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function FeaturedProject() {
	return (
		<section
			id="featuredProject"
			className="flex flex-col gap-4"
			aria-labelledby="projects-heading"
		>
			<div className="flex flex-col gap-6">
				<h2
					id="projects-heading"
					className="text-lg font-semibold text-zinc-900 dark:text-zinc-200"
				>
					Featured Project
				</h2>

				<article className="group relative w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200 border border-zinc-200 dark:border-zinc-700">
					<div className="p-5 md:p-6 flex flex-col gap-4">
						<header className="flex justify-between items-start gap-4">
							<div className="flex items-center gap-3 min-w-0">
								<div className="size-8 rounded-lg bg-gradient-to-br from-[#83a4d4] to-[#b6fbff] flex items-center justify-center flex-shrink-0">
									<span className="text-black font-bold text-base">
										{HERO_PROJECT.title.charAt(0)}
									</span>
								</div>
								<h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
									{HERO_PROJECT.title}
								</h3>
							</div>
							<div className="flex items-center gap-4">
								{HERO_PROJECT.github && (
									<Link
										target="_blank"
										href={HERO_PROJECT.github}
										className="group flex items-center justify-between gap-2 bg-white dark:bg-zinc-800/80 px-4 py-1.5 rounded-md hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200"
										rel="noopener noreferrer"
										aria-label={`View ${HERO_PROJECT.title} on GitHub`}
									>
										<Github size={16} />
										Code
									</Link>
								)}

								{HERO_PROJECT.href && (
									<Link
										target="_blank"
										href={HERO_PROJECT.href}
										className="group flex items-center justify-between gap-2 bg-white dark:bg-zinc-800/80 px-4 py-1.5 rounded-md hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200"
										rel="noopener noreferrer"
										aria-label={`Visit ${HERO_PROJECT.title} website`}
									>
										Visit
										<ExternalLink size={16} />
									</Link>
								)}
							</div>
						</header>

						<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed tracking-wide font-semibold">
							{HERO_PROJECT.description}
						</p>

						<footer className="flex flex-wrap gap-2">
							{HERO_PROJECT.techStack.map((tech) => (
								<span
									key={tech}
									className="inline-flex text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-md"
								>
									{tech}
								</span>
							))}
						</footer>
					</div>
				</article>
			</div>

			<div className="mt-4">
				<Link
					href="/projects"
					className="group mx-auto flex w-fit items-center gap-2 dark:bg-zinc-100 bg-zinc-900 px-4 cursor-pointer py-2 rounded-lg dark:text-zinc-900 text-zinc-300 shadow-sm border dark:border-zinc-200 border-zinc-800 dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
				>
					View All Projects
					<svg
						className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-2"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 7l5 5m0 0l-5 5m5-5H6"
						/>
					</svg>
				</Link>
			</div>
		</section>
	);
}
