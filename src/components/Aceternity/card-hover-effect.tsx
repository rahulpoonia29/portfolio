'use client';

import { Project } from "@/model/projects.model";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "../projects/ProjectCard";

export const HoverEffect = ({
	items,
	className,
}: {
	items: Project[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 py-10  md:grid-cols-2  lg:grid-cols-3",
				className,
			)}
		>
			{items.map((item, idx) => (
				<div
					key={idx}
					className="group relative  block h-full w-full p-2"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200  dark:bg-slate-800/[0.8]"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card project={item}></Card>
				</div>
			))}
		</div>
	);
};

export const Card = ({
	project,
	className,
}: {
	project: Project;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative z-20 h-full w-full overflow-hidden rounded-2xl border border-transparent bg-zinc-950 p-4 group-hover:border-slate-700 dark:border-white/[0.2]",
				className,
			)}
		>
			<div className="relative z-50">
				<ProjectCard {...project} />
			</div>
		</div>
	);
};
