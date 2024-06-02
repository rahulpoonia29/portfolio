import Image from "next/image";
import { useEffect, useState } from "react";
import { skill } from "./Skills";

const SkillCard = ({ name, image }: skill) => {
	const [bgColor, setBgColor] = useState("");

	return (
		<div className="flex flex-col items-center justify-center gap-2">
			<div
				title={name}
				style={{ backgroundColor: bgColor }}
				className={
					"dark:bg-grey-800 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 md:h-24 md:w-24"
				}
			>
				<Image
					alt="skill"
					width={100}
					height={100}
					className={`h-12 w-12 object-contain md:h-14 md:w-14 ${name === "Gitub" || name === "Vercel" || name === "NextJS" || name === "ExpressJS" ? "invert" : "invert-0"}`}
					src={image}
				/>
			</div>
			<p className="text-sm md:text-base">{name}</p>
		</div>
	);
};

export default SkillCard;
