"use client";

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Skill } from "@/model/skill.model";

type Props = {
	categories: string[];
	skills: Skill[];
};

function Skills({ categories, skills }: Props) {
	const [category, setCategory] = useState(categories[0]);

	return (
		<ScrollWrapper>
			<div
				id="skills"
				className="mx-6 mb-28 mt-12 min-h-[60vh] md:mx-0 md:mb-0 md:mt-20 md:min-h-screen"
			>
				<h2 className="text-center text-4xl">Tech Stack</h2>

				<div className="scroll-hide mx-auto mt-6 flex items-center justify-between gap-3 overflow-x-auto rounded-md bg-zinc-800 p-2 py-3 sm:w-3/5 md:w-1/2 lg:w-1/3">
					{categories.map((c: string, key: number) => (
						<span
							key={key}
							onClick={() => setCategory(c)}
							className={`w-full cursor-pointer rounded-md p-2 text-center text-sm md:text-base ${category.toLowerCase() === c.toLowerCase() ? " bg-violet-700" : "hover:bg-zinc-900"} capitalize transition-all`}
						>
							{c}
						</span>
					))}
				</div>

				<div className="mx-auto my-8 grid grid-cols-3 place-items-center gap-8 md:grid-cols-4 md:px-12 lg:w-3/4 xl:grid-cols-5 2xl:w-3/5">
					{skills
						.filter((skill) => skill.category === category)
						.map((s: any, key: number) => (
							<SkillCard key={key} {...s} />
						))}
				</div>
			</div>
		</ScrollWrapper>
	);
}

export default Skills;
