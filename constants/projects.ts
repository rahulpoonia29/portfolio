import { Project } from "@/types/project";

export const PROJECTS: Array<Project> = [
	{
		coverImage:
			"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1.png",
		logo: "https://picsum.photos/200",
		title: "Applic | Job Application Tracking",
		description:
			"Built a job tracking platform to help users organize and monitor job applications. Users can manage applications, update statuses, and schedule interviews. Integrated UploadThing for document upload and management. Added rich note-taking via Novel and Zustand for reactive client state.",
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
			"UploadThing",
			"Novel",
		],
		href: "https://applic.rahulpoonia.co",
		github: "https://something.com",
	},
	{
		coverImage: "https://picsum.photos/seed/api-gateway/800/600",
		logo: "https://picsum.photos/seed/api-gateway-logo/200",
		title: "API-Gateway",
		description:
			"Developed a lightweight API Gateway in Go. Implemented stateless config via external JSON config file. Built dynamic route selection logic with a Radix Tree. Added round-robin and least connections load balancing strategies.",
		techStack: ["Go", "JSON", "Radix Tree"],
		href: "",
		github: "",
	},
	{
		coverImage: "https://picsum.photos/seed/devmetrics/800/600",
		logo: "https://picsum.photos/seed/devmetrics-logo/200",
		title: "Devmetrics | VS Code Extension",
		description:
			"Created a VS Code extension to automatically analyze coding activity using Git diffs. Enabled per-project configuration, timeline-based tracking, and session summaries. Built UI using VS Code Extensions API including Tree Views, Commands, and Status Bar items. Utilized LokiJS for secure, local data storage.",
		techStack: ["VS Code Extensions API", "Git", "LokiJS", "TypeScript"],
		href: "",
		github: "",
	},
	{
		coverImage: "https://picsum.photos/seed/form-builder/800/600",
		logo: "https://picsum.photos/seed/form-builder-logo/200",
		title: "Form-Builder | Client-Side React Form Generator",
		description:
			"Built a visual form builder that auto-generates React code. Automatically generates React Hook Form JSX and Zod schema based on form layout. Code preview is syntax-highlighted using ShikiJS.",
		techStack: ["React", "React Hook Form", "Zod", "ShikiJS", "JSX"],
		href: "",
		github: "",
	},
	{
		coverImage: "https://picsum.photos/seed/shad-ui/800/600",
		logo: "https://picsum.photos/seed/shad-ui-logo/200",
		title: "Shad-UI | UI Builder Web Application",
		description:
			"Developed a full-stack web application for users to visually build reusable React components using a drag-and-drop interface. Implemented component layout and styling logic using Craft.js, integrated with Tailwind CSS for live styling. Built property editing and live preview functionality with state synchronization. Created automated JSX code generation logic to output React JSX code.",
		techStack: ["React", "Craft.js", "Tailwind CSS", "JSX"],
		href: "",
		github: "",
	},
];
