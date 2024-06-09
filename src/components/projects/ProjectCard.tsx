import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Project } from "@/model/projects.model";

const cardVariants = {
	hidden: { y: 50, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.6, ease: "easeInOut" },
	},
};

export default function ProjectCard({
	title,
	logo,
	description,
	techStack,
	websiteLink,
	githubLink,
}: Project) {
	return (
		<ScrollWrapper>
			<div className="dark:bg-grey-800 group flex max-w-md flex-col gap-2 rounded-lg bg-zinc-900 p-4 ">
				<div className="relative rounded-lg">
					<Image
						alt={title}
						width={1000}
						height={1000}
						className="aspect-video h-48 max-h-full max-w-full rounded-lg border-2 border-zinc-500 object-cover object-top transition-transform group-hover:scale-105 "
						src={logo}
					/>
				</div>

				<div className="my-2 flex flex-col gap-3">
					<h3 className="text-xl font-medium">{title}</h3>
					<p className="text-sm text-gray-400">{description}</p>
					<p className="text-sm text-gray-200">
						Tech Stack: <span className="text-gray-400">{techStack}</span>
					</p>
					<div className="mt-2 flex items-center gap-4">
						<div className="flex items-center gap-4">
							<Link
								href={websiteLink}
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 md:text-base"
							>
								Visit
							</Link>
						</div>
						<div className="flex items-center gap-4">
							<Link
								href={githubLink}
								target="_blank"
								className="w-fit cursor-pointer rounded-md bg-violet-500 px-4 py-2 text-sm text-white transition-colors hover:bg-violet-700 dark:bg-violet-700 hover:dark:bg-violet-800 md:text-base"
							>
								Github
							</Link>
						</div>
					</div>
				</div>
			</div>
		</ScrollWrapper>
	);
}
