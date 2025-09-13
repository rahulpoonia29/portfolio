import { IconType } from "react-icons";
import { ICON_MAP } from "./iconMap";

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
				label: "Frameworks",
				items: [
					{ name: "Node.js", icon: ICON_MAP["nodedotjs"] || null },
					{ name: "Express.js", icon: ICON_MAP["express"] || null },
					{ name: "Hono", icon: ICON_MAP["hono"] || null },
					{ name: "FastAPI", icon: null },
				],
			},
			{
				label: "Databases",
				items: [
					{
						name: "PostgreSQL",
						icon: ICON_MAP["postgresql"] || null,
					},
					{ name: "MongoDB", icon: ICON_MAP["mongodb"] || null },
					{ name: "SQLite", icon: null },
				],
			},
			{
				label: "ORM & Query",
				items: [
					{ name: "Prisma", icon: ICON_MAP["prisma"] || null },
					{ name: "Drizzle ORM", icon: ICON_MAP["drizzle"] || null },
					{ name: "Mongoose", icon: ICON_MAP["mongoose"] || null },
				],
			},
		],
	},
	{
		category: "AI / Data",
		clusters: [
			{
				label: "NLP & RAG",
				items: [
					{ name: "LangChain", icon: null },
					{ name: "Embeddings / Vector Search", icon: null },
				],
			},
		],
	},
	{
		category: "Tools & Infra",
		clusters: [
			{
				label: "CI/CD",
				items: [
					{ name: "Git", icon: ICON_MAP["git"] || null },
					{ name: "GitHub", icon: ICON_MAP["github"] || null },
					{
						name: "GitHub Actions",
						icon: ICON_MAP["githubactions"] || null,
					},
				],
			},
			{
				label: "Infra",
				items: [
					{ name: "Nginx", icon: null },
					{ name: "Vercel", icon: ICON_MAP["vercel"] || null },
					{ name: "AWS", icon: ICON_MAP["aws"] || null },
				],
			},
		],
	},
];
