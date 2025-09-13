import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import ProjectsSection from "@/components/projectsSection";
import TechStack from "@/components/techStack";

export default function Home() {
	return (
		<div className="w-full h-full md:max-w-3xl space-y-4 pb-24 font-mono">
			<Hero />
			<About />
			<Experience />
			{/* <FeaturedProject /> */}
			<ProjectsSection />
			<TechStack />
			<Contact />
		</div>
	);
}
