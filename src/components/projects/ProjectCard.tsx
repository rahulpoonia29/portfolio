import React from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Project } from "@/model/projects.model";
import { Oxanium } from "next/font/google";
import { AnimatedTooltip } from "../Aceternity/animated-tooltip";
import { BackgroundGradientAnimation } from "../Aceternity/background-gradient-animation";
import { Meteors } from "../Aceternity/metores";
import generateCardColors from "@/utils/generateColors";

const oxanium = Oxanium({ subsets: ["latin"], weight: "600" });

export default function ProjectCard({
	title,
	description,
	techStack,
	websiteLink,
}: Project) {
	const colors = generateCardColors();

	return (
		<div className="my-2 flex flex-col gap-3">
			<BackgroundGradientAnimation
				containerClassName="w-full aspect-video h-full rounded-2xl"
				className="flex h-full w-full items-center"
			>
				<h3
					className={`pointer-events-none w-full p-10 text-center text-4xl font-semibold ${oxanium.className}`}
				>
					{title}
				</h3>
				<Meteors number={10} />
			</BackgroundGradientAnimation>
			<p className="text-s text-gray-400">{description}</p>

			<div className="mt-2 flex items-center justify-between gap-4">
				<div className="flex flex-row items-center justify-center">
					<AnimatedTooltip items={techStack} />
				</div>

				<Link href={websiteLink} target="_blank">
					<button className="md:text-md inline-flex w-fit animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-2 text-sm font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
						Visit Live Site
					</button>
				</Link>
			</div>
		</div>
	);
}
