import { ReactNode } from "react";
import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const sectionVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const AniWrap = ({
	children,
	id,
	className,
}: {
	children: ReactNode;
	id: string;
	className: string;
}) => {
	return <motion.div>{children}</motion.div>;
	return <div>{children}</div>;
};

export default AniWrap;
