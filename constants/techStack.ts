import { IconType } from "react-icons";
import { ICON_MAP } from "./iconMap";

/**
 * New shape: categories -> clusters -> items
 * Each item includes name and optional icon key from ICON_MAP
 */
export const TECH_STACK: {
	category: string;
	clusters: {
		label: string;
		items: { name: string; icon?: IconType | null }[];
	}[];
}[] = [
	{
		category: "Languages",
		clusters: [
			{
				label: "Primary",
				items: [
					{
						name: "TypeScript",
						icon: ICON_MAP["typescript"] || null,
					},
					{
						name: "JavaScript",
						icon: ICON_MAP["javascript"] || null,
					},
					{ name: "Python", icon: ICON_MAP["python"] || null },
					{ name: "Go", icon: ICON_MAP["golang"] || null },
				],
			},
		],
	},
	{
		category: "Frontend",
		clusters: [
			{
				label: "Core",
				items: [
					{ name: "React", icon: ICON_MAP["react"] || null },
					{ name: "Next.js", icon: ICON_MAP["nextdotjs"] || null },
					{ name: "Redux", icon: ICON_MAP["redux"] || null },
					{ name: "Zustand", icon: null },
				],
			},
			{
				label: "Styling",
				items: [
					{
						name: "Tailwind CSS",
						icon: ICON_MAP["tailwindcss"] || null,
					},
					{ name: "Shadcn UI", icon: ICON_MAP["shadcnui"] || null },
					{ name: "CSS", icon: null },
					{ name: "HTML", icon: null },
				],
			},
			{
				label: "Motion",
				items: [
					{
						name: "Framer Motion",
						icon: ICON_MAP["framermotion"] || null,
					},
				],
			},
		],
	},
	{
		category: "Backend",
		clusters: [
			{
				label: "Runtime",
				items: [
					{ name: "Node.js", icon: ICON_MAP["nodedotjs"] || null },
					{ name: "Express.js", icon: ICON_MAP["express"] || null },
					{ name: "Hono", icon: ICON_MAP["hono"] || null },
				],
			},
			{
				label: "Data",
				items: [
					{
						name: "PostgreSQL",
						icon: ICON_MAP["postgresql"] || null,
					},
					{ name: "MongoDB", icon: ICON_MAP["mongodb"] || null },
				],
			},
			{
				label: "ORM & SDKs",
				items: [
					{ name: "Prisma", icon: ICON_MAP["prisma"] || null },
					{ name: "Drizzle", icon: ICON_MAP["drizzle"] || null },
					{ name: "Appwrite", icon: ICON_MAP["appwrite"] || null },
				],
			},
		],
	},
	{
		category: "Tools",
		clusters: [
			{
				label: "VCS & CI",
				items: [
					{ name: "Git", icon: ICON_MAP["git"] || null },
					{ name: "GitHub", icon: ICON_MAP["github"] || null },
					{
						name: "GitHub Actions",
						icon: ICON_MAP["githubactions"] || null,
					},
					{ name: "Husky", icon: null },
				],
			},
			{
				label: "Infra",
				items: [
					{ name: "Docker", icon: ICON_MAP["docker"] || null },
					{ name: "Vercel", icon: ICON_MAP["vercel"] || null },
					{ name: "AWS", icon: ICON_MAP["aws"] || null },
					{ name: "Amazon S3", icon: null },
					{ name: "Amazon EC2", icon: null },
					{ name: "Amazon SQS", icon: null },
				],
			},
		],
	},
];
