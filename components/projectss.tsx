"use client";

import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { ChevronDown, Github } from "lucide-react";
import { animate } from "motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { GrLinkUp } from "react-icons/gr";

interface ProjectItemProps {
	project: (typeof PROJECTS)[number];
	index: number;
}

export default function Projects() {
	return (
		<section
			id="projects"
			className="section"
			aria-labelledby="projects-section-heading"
		>
			<h2 id="projects-section-heading" className="section-heading">
				Projects
			</h2>
			<ol className="divide-y-2 divide-y-border">
				{PROJECTS.map((p, i) => (
					<ProjectItem key={p.id} project={p} index={i} />
				))}
			</ol>
		</section>
	);
}

function ProjectItem({ project: p, index }: ProjectItemProps) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const [aspect, setAspect] = useState<number | null>(null); // width / height

	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const inner = el.querySelector(".inner") as HTMLElement | null;
		if (!inner) return;
		const target = open ? inner.offsetHeight : 0;
		(animate as any)(
			el,
			{ height: target },
			{ duration: 0.4, easing: "ease-out" },
		);
	}, [open]);
	return (
		<li className="bg">
			<button
				onClick={() => setOpen((o) => !o)}
				aria-expanded={open}
				className="w-full flex items-center justify-between gap-3 px-4 py-2 text-left"
			>
				<h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight truncate max-w-[200px]">
					{p.name}
				</h3>
				<div className="flex flex-wrap items-center justify-end gap-2 min-w-0">
					{p.tags && (
						<div className="flex flex-wrap gap-1">
							<span className="chip ">{p.tags.join(", ")}</span>
						</div>
					)}
					<ChevronDown
						className={cn(
							"text-zinc-500 dark:text-zinc-400 text-xs transition-transform duration-[0.4s] ease-out size-4",
							open && "rotate-180",
						)}
					/>
				</div>
			</button>
			<div ref={ref} className="overflow-hidden h-0">
				<div className="inner px-4 pb-4 pt-1 flex flex-col gap-3">
					<div className="flex flex-col md:flex-row md:items-start gap-4">
						{p.image ? (
							<div
								className={cn(
									"relative overflow-hidden rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 w-full md:flex-shrink-0",
									aspect
										? aspect < 1
											? "md:max-w-[32%]"
											: "md:max-w-[50%]"
										: "md:max-w-[50%]",
								)}
								style={
									aspect
										? { aspectRatio: aspect.toString() }
										: undefined
								}
							>
								<Image
									src={p.image}
									alt={p.name}
									fill
									onLoadingComplete={(img) => {
										if (
											img.naturalWidth &&
											img.naturalHeight
										) {
											setAspect(
												img.naturalWidth /
													img.naturalHeight,
											);
										}
									}}
									sizes="(max-width: 768px) 100vw, 40vw"
									className="object-cover object-center"
									priority={index < 2}
								/>
								{!aspect && (
									<div className="absolute inset-0 animate-pulse bg-zinc-200 dark:bg-zinc-800" />
								)}
							</div>
						) : (
							<div className="relative overflow-hidden rounded border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-800 w-full md:max-w-[40%] md:flex-shrink-0 flex items-center justify-center text-xs text-zinc-500 aspect-[16/9]">
								<span>Image</span>
							</div>
						)}
						<div className="flex flex-col gap-3 flex-1">
							<p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
								{p.blurb}
							</p>
							{p.stack?.length > 0 && (
								<div className="flex flex-col gap-1.5">
									<span className="text-[11px] tracking-wide uppercase text-zinc-500 dark:text-zinc-500 font-mono">
										stack
									</span>
									<div className="flex flex-wrap gap-1.5 items-center">
										{(() => {
											const core = p.stack.slice(0, 4);
											const rest = p.stack.slice(4);
											return (
												<>
													{core.map((s) => (
														<span
															key={s}
															className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[11px] font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
														>
															{s}
														</span>
													))}
													{rest.length > 0 &&
														rest.map((s) => (
															<span
																key={s}
																className="px-2 py-0.5 rounded-md bg-zinc-50 dark:bg-zinc-900 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
															>
																{s}
															</span>
														))}
												</>
											);
										})()}
									</div>
								</div>
							)}
							{p.links && (
								<div className="flex gap-3 pt-1">
									{p.links.live && (
										<Link
											href={p.links.live}
											target="_blank"
											className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
										>
											<GrLinkUp
												size={12}
												className="transform rotate-45"
											/>{" "}
											live
										</Link>
									)}
									{p.links.code && (
										<Link
											href={p.links.code}
											target="_blank"
											className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
										>
											<Github size={12} /> code
										</Link>
									)}
									{p.links.demo && (
										<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
											demo
										</span>
									)}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}
