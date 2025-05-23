import ProjectMini from "@/components/projectMini";
import { Project } from "@/types/project";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const projects: Array<Project> = [
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1.png",
		logo: "https://picsum.photos/200",
		title: "Applic",
		description:
			"A sleek job application tracker with intuitive document management, interview scheduling, and smart notifications. Organize your job hunt effortlessly!",
		techStack: [
			"NextJS",
			"React",
			"TailwindCSS",
			"ShadcnUI",
			"PostgreSQL",
			"Prisma",
			"Vercel",
			"Zustand",
			"NextAuth",
		],
		href: "https://rahulpoonia.co",
		github: "https://something.com",
	},
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
		logo: "https://fastly.picsum.photos/id/788/536/354.jpg?hmac=pWCWRU4--wcKE8GkSjjg59auqMrOYPiVabNRMU6fwYw",
		title: "Project 3",
		description: "This is a project description",
		techStack: ["React", "Next.js", "Tailwind CSS"],
		href: "https://rahulpoonia.co",
		// github: "https://something.com",
	},
];

export default function Projects() {
	return (
		<div className="w-full h-full md:max-w-4xl space-y-8 mb-12 font-mono">
			<div className="flex items-center gap-4">
				<Link
					href="/"
					className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors duration-200"
					aria-label="Back to homepage"
				>
					<ArrowLeft
						size={18}
						className="transition-transform duration-200 group-hover:-translate-x-1"
					/>
					<span className="text-sm font-medium">Back</span>
				</Link>
				<div className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
				<h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
					Projects
				</h1>
			</div>

			<section
				className="flex flex-col gap-6"
				aria-labelledby="projects-heading"
			>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
					{projects.map((project, index) => (
						<ProjectMini project={project} key={index} />
					))}
				</div>

				{projects.length === 0 && (
					<div className="text-center py-12">
						<p className="text-zinc-500 dark:text-zinc-400">
							No projects to display yet.
						</p>
					</div>
				)}
			</section>
		</div>
	);
}
