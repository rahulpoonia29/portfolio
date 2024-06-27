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
				"group absolute hidden cursor-pointer place-items-center rounded-full bg-zinc-800/60 shadow-white transition-shadow hover:shadow-xl md:grid " +
				className
			}
		>
			<div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform whitespace-nowrap rounded-lg bg-zinc-100 px-3 py-2 text-xs text-black opacity-0 transition-opacity group-hover:opacity-100">
				{name}
				<svg
					className="absolute left-0 top-full h-2 w-full text-white"
					x="0px"
					y="0px"
					viewBox="0 0 255 255"
				>
					<polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
				</svg>
			</div>
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
