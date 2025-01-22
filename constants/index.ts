import {
	FaAws,
	FaGitAlt,
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaNodeJs,
	FaPython,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { LuMail } from "react-icons/lu";
import {
	SiAppwrite,
	SiDocker,
	SiDrizzle,
	SiExpress,
	SiFramer,
	SiGithubactions,
	SiHono,
	SiMongodb,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRedux,
	SiRemix,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

export const TECH_STACK: {
	name: string;
	icon: IconType | null;
	category: "Frontend" | "Backend" | "Tools" | "Languages";
}[] = [
	// Languages
	{
		name: "TypeScript",
		icon: SiTypescript,
		category: "Languages",
	},
	{
		name: "Python",
		icon: FaPython,
		category: "Languages",
	},

	// Frontend Technologies
	{
		name: "React",
		icon: SiReact,
		category: "Frontend",
	},
	{
		name: "Next.js",
		icon: SiNextdotjs,
		category: "Frontend",
	},
	{
		name: "Remix",
		icon: SiRemix,
		category: "Frontend",
	},
	{
		name: "Redux",
		icon: SiRedux,
		category: "Frontend",
	},
	{
		name: "Zustand",
		icon: null,
		category: "Frontend",
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
		category: "Frontend",
	},
	{
		name: "Shadcn UI",
		icon: SiShadcnui,
		category: "Frontend",
	},
	{
		name: "Framer Motion",
		icon: SiFramer,
		category: "Frontend",
	},

	// Backend Technologies
	{
		name: "Node.js",
		icon: FaNodeJs,
		category: "Backend",
	},
	{
		name: "Express.js",
		icon: SiExpress,
		category: "Backend",
	},
	{
		name: "Hono",
		icon: SiHono,
		category: "Backend",
	},
	{
		name: "PostgreSQL",
		icon: SiPostgresql,
		category: "Backend",
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
		category: "Backend",
	},
	{
		name: "Prisma",
		icon: SiPrisma,
		category: "Backend",
	},
	{
		name: "Drizzle",
		icon: SiDrizzle,
		category: "Backend",
	},
	{
		name: "Appwrite",
		icon: SiAppwrite,
		category: "Backend",
	},

	// Tools & Platforms
	{
		name: "Git",
		icon: FaGitAlt,
		category: "Tools",
	},
	{
		name: "Docker",
		icon: SiDocker,
		category: "Tools",
	},
	{
		name: "Vercel",
		icon: SiVercel,
		category: "Tools",
	},
	{
		name: "AWS",
		icon: FaAws,
		category: "Tools",
	},
	{
		name: "GitHub Actions",
		icon: SiGithubactions,
		category: "Tools",
	},
	{
		name: "Husky",
		icon: null,
		category: "Tools",
	},
];

export const CONTACT_DETAILS: {
	icon: IconType;
	link: string;
	text: string;
}[] = [
	{
		icon: LuMail,
		link: "mailto:rahulpoonia229@gmail.com",
		text: "rahulpoonia229@gmail.com",
	},
	{
		icon: FaInstagram,
		link: "https://www.instagram.com/rahulpoonia029",
		text: "rahulpoonia029",
	},
	{
		icon: FaLinkedin,
		link: "https://www.linkedin.com/in/rahulpoonia",
		text: "rahulpoonia",
	},
	{
		icon: FaGithub,
		link: "https://github.com/rahulpoonia29",
		text: "rahulpoonia29",
	},
];

export const HERO_PROJECT: {
	coverImage: string;
	logo: String;
	title: string;
	description: string;
	techStack: string[];
	href: string;
} = {
	coverImage:
		"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
	logo: "https://simpleicons.org/icons/hono.svg",
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
	href: "https://applic.rahulpoonia.co",
};

export const ABOUT_ME_DETAILS: string[] = [
	"All about crafting cool digital stuff that works like a charm.",
	"Full-stack developer passionate about building efficient solutions.",
	"Currently pursuing BTech from IIT Kharagpur.",
];
