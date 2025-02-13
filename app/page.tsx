import About from "@/components/about";
import Connect from "@/components/connect";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/techStack";

export default function Home() {
	return (
		<div
			className="w-full h-full space-y-12 mb-12 font-mono
      dark:bg-[#0F0F0F] dark:text-zinc-200
      bg-[#FAFAFA] text-zinc-900"
		>
			<Hero />
			<About />
			<TechStack />
			<Projects />
			<Contact />
			<Connect />
		</div>
	);
}
