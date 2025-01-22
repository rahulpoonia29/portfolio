import { TECH_STACK_MINI } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { createElement } from "react";

export default function TechStack() {
	return (
		<div id="skills" className="flex flex-col gap-4">
			<h5
				className={cn(
					bricolageGrotesque,
					"font-semibold text-lg text-zinc-200"
				)}
			>
				Teck Stack
			</h5>

			<div className="flex flex-wrap gap-3">
				{TECH_STACK_MINI.map((skill, i) => (
					<div
						key={i}
						className="flex items-center gap-2 bg-[#1A191B] px-4 py-2 rounded-md text-zinc-100 tracking-normal"
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
	);
}
