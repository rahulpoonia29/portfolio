import { Globe } from "lucide-react";
import Image from "next/image";
import { IconType } from "react-icons/lib";

type Props = {
	project: {
		coverImage: string;
		logo?: IconType;
		title: string;
		description: string;
		techStack: string[];
		href: string;
	};
};

function ProjectMini({ project }: Props) {
	return (
		<div className="rounded-lg overflow-hidden flex flex-col">
			<div
				className="w-full h-auto"
				style={{
					backgroundImage: `url(${project.coverImage})`,
					backgroundSize: "cover",
					backgroundPosition: "center center",
				}}
			>
				<a target="_blank" href={project.href}>
					<Image
						alt={project.title}
						loading="lazy"
						width="512"
						height="512"
						decoding="async"
						className="aspect-video object-cover transition-opacity duration-1000 opacity-100"
						src={project.coverImage}
						style={{ color: "transparent" }}
					/>
				</a>
			</div>
			<div className="flex flex-col gap-5 p-5 md:p-3 bg-[#1A191B] h-full">
				<div className="flex justify-between items-center w-full">
					<div className="flex items-center gap-2">
						<div className="size-5 rounded-md bg-white flex items-center justify-center overflow-hidden">
							{project.logo && (
								<project.logo className="size-3" />
							)}
						</div>
						<span className="font-medium text-sm">
							{project.title}
						</span>
					</div>
					<div className="flex gap-2">
						<a target="_blank" href={project.href}>
							<button className="flex gap-1.5 items-center text-black bg-white rounded px-2 py-1 text-xs font-medium">
								<Globe className="size-3" />
								Website
							</button>
						</a>
					</div>
				</div>
				<div className="flex flex-wrap gap-1">
					{project.techStack.map((tech, index) => (
						<label
							key={index}
							className="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 rounded-md bg-zinc-200 text-black px-2 py-1 text-xs"
						>
							<span>{tech}</span>
						</label>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectMini;
