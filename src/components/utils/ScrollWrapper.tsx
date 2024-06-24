"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

function ScrollWrapper({ children }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0.0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.3,
				duration: 0.8,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	);
}

export default ScrollWrapper;
