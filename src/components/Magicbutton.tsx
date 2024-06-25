"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiMinutemailer } from "react-icons/si";

const svgPath =
	"M 650 4 C 624 69 543 -56 484 -1 C 454 16 463 93 362 82 C 301 79 176 -17 287 -52 C 390 -87 328 128 260 79 C 237 60 140 -27 148 81";

const Magicbutton = ({ className }: { className?: string }) => {
	const transition = { duration: 5, ease: "easeInOut", repeat: Infinity };

	return (
		<div className={`relative bg-white ` + className ? className : ""}>
			<motion.div
				style={{
					position: "absolute",
					bottom: 0,
					left: 0,
					width: "2em",
					height: "2em",
					backgroundColor: "transparent",
					offsetPath: `path('${svgPath}')`,
				}}
				initial={{ offsetDistance: "100%" }}
				animate={{ offsetDistance: "100%" }}
				transition={transition}
				className="bg-red-800"
			>
				<SiMinutemailer className="rotate-180" />
			</motion.div>
		</div>
	);
};

export default Magicbutton;
export { svgPath };
