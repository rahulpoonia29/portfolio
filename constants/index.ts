import {
	FaBootstrap,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaHtml5,
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
	SiDaisyui,
	SiDrizzle,
	SiExpress,
	SiGithub,
	SiHono,
	SiMarkdown,
	SiMongodb,
	SiNetlify,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiReact,
	SiRecoil,
	SiRedux,
	SiRemix,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

export const NAV_LINKS: {
	name: string;
	href: string;
}[] = [
	{
		name: "Projects",
		href: "/projects",
	},
	{
		name: "Blogs",
		href: "/blogs",
	},
];

export const TECH_STACK_MINI: {
	name: string;
	icon: IconType | null;
}[] = [
	// Frontend Technologies
	{
		name: "Next JS",
		icon: SiNextdotjs,
	},
	{
		name: "Remix",
		icon: SiRemix,
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
	},

	// Backend Technologies
	{
		name: "Hono Js",
		icon: SiHono,
	},
	{ name: "Express JS", icon: SiExpress },
	{
		name: "Postgresql",
		icon: SiPostgresql,
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
	},
	{
		name: "Prisma ORM",
		icon: SiPrisma,
	},
	{
		name: "Drizzle",
		icon: SiDrizzle,
	},

	// Tools & Version Control
	{
		name: "Git",
		icon: FaGitAlt,
	},
	{
		name: "Husky",
		icon: null,
	},
];

export const TECH_STACK: {
	name: string;
	icon: IconType;
}[] = [
	// Frontend Technologies
	{
		name: "HTML",
		icon: FaHtml5,
	},
	{
		name: "CSS",
		icon: FaCss3Alt,
	},
	{
		name: "JavaScript",
		icon: IoLogoJavascript,
	},
	{
		name: "TypeScript",
		icon: SiTypescript,
	},
	{
		name: "React",
		icon: SiReact,
	},
	{
		name: "Next JS",
		icon: SiNextdotjs,
	},
	{
		name: "Redux",
		icon: SiRedux,
	},
	{
		name: "Recoil",
		icon: SiRecoil,
	},
	{
		name: "Tailwind CSS",
		icon: SiTailwindcss,
	},
	{
		name: "Bootstrap",
		icon: FaBootstrap,
	},
	{
		name: "Daisy UI",
		icon: SiDaisyui,
	},
	{
		name: "ShadcnUI",
		icon: SiShadcnui,
	},

	// Backend Technologies
	{
		name: "Node.js",
		icon: FaNodeJs,
	},
	{
		name: "Express JS",
		icon: SiExpress,
	},
	{
		name: "AppWrite",
		icon: SiAppwrite,
	},
	{
		name: "MongoDB",
		icon: SiMongodb,
	},
	{
		name: "Postgresql",
		icon: SiPostgresql,
	},
	{
		name: "Python",
		icon: FaPython,
	},

	// Tools & Platforms
	{
		name: "Netlify",
		icon: SiNetlify,
	},
	{
		name: "Vercel",
		icon: SiVercel,
	},

	// Version Control & Other Technologies
	{
		name: "Git",
		icon: FaGitAlt,
	},
	{
		name: "GitHub",
		icon: SiGithub,
	},
	{
		name: "Markdown",
		icon: SiMarkdown,
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

export const project: {
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
	"I specialize in Next.js, React, Typescript, and Tailwind CSS.",
	"Currently pursuing BTech from IIT Kharagpur.",
];
