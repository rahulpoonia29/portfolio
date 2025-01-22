import { ABOUT_ME_DETAILS } from "@/constants/index";

export default function About() {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<h2 className="text-lg font-bold text-zinc-200">About Me</h2>
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
