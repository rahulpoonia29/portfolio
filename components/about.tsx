import { ABOUT_ME_DETAILS } from "@/constants/index";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export default function About() {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<h2
				className={cn(
					"text-lg font-bold text-zinc-200",
					bricolageGrotesque
				)}
			>
				About Me
			</h2>
			<ul className="space-y-1.5 list-disc pl-5">
				{ABOUT_ME_DETAILS.map((detail, index) => (
					<li key={index} className="text-zinc-400 text-base">
						{detail}
					</li>
				))}
			</ul>
		</div>
	);
}
