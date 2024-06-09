import mongoose from "mongoose";

export interface Project {
	title: string;
	logo: string;
	description: string;
	techStack: string[];
	websiteLink: string;
	githubLink: string;
}

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
		type: [String],
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
	(mongoose.models.Project as mongoose.Model<Project>) ||
	mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;
