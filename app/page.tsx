import About from "@/components/about";
import { Connect } from "@/components/connect";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/techStack";
import { Separator } from "@/components/ui/separator";

export default function Home() {
	return (
		<main className="min-h-full w-full md:max-w-2xl mx-auto px-5 py-20 mb-20 flex flex-col gap-10">
			<Hero />
			<Separator />
			<About />
			<Separator />
			<TechStack />
			<Separator />
			<Projects />
			<Separator />
			<Contact />
			<Separator />
			<Connect />
		</main>
	);
}
