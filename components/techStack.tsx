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
		<div id="skills" className="flex flex-col gap-5">
			<h5 className="font-semibold text-lg text-zinc-200">Tech Stack</h5>

			<div className="flex flex-col gap-5">
				{Object.entries(categorizedSkills).map(([category, skills]) => (
					<div key={category} className="space-y-2 cursor-default">
						<span className="text-xs text-zinc-400 uppercase tracking-wider font-medium font-mono flex items-center gap-1.5">
							<FaArrowRight size={12} />
							{category}
						</span>
						<div className="flex flex-wrap gap-3">
							{skills.map((skill, i) => (
								<div
									key={i}
									className="flex items-center gap-2 bg-[#1A191B] font-medium px-4 py-2 rounded-md  text-zinc-100 tracking-normal hover:bg-[#242326] transition-colors duration-200"
								>
									{skill.icon &&
										createElement(skill.icon, {
											size: 18,
											className: "opacity-80",
										})}
									<span className="text-xs opacity-90 font-medium">
										{skill.name}
									</span>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
