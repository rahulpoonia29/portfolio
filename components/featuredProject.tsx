"use client";

import { HERO_PROJECT } from "@/constants/heroProject";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProject() {
	const [imageLoading, setImageLoading] = useState(true);
	const [imageError, setImageError] = useState(false);

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

				<article className="group relative w-full overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200">
					<Link
						href={HERO_PROJECT.href}
						className="block aspect-[16/9] overflow-hidden relative"
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View ${HERO_PROJECT.title} project`}
					>
						{imageLoading && (
							<div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
						)}
						{!imageError ? (
							<Image
								alt={`${HERO_PROJECT.title} project preview`}
								src={HERO_PROJECT.coverImage}
								width={1280}
								height={780}
								className="object-cover"
								loading="eager"
								priority
								onLoad={() => setImageLoading(false)}
								onError={() => {
									setImageError(true);
									setImageLoading(false);
								}}
							/>
						) : (
							<div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center">
								<span className="text-zinc-500 dark:text-zinc-400">
									Failed to load image
								</span>
							</div>
						)}
					</Link>

					<div className="p-5 md:p-6 flex flex-col gap-4">
						<header className="flex justify-between items-start gap-4">
							<div className="flex items-center gap-3 min-w-0">
								<div className="size-8 rounded-lg bg-white dark:bg-zinc-800 p-1.5 ring-1 ring-zinc-200 dark:ring-zinc-700 flex-shrink-0">
									<Image
										alt={`${HERO_PROJECT.title} logo`}
										src={HERO_PROJECT.logo as string}
										width={256}
										height={256}
										className="size-full object-contain"
									/>
								</div>
								<h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
									{HERO_PROJECT.title}
								</h3>
							</div>

							<Link
								target="_blank"
								href={HERO_PROJECT.href}
								className="inline-flex items-center gap-2 text-sm dark:bg-zinc-100 bg-zinc-900 px-3 cursor-pointer py-1.5 rounded-lg dark:text-zinc-900 text-zinc-300 shadow-sm border dark:border-zinc-200 border-zinc-800 dark:hover:bg-zinc-200 hover:bg-zinc-800 transition-colors duration-200 flex-shrink-0"
								rel="noopener noreferrer"
								aria-label={`Visit ${HERO_PROJECT.title} website`}
							>
								Visit
								<ExternalLink
									size={14}
									className="opacity-80"
									stroke="currentColor"
								/>
							</Link>
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
