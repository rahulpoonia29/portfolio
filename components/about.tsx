import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";

export default function About() {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<h2 className={cn("text-lg font-bold", bricolageGrotesque)}>
				About Me
			</h2>
			<ul className="space-y-1.5 list-disc pl-5">
				<li className="text-zinc-400 text-sm">
					All about crafting cool digital stuff that works like a
					charm.
				</li>
				<li className="text-zinc-400 text-sm">
					I specialize in Next.js, React, Typescript, and Tailwind
					CSS.
				</li>
				<li className="text-zinc-400 text-sm">
					Currently pursuing BTech from IIT Kharagpur.
				</li>
			</ul>
		</div>
	);
}
