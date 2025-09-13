"use client";

import { EXPERIENCE } from "@/constants/experience";

export default function Experience() {
	return (
		<section
			id="experience"
			className="section"
			aria-labelledby="experience-heading"
		>
			<h2 id="experience-heading" className="section-heading">
				Experience
			</h2>

			<ol
				className="relative ml-1 space-y-5 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-px before:bg-border"
				aria-label="Work experience timeline"
			>
				{EXPERIENCE.map((exp, i) => {
					const lines = Array.isArray(exp.description)
						? exp.description.slice(0, 2)
						: [exp.description];
					return (
						<li key={i} className="relative pl-5">
							<span className="absolute left-0 top-1.5 -translate-x-1/2 size-2 rounded-full bg-zinc-400 dark:bg-zinc-600 ring-2 ring-white dark:ring-zinc-900" />
							<div className="flex flex-col gap-1">
								<div className="flex items-center justify-between gap-4">
									<div className="text-base font-semibold tracking-tight text-foreground truncate">
										<span>
											{exp.title + " | " + exp.company}
										</span>
									</div>
									<time className="font-mono text-xs leading-none text-muted-foreground whitespace-nowrap">
										{exp.duration}
									</time>
								</div>
								<div className="text-sm leading-relaxed text-muted-foreground">
									{lines.map((l, idx) => (
										<p key={idx}>{l}</p>
									))}
								</div>
							</div>
						</li>
					);
				})}
			</ol>
		</section>
	);
}
