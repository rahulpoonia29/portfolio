import mongoose from "mongoose";

export interface Project {
	title: string;
	logo: string;
	description: string;
	techStack: TechStackItem[];
	websiteLink: string;
	githubLink: string;
}

export interface TechStackItem {
	id: number;
	name: string;
	logo: string;
}

const TechStackItemSchema = new mongoose.Schema<TechStackItem>({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
});

const ProjectSchema = new mongoose.Schema<Project>({
	title: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	techStack: {
		type: [TechStackItemSchema], // Use the sub-document schema here
		required: true,
	},
	websiteLink: {
		type: String,
		required: true,
	},
	githubLink: {
		type: String,
		required: true,
	},
});

const ProjectModel =
	(mongoose.models?.Project as mongoose.Model<Project>) ||
	mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;
