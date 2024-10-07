"use client";

import About from "@/components/about";
import { Connect } from "@/components/connect";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techStack";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<motion.div
			initial={{ y: -20, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className="w-full h-full space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16 mb-12"
		>
			<Hero />
			<About />
			<TechStack />
			<Projects />
			<Contact />
			<Connect />
		</motion.div>
	);
}
