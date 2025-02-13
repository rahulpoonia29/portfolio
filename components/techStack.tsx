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
			className="flex flex-col gap-6"
			aria-label="Technical Skills"
		>
			<h2 className="text-xl w-fit font-semibold text-zinc-200 border-b-4 border-zinc-200 pb-1 inline-block">
				Tech Stack
			</h2>

			<div className="border-2 border-zinc-200 bg-zinc-900 rounded-lg p-6 shadow-[4px_4px_0px_0px_rgba(244,244,245)]">
				{Object.entries(categorizedSkills).map(([category, skills]) => (
					<div
						key={category}
						className="space-y-4 mb-6 last:mb-0"
						role="region"
						aria-label={`${category} technologies`}
					>
						<span className="text-sm text-zinc-300 uppercase tracking-wider font-medium font-mono flex items-center gap-2">
							<FaArrowRight size={14} aria-hidden="true" />
							{category}
						</span>
						<div className="flex flex-wrap gap-4" role="list">
							{skills.map((skill) => (
								<div
									key={skill.name}
									className="flex items-center gap-2.5 border-2 border-zinc-200 bg-zinc-900 px-3 py-2 rounded-md
                    shadow-[2px_2px_0px_0px_rgba(244,244,245)]
                    hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none
                    transition-all duration-200"
									role="listitem"
									aria-label={`${skill.name} - ${category}`}
									tabIndex={0}
								>
									{skill.icon &&
										createElement(skill.icon, {
											size: 18,
											className: "text-zinc-300",
											"aria-hidden": "true",
										})}
									<span className="text-sm text-zinc-300 font-medium">
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
