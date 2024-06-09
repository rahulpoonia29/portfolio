import Skills from "@/components/skill/Skills";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import dbConnect from "@/db";
import SkillModel, { Skill } from "@/model/skill.model";

export default async function Home() {
	await dbConnect();

	const skillData: Skill[] = await SkillModel.find({})
		.lean()
		.then((skills: Skill[]) =>
			skills.map((skill) => ({
				name: skill.name,
				logo: skill.logo,
				category: skill.category,
				invert: skill.invert,
			})),
		);

	const categories = Array.from(
		new Set(skillData.map((skill) => skill.category)),
	);

	return (
		<div>
			<Hero />
			<About />
			<Skills categories={categories} skillData={skillData} />
			<Projects
				projectData={[
					{
						title: "Blogify",
						description:
							"A sleek blog app with user authentication and profiles.",
						techStack: "React, Redux, Tailwind CSS, TinyMCE, Appwrite",
						image: "/projects/blogify.png",
						link: "https://blogify-app-sage.vercel.app",
						github: "https://github.com/rahulpoonia29/React-Blog-app",
					},
					{
						title: "Search a Word",
						description:
							"Search for a word using an API and get its detailed info.",
						techStack: "React, React Router, Tailwind CSS, Dictionary API",
						image: "/projects/searchaword.png",
						link: "https://search-a-word.vercel.app/search/earth",
						github: "https://github.com/rahulpoonia29/Search-a-Word",
					},
					{
						title: "Currency Exchange App",
						description:
							"React App to convert currency with real-time exchange rates",
						techStack: "React, Tailwind CSS",
						image: "/projects/currencymaster.png",
						link: "https://currency-exchange-wine.vercel.app/",
						github: "https://github.com/rahulpoonia29/Currency-Exchange-App",
					},
					{
						title: "Password Forge",
						description:
							"Generates a random password with the click of a button.",
						techStack: "React, Tailwind CSS",
						image: "/projects/passwordforge.png",
						link: "https://passwordforge.vercel.app/",
						github: "https://github.com/rahulpoonia29/Paassword-Generator",
					},
				]}
			/>
		</div>
	);
}
