export interface Project {
	id: string; // stable id / slug
	name: string; // short display name
	blurb: string; // one‑line summary
	details?: string[]; // bullet lines when expanded
	stack: string[]; // full tech stack list
	links?: { live?: string; code?: string; demo?: string };
	tags?: string[]; // small category chips
	image?: string; // optional cover image path
}
