"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

type Props = {
	words: string[];
	speed: number;
	className: string;
};

function MyTypewriter({ words, speed, className }: Props) {
	return (
		<div className={className}>
			<Typewriter
				words={words}
				cursor
				cursorColor="grey"
				typeSpeed={speed}
				deleteSpeed={100}
				delaySpeed={1500}
				loop
			/>
		</div>
	);
}

export default MyTypewriter;
