import Skills from "@/components/skill/Skills";
import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import dbConnect from "@/db";
import SkillModel, { Skill } from "@/model/skill.model";
import ProjectModel, { Project } from "@/model/projects.model";

export default async function Home() {
	await dbConnect();

	const skills: Skill[] = await SkillModel.find({})
		.lean()
		.then((skills: Skill[]) =>
			skills.map((skill) => ({
				name: skill.name,
				logo: skill.logo,
				category: skill.category,
				invert: skill.invert,
			})),
		);

	const categories = Array.from(new Set(skills.map((skill) => skill.category)));

	const projects: Project[] = await ProjectModel.find({})
		.lean()
		.then((projects: Project[]) =>
			projects.map((project) => ({
				title: project.title,
				description: project.description,
				techStack: project.techStack,
				logo: project.logo,
				websiteLink: project.websiteLink,
				githubLink: project.githubLink,
			})),
		);

	return (
		<div>
			<Hero />
			<About />
			<Skills categories={categories} skills={skills} />
			<Projects projects={projects} />
		</div>
	);
}
