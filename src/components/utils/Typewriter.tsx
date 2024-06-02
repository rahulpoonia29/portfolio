"use client";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

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
				cursorStyle="|"
				typeSpeed={speed}
				deleteSpeed={70}
				delaySpeed={1000}
				loop
			/>
		</div>
	);
}

export default MyTypewriter;
