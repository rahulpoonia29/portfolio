export interface Project {
	coverImage: string;
	logo: string | null;
	title: string;
	description: string;
	techStack: string[];
	href: string;
	github?: string | null;
}
