"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { skill } from "./Skills";
import { FastAverageColor } from "fast-average-color";

const SkillCard = ({ name, image }: skill) => {
	const [bgColor, setBgColor] = useState("#fff");

	useEffect(() => {
		const fac = new FastAverageColor();
		fac
			.getColorAsync(image)
			.then((color) => {
				const rgba = color.rgb.split(")");
				// console.log(rgba);
				setBgColor(rgba[0] + ",0.25)");
			})
			.catch((e) => {
				console.log("Error getting average color", e);
			});

		// Cleanup function
		return () => {
			fac.destroy();
		};
	}, [image]);

	return (
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
						name === "GitHub" ||
						name === "Vercel" ||
						name === "NextJS" ||
						name === "Express JS"
							? "invert"
							: ""
					}`}
					src={image}
				/>
			</div>
			<p className="text-sm md:text-base">{name}</p>
		</div>
	);
};

export default SkillCard;
