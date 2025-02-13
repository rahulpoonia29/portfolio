import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";

export default function Home() {
	return (
		<div className="w-full h-full space-y-12 mb-12 font-mono">
			<Hero />
			<About />
			<TechStack />
			<Projects />
			<Contact />
		</div>
	);
}
