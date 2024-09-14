import { project } from "@/constants";
import { bricolageGrotesque } from "@/fonts";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";

export const Projects = () => {
	return (
		<div id="projects" className="flex flex-col gap-4">
			<div className="flex justify-between items-center">
				<h2 className={cn("text-lg font-semibold", bricolageGrotesque)}>
					Latest Project
				</h2>
				<div className="-translate-x-0 hover:translate-x-2 px-2 pl-6 cursor-pointer transition-transform py-0.5">
					<ArrowRight size={20} />
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="w-full bg-[#1A191B] rounded-md md:col-span-2">
					<Link href={project.href} target="_blank" prefetch={false}>
						<Image
							src={project.coverImage}
							width={1200}
							height={600}
							alt={project.title}
							className="w-full object-cover rounded-t-md"
						/>
					</Link>
					<div className="flex flex-col gap-6 p-5 md:p-8">
						<div className="space-y-4">
							<div className="flex items-center justify-between">
								<div className="flex gap-2 items-center">
									{project.logo &&
										createElement(project.logo, {
											size: 24,
											className:
												"bg-zinc-200 rounded-lg text-black p-0.5",
										})}
									<h3 className="font-medium text-lg">
										{project.title}
									</h3>
								</div>
								<Link
									href={project.href}
									target="_blank"
									prefetch={false}
									className="flex gap-1 items-center rounded-sm px-2 bg-zinc-100 text-black py-1 cursor-pointer text-sm font-medium"
								>
									<Globe size={16} />
									<p>Website</p>
								</Link>
							</div>

							<p className="opacity-70 text-sm">
								{project.description}
							</p>
						</div>
						<div className="flex flex-wrap gap-2 gap-x-2.5">
							{project.techStack.map((tag) => (
								<div
									key={tag}
									className="font-medium rounded-md bg-zinc-200 text-black px-2 py-1 text-xs"
								>
									<span className="">{tag}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
