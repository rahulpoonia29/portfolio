import mongoose from "mongoose";

export interface Skill {
	name: string;
	logo: string;
	category: string;
	invert: boolean;
}

const SkillSchema = new mongoose.Schema<Skill>({
	name: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	invert: {
		type: Boolean,
		required: false,
		default: false,
	},
});

const SkillModel =
	(mongoose.models?.Skill as mongoose.Model<Skill>) ||
	mongoose.model<Skill>("Skill", SkillSchema);

export default SkillModel;
