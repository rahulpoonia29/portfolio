"use client";

import ProjectModel from "@/model/projects.model";
import SkillModel, { Skill } from "@/model/skill.model";
import React, { useState } from "react";

type Props = {};

export default async function Admin({}: Props) {
	// const [username, setUsername] = useState<string>("");
	// const [password, setPassword] = useState<string>("");

	// const handleSubmit = () => {
	// 	console.log(
	// 		username === process.env.NEXT_PUBLIC_USERNAME &&
	// 			password === process.env.NEXT_PUBLIC_PASSWORD,
	// 	);
	// 	sessionStorage.setItem;
	// };

	// const skillData = await SkillModel.find({}).lean();
	// const projectData = await ProjectModel.find({}).lean();

	return (
		<div className="mt-16">
			{/* {skillData.map((skill: Skill) => {
				return <span key={skill.name}>{skill.name}</span>;
			})} */}
		</div>
		// <div className="flex min-h-screen items-center justify-center">
		// 	<form>
		// 		<div className="mb-4">
		// 			<label
		// 				htmlFor="username"
		// 				className="mb-2 block text-sm font-bold text-gray-400"
		// 			>
		// 				Username
		// 			</label>
		// 			<input
		// 				type="text"
		// 				id="username"
		// 				className="w-full rounded border border-gray-700 bg-gray-700 px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
		// 				placeholder="Enter your username"
		// 				onChange={(e) => {
		// 					setUsername(e.target.value);
		// 				}}
		// 			/>
		// 		</div>
		// 		<div className="mb-6">
		// 			<label
		// 				htmlFor="password"
		// 				className="mb-2 block text-sm font-bold text-gray-400"
		// 			>
		// 				Password
		// 			</label>
		// 			<input
		// 				type="password"
		// 				id="password"
		// 				className="w-full rounded border border-gray-700 bg-gray-700 px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
		// 				placeholder="Enter your password"
		// 				onChange={(e) => {
		// 					setPassword(e.target.value);
		// 				}}
		// 			/>
		// 		</div>
		// 		<button
		// 			className="w-full rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
		// 			onClick={(e) => {
		// 				e.preventDefault();
		// 				handleSubmit();
		// 			}}
		// 		>
		// 			Login
		// 		</button>
		// 	</form>
		// </div>
	);
}
