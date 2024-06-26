import Image from "next/image";
import React from "react";

type Props = {
	name: string;
	src: string;
	size: number;
	className?: string;
};

export default function OrbitImage({
	name,
	src,
	className,
	size,
	...props
}: Props) {
	return (
		<div
			className={
				"absolute grid place-items-center rounded-full bg-zinc-800/60 shadow-white transition-shadow hover:shadow-xl " +
				className
			}
		>
			<Image
				alt="tech-stack"
				src={src}
				width="100"
				height="100"
				className={`size-${size} object-cover`}
				loading="lazy"
				style={{ color: "transparent" }}
			/>
		</div>
	);
}
