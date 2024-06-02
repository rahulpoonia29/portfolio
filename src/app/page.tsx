import Skills from "@/components/skill/Skills";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Skills
				categories={["Frontend", "Backend", "Others"]}
				skillData={{
					Frontend: [
						{ name: "JavaScript", image: "/skills/javascript.svg" },
						{ name: "React", image: "/skills/React.svg" },
						{ name: "Tailwind CSS", image: "/skills/tailwind-css.svg" },
						{ name: "HTML", image: "/skills/html5.svg" },
						{ name: "CSS", image: "/skills/css3.svg" },
						{ name: "Bootstrap", image: "/skills/bootstrap.svg" },
					],
					Backend: [
						{ name: "Node.js", image: "/skills/node.js.svg" },
						{ name: "Express", image: "/skills/express.svg" },
						{ name: "MongoDB", image: "/skills/mongodb.svg" },
					],
					Others: [
						{ name: "Googling", image: "/skills/google.svg" },
						{ name: "Python", image: "/skills/python.svg" },
						{ name: "GitHub", image: "/skills/github.svg" },
						{ name: "Git", image: "/skills/git.svg" },
					],
				}}
			/>
			<Contact />
		</>
	);
}
