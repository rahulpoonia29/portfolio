import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import FeaturedProject from "@/components/featuredProject";
import Hero from "@/components/hero";

import TechStack from "@/components/techStack";

export default function Home() {
	return (
		<div className="w-full h-full md:max-w-3xl space-y-12 mb-12 font-mono">
			<Hero />
			<About />
			<Experience />
			<FeaturedProject />
			<TechStack />
			<Contact />
		</div>
	);
}
