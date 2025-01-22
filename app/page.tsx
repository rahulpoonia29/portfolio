import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/techStack";
import { Connect } from "@/components/connect";
import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";

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
