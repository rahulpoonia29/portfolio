import { TECH_STACK } from "@/constants";
import { createElement } from "react";
import { FaArrowRight } from "react-icons/fa6";

const groupByCategory = (items: typeof TECH_STACK) => {
	return items.reduce((acc, item) => {
		const category = item.category || "Other";
		return {
			...acc,
			[category]: [...(acc[category] || []), item],
		};
	}, {} as Record<string, typeof TECH_STACK>);
};

export default function TechStack() {
	const categorizedSkills = groupByCategory(TECH_STACK);

	return (
		<section
			id="skills"
			className="flex flex-col gap-4"
			aria-labelledby="tech-stack-heading"
		>
			<h2
				id="tech-stack-heading"
				className="text-lg font-semibold text-zinc-900 dark:text-zinc-200"
			>
				Tech Stack
			</h2>

			<div className="flex flex-col gap-6">
				{Object.entries(categorizedSkills).map(([category, skills]) => (
					<div key={category} className="space-y-3">
						<span className="text-sm text-zinc-600 dark:text-zinc-400 uppercase tracking-wider font-medium font-mono flex items-center gap-1.5">
							<FaArrowRight size={14} />
							{category}
						</span>
						<div className="flex flex-wrap gap-2">
							{skills.map((skill, i) => (
								<div
									key={i}
									className="flex text-sm items-center gap-2 bg-zinc-100 dark:bg-zinc-900 px-3 cursor-pointer py-2 rounded-lg text-zinc-900 dark:text-zinc-300 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors duration-200"
								>
									{skill.icon &&
										createElement(skill.icon, {
											size: 18,
											className:
												"text-zinc-900 dark:text-zinc-300",
										})}
									<span className="text-sm font-normal">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
