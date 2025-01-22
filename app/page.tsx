import About from "@/components/about";
import Connect from "@/components/connect";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";

export default function Home() {
	return (
		<div className="w-full h-full space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16 mb-12">
			<Hero />
			<About />
			<TechStack />
			<Projects />
			<Contact />
			<Connect />
		</div>
	);
}
