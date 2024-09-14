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
import { LuListChecks, LuMail } from "react-icons/lu";
import {
	SiAppwrite,
	SiDaisyui,
	SiExpress,
	SiGithub,
	SiMarkdown,
	SiMongodb,
	SiNetlify,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiRecoil,
	SiRedux,
	SiShadcnui,
	SiTailwindcss,
	SiTypescript,
	SiVercel,
} from "react-icons/si";

export const LINKS: {
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

export const MINIMAP_LINKS: {
	label: string;
	href: string;
}[] = [
	{
		label: "About",
		href: "#about",
	},
	{
		label: "Tech Stack",
		href: "#tech-stack",
	},
	{
		label: "Projects",
		href: "#projects",
	},
	{
		label: "Contact",
		href: "#contact",
	},
	{
		label: "Connect",
		href: "#connect",
	},
];

export const techStack: {
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

export const contactLinks: {
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
	logo?: IconType;
	title: string;
	description: string;
	techStack: string[];
	href: string;
} = {
	coverImage:
		"https://utfs.io/f/1bb820d3-18ff-47b1-a50f-e38e6d7cab40-nbw1x2.png",
	logo: LuListChecks,
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
	href: "https://www.bulletvisa.com/",
};
