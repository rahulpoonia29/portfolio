"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FastAverageColor } from "fast-average-color";
import ScrollWrapper from "../utils/ScrollWrapper";
import { Skill } from "@/model/skill.model";

const SkillCard = ({ name, logo, invert }: Skill) => {
	const [bgColor, setBgColor] = useState("#fff");

	useEffect(() => {
		const fac = new FastAverageColor();
		fac
			.getColorAsync(logo)
			.then((color) => {
				const rgba = color.rgb.split(")");
				setBgColor(rgba[0] + ",0.25)");
			})
			.catch((e) => {
				console.log("Error getting average color", e);
			});

		// Cleanup function
		return () => {
			fac.destroy();
		};
	}, [logo]);

	return (
		<ScrollWrapper>
			<div className="flex flex-col items-center justify-center gap-2">
				<div
					title={name}
					style={{ backgroundColor: bgColor }}
					className={`dark:bg-grey-800 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 md:size-24`}
				>
					<Image
						alt="skill"
						width={80}
						height={80}
						className={`size-12 object-contain md:size-14 ${
							invert && "invert"
						}`}
						src={logo}
					/>
				</div>
				<p className="text-sm md:text-base">{name}</p>
			</div>
		</ScrollWrapper>
	);
};

export default SkillCard;
