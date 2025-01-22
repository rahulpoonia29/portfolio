import { project } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<div className="flex flex-col gap-4">
				<Link
					href={"/projects"}
					className="flex justify-between items-center group cursor-pointer"
				>
					<h2
						className={cn(
							"text-lg font-semibold text-zinc-200",
							bricolageGrotesque
						)}
					>
						Latest Projects
					</h2>
					<div className="-translate-x-0 group-hover:translate-x-2 px-2 pl-6 cursor-pointer transition-transform py-0.5">
						<ArrowRight size={20} />
					</div>
				</Link>
				<div className="w-full rounded-lg overflow-hidden">
					<Link href={project.href}>
						<Image
							alt={project.title}
							src={project.coverImage}
							loading="lazy"
							width={1280}
							height={780}
							decoding="async"
						/>
					</Link>
					<div className="bg-[#1A191B] p-5 md:p-8 md:py-6 xl:px-10 xl:py-8 flex flex-col gap-5">
						<div className="w-full flex justify-between items-center">
							<div className="flex gap-2 items-center">
								<div className="size-7 rounded-lg bg-white flex items-center justify-center overflow-hidden">
									<Image
										alt={project.title}
										src={project.logo as string}
										loading="lazy"
										width={256}
										height={256}
										decoding="async"
										className="size-5"
									/>
								</div>
								<span className="font-medium text-lg">
									{project.title}
								</span>
							</div>
							<a target="_blank" href={project.href}>
								<button className="flex gap-1.5 items-center text-black bg-white rounded px-2 py-1 text-sm font-medium">
									<Globe size={16} />
									Website
								</button>
							</a>
						</div>
						<span className="text-zinc-400">
							{project.description}
						</span>
						<div className="flex flex-wrap gap-2">
							{project.techStack.map((tech) => (
								<label
									key={tech}
									className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-md bg-zinc-200 text-black px-2 py-1 text-xs"
								>
									{tech}
								</label>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
