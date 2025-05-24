import { IconType } from "react-icons";
import { ICON_MAP } from "./iconMap";

export const TECH_STACK: {
	name: string;
	icon: IconType | null;
	category: "Frontend" | "Backend" | "Tools" | "Languages";
}[] = [
	{
		name: "JavaScript",
		icon: ICON_MAP["javascript"] || null,
		category: "Languages",
	},
	{
		name: "TypeScript",
		icon: ICON_MAP["typescript"] || null,
		category: "Languages",
	},
	{
		name: "Python",
		icon: ICON_MAP["python"] || null,
		category: "Languages",
	},
	{
		name: "Go",
		icon: null,
		category: "Languages",
	},
	{
		name: "React",
		icon: ICON_MAP["react"] || null,
		category: "Frontend",
	},
	{
		name: "Next.js",
		icon: ICON_MAP["nextdotjs"] || null,
		category: "Frontend",
	},
	{
		name: "Remix",
		icon: ICON_MAP["remix"] || null,
		category: "Frontend",
	},
	{
		name: "Redux",
		icon: ICON_MAP["redux"] || null,
		category: "Frontend",
	},
	{
		name: "Zustand",
		icon: null,
		category: "Frontend",
	},
	{
		name: "Tailwind CSS",
		icon: ICON_MAP["tailwindcss"] || null,
		category: "Frontend",
	},
	{
		name: "Shadcn UI",
		icon: ICON_MAP["shadcnui"] || null,
		category: "Frontend",
	},
	{
		name: "Framer Motion",
		icon: ICON_MAP["framermotion"] || null,
		category: "Frontend",
	},
	{
		name: "HTML",
		icon: null,
		category: "Frontend",
	},
	{
		name: "CSS",
		icon: null,
		category: "Frontend",
	},
	{
		name: "Bootstrap",
		icon: null,
		category: "Frontend",
	},
	{
		name: "Node.js",
		icon: ICON_MAP["nodedotjs"] || null,
		category: "Backend",
	},
	{
		name: "Express.js",
		icon: ICON_MAP["express"] || null,
		category: "Backend",
	},
	{
		name: "Hono",
		icon: ICON_MAP["hono"] || null,
		category: "Backend",
	},
	{
		name: "PostgreSQL",
		icon: ICON_MAP["postgresql"] || null,
		category: "Backend",
	},
	{
		name: "MongoDB",
		icon: ICON_MAP["mongodb"] || null,
		category: "Backend",
	},
	{
		name: "Prisma",
		icon: ICON_MAP["prisma"] || null,
		category: "Backend",
	},
	{
		name: "Drizzle",
		icon: ICON_MAP["drizzle"] || null,
		category: "Backend",
	},
	{
		name: "Appwrite",
		icon: ICON_MAP["appwrite"] || null,
		category: "Backend",
	},
	{
		name: "Git",
		icon: ICON_MAP["git"] || null,
		category: "Tools",
	},
	{
		name: "GitHub",
		icon: ICON_MAP["github"],
		category: "Tools",
	},
	{
		name: "Docker",
		icon: ICON_MAP["docker"] || null,
		category: "Tools",
	},
	{
		name: "Vercel",
		icon: ICON_MAP["vercel"] || null,
		category: "Tools",
	},
	{
		name: "AWS",
		icon: ICON_MAP["aws"] || null,
		category: "Tools",
	},
	{
		name: "Amazon EC2",
		icon: null,
		category: "Tools",
	},
	{
		name: "Amazon S3",
		icon: null,
		category: "Tools",
	},
	{
		name: "Amazon SQS",
		icon: null,
		category: "Tools",
	},
	{
		name: "GitHub Actions",
		icon: ICON_MAP["githubactions"] || null,
		category: "Tools",
	},
	{
		name: "Husky",
		icon: null,
		category: "Tools",
	},
];
