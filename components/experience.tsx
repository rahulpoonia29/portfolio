import { EXPERIENCE } from "@/constants/experience";
import { FaArrowRight } from "react-icons/fa";

export default function Experience() {
	return (
		<section
			id="experience"
			className="flex flex-col gap-4"
			aria-labelledby="experience-heading"
		>
			<h2
				id="experience-heading"
				className="text-lg font-semibold text-zinc-900 dark:text-zinc-200"
			>
				Experience
			</h2>

			<div className="space-y-4">
				{EXPERIENCE.map((exp, index) => (
					<div
						key={index}
						className="rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 hover:ring-2 hover:ring-zinc-300 dark:hover:ring-zinc-600 transition-all duration-200"
					>
						<div className="flex flex-col gap-4">
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
								<div className="flex flex-col gap-2">
									<h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-200">
										{exp.title}
									</h3>
									<div className="flex items-center gap-2">
										<FaArrowRight
											size={12}
											className="text-zinc-500 dark:text-zinc-400"
										/>
										<span className="text-base font-medium text-zinc-700 dark:text-zinc-300">
											{exp.company}
										</span>
									</div>
								</div>
								<div className="text-sm text-zinc-600 dark:text-zinc-400 font-mono bg-zinc-50 dark:bg-zinc-800 px-3 py-1 rounded-md border border-zinc-200 dark:border-zinc-700">
									{exp.duration}
								</div>
							</div>
							<div className="text-base font-normal text-zinc-600 dark:text-zinc-400">
								{Array.isArray(exp.description) && exp.description.length > 1 ? (
									<ul className="space-y-2 list-disc list-inside">
										{exp.description.map((point, pointIndex) => (
											<li key={pointIndex}>{point}</li>
										))}
									</ul>
								) : (
									<p>
										{Array.isArray(exp.description) 
											? exp.description[0] 
											: exp.description
										}
									</p>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
